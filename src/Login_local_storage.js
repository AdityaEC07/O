
import React, { useEffect, useState } from 'react'
import './App.css'; 
const Login_local_storage= () => {
  let [input,SetInput]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""

  })
  let [data,SetData]=useState(null)
    useEffect(()=>{
      let val=   localStorage.getItem('data')
      let newData=   JSON.parse(val)
   console.log(newData,"rrr");
  SetData(newData)


    },[])

  function fun1(e){
    // console.log(e.target.value);   
    let {name,value}=e.target
    SetInput({...input, [name]:value})
    // console.log(input,"r");

  }

function Delete(){
  localStorage.clear('data')
  SetData(null)
}

function chalaja(e){
  e.preventDefault();
  console.log(input);
     let a=  JSON.stringify(input)
  localStorage.setItem('data',a)

}
  return (
    <div>
      <form onSubmit={chalaja}  style={{marginLeft:'50%'}}>
        <h1 id='one' >STUDENT LOGIN </h1>
        <label for="fname">First name</label><br></br>
        <input type='text'  onChange={fun1}  name='firstName'  value={input.firstName} placeholder='Enter your firstName'/>
        <br/>
        <br/>
        <label for="fname"> LastName</label><br></br>
        <input type='text'  onChange={fun1} name='lastName'  value={input.lastName}  placeholder='Enter your lastName'/>
        <br/>
        <br/>
        <label for="fname">Email</label><br></br>
        <input type='email'  onChange={fun1} name='email'  value={input.email} placeholder='Enter your email'/>
        <br/>
        <br/>
        <label for="fname">Passward</label><br></br>
        <input type='password'    onChange={fun1} name='password' value={input.password} placeholder='Enter your PassWord'/>
        <br/>
        <br/>
        <button   type='submit'> Add</button>
        <button onClick={Delete} >Delete</button>

      </form>
      {
        data?(<>
        <h1> {data.firstName}</h1>
        <h4>   {data.lastName}</h4>
        <h4>  {data.email}</h4>
        </>):(<>    <h2>  </h2></>)
      }

      
    </div>
  )
}

export default Login_local_storage ;


