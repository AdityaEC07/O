import React, { useEffect, useState } from 'react'
import './App.css';         //create form   and summit
import { Form } from 'react-router-dom';
const Input = () => {

  let [input,setInput]= useState({
    firstName:"",
    lastName:"",
    email:"",
    passward:"",
 
  })
  function fun1(e){
    const {name,value}=e.target;
    setInput({...input,[name]:value})
    console.log(e.target. value,e.target);
    
    console.log(input,"input");
  }
  
  let [data,SetData]=useState(null)
  useEffect(()=>{
    let val=   localStorage.getItem('data')
    let newData=   JSON.parse(val)
 console.log(newData,"rrr");
SetData(newData)


  },[])



  const done = (e)=>{
    e.preventDefault();    
    // console.log('hiiiii');
    console.log(input);
    let a = JSON.stringify(input)
    localStorage.setItem('data',a)
    
  }

  return (
    <div>
     
      <form className='fom'  onSubmit={done} >
      <h1  style={{marginLeft:'50%'}} > STUDENT FORM</h1>
        <input  type='tex'  required     onChange={fun1} name='firstName'  value={input.firstName} placeholder='enter first name ' />
        <input  type='tex'  required    onChange={fun1} name='lastName' value={input.lastName}   placeholder='enter lasr name ' />
        <input  type='tex' required   onChange={fun1}   name='email'  value={input.email} placeholder='enter email  ' />
        <input  type='tex' required   onChange={fun1}   name='passward'   value={input.passward} placeholder='enter type passwaed' />
        <button   type='submit'> add</button>
      </form>


{
  data?(
    <>
<h1>{data.firstName}</h1>
<h1>{data.lastNametName}</h1>
<h1>{data.email}</h1>

    </>
  ):(<><h2>kuch nhi mila</h2></>)
}

    </div>
  )
}

export default Input;


