
import React, { useReducer } from 'react'         //  increment decrement resert button
let reducer = (state,action)=>
{
  if (action.type==='add') 
  {
    return state+1
    
  }


  if (action.type==='sub') 
  {
    return state-1
    
  }

  if (action.type==='equal') 
  {
    return 0
    
  }

  return state

}
const Calculator = () => {
  let [state,dispatch] = useReducer(reducer,0)

  return (
    <div style={{marginLeft:"45%",  marginTop:"9%"} } >
      <p>{state}</p>
      <button style={{fontSize:"20px"}} onClick={()=>dispatch({type:"add"})} >+</button>
      <button  style={{fontSize:"20px"}}  onClick={()=>dispatch({type:"sub"})} >-</button>
      <button     style={{fontSize:"20px"}}  onClick={()=>dispatch({type:"equal"})} >=</button>
    </div>
  )
}

export default Calculator;