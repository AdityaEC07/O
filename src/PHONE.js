import React from 'react'
import { useState } from 'react';


  // //  create form  and summit
  //                         const PHONE= () => {

  //                           let [input,setInput]= useState({
  //                             firstName:"",
  //                             lastName:"",
  //                             email:"",
  //                             pass:"",
                           
  //                           })
  //                           function fun1(e){
  //                             const {name,value}=e.target;
  //                             setInput({...input,[name]:value})
  //                             // console.log(e.target. value,e.target);
                              
  //                             console.log(input,"input");
                          
                          
  //                           }
                          
  //                           const done = (e)=>{
  //                             e.preventDefault();
  //                             console.log('hiiiii');
  //                             console.log(input);
  //                           }
                          
  //                           return (
  //                             <div>
  //                               <form className='fom'  onSubmit={done} >
  //                                 <input  type='tex'  required     onChange={fun1} name='firstName'  value={input.firstName} placeholder='enter first name ' />
  //                                 <input  type='tex'  required    onChange={fun1} name='lastName' value={input.lastName}   placeholder='enter lasr name ' />
  //                                 <input  type='tex' required   onChange={fun1}   name='email'  value={input.email} placeholder='enter email  ' />
  //                                 <input  type='tex' required   onChange={fun1}   name='pass'   value={input.pass} placeholder='enter type pass' />
  //                                 <button> add</button>
  //                               </form>
  //                             </div>
  //                           )
  //                         }



const PHONE = () => {
const [input,setInput]=useState()
const [data,setData]=useState([])
const fun1=(e)=>
{
  setInput(e.target.value)
}
const add =()=>{
  setData([...data,input])
  setInput('')
}

function Delete (id){
  // console.log(id);
    
  let newAA = data.filter((val,index)=>
  {

    return index!=id
  })
setData(newAA)

}

  return (
    <div    style={{  marginLeft: '50%',marginTop: '68px'}}  >
   <input   name='input'  value={input} onChange={fun1}  type='tex'placeholder='Enter your todo' />
   <button onClick={add} > Add</button>    
  
   {
    data.map((a,b,c)=>{
    
    return(<>
    <ol>
    <li>{a}</li>
   
     </ol>
     
    <button   style={{color:'green'}}  onClick={()=>Delete(b)} >Delete</button>
      </>

      )
    })
   }
    </div>
  )
}


export default PHONE