    //  user effect
  import React, { useEffect, useState } from 'react'
  import { json } from 'react-router-dom'
                                  
  const Laptop = () => {
                                  
                                  
                                  
                                  
    const [count,SetCount]=useState(10)
    const [city,SetCity]=useState('bhopal')
                                  
    const [data,SetData]=useState()

                                  
   const fun1=()=>{
   SetCount(count+10)
    }
                                  
    const fun2=()=>{
  SetCity('delhi')
                                  
                                    }
                                  
      useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(response => response.json())
      .then(json => SetData(json))
      },[ ])
                                  
                                  
 return (
                <div>
                                  
                <p> {count}</p>
           <button onClick={fun1}> add count</button>
           <h4> {city}</h4>
               <button  onClick={fun2}>  city option change</button>
                  <h4> 
               {
                  data?.title
                          }
                    </h4>
                      </div>
               )
         }
                                  
export default Laptop;