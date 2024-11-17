import React from 'react'
import ReactDOM from'react-dom'

function Sound () {     // component 
 return (<>
 <h1> Hello </h1>
 <h2>  About </h2>
 </>)
}
let a =(<>
<h1>hello </h1>
<h2>  Hoiii </h2>

<Sound/>
</>)


let rootEl = document.getElementById('root');
ReactDOM.render (a,rootEl);
console.log(a);

export default Sound;
