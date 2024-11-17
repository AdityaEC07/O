import React, { useEffect, useState } from 'react'
let App =()=>
{
    let [data,setData] = useState([]);
    useEffect(()=>
{
    fetch('https://dummyjson.com/recipes').then((data)=>
{
    return data.json()
}).then((res)=>
{
    setData(res.recipes)
    console.log(res);
})
},[])


  function remove(id){
  let ss=  data.filter((a)=>{
      return id != a.id
    })
   setData(ss)
}

  return (
    <div>
      {
        data.map((a)=>
      {
        return(<>

         
          <p>{a.id}</p>
          <p> {a.name}</p>
          <p> {a.skin}</p>
          <button  onClick={()=>remove(a.id)}  >DELETE</button>
        </>)
      })
        
      }
        
    </div>
  );
};

export default App;