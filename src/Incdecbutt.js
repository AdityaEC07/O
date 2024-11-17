
import React, { useReducer } from 'react'         //  increment decrement resert button
let reducer = (state,action)=>
{
  if (action.type==='incre') 
  {
    return state+1
    
  }


  if (action.type==='decr') 
  {
    return state-1
    
  }

  if (action.type==='reset') 
  {
    return 0
    
  }

  return state

}
const Incdecbutt = () => {
  let [state,dispatch] = useReducer(reducer,0)

  return (
    <div style={{marginLeft:"45%",  marginTop:"9%"} } >
      <p>{state}</p>
      <button style={{fontSize:"20px"}} onClick={()=>dispatch({type:"incre"})} >increment</button>
      <button  style={{fontSize:"20px"}}  onClick={()=>dispatch({type:"decr"})} >decrement</button>
      <button     style={{fontSize:"20px"}}  onClick={()=>dispatch({type:"reset"})} >reset</button>
    </div>
  )
}

export default Incdecbutt;
