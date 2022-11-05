import React from "react";
import { useState, setState } from "react";


export const Counter = ()=> {

const [ count, setCount ] = useState(0);

function add () {
 setCount(prevCount => prevCount +1)
}

function dec () {
if (count > 0) {
 return (
  setCount(prevCount => prevCount -1)
 )

 if (count == 0) {
  return (
   setCount(0)
  )
 }
}
}

 return(

<div>
 <button onClick={add}>+</button>
 <button onClick={dec}>-</button>
 <h1>{count}</h1>
</div>

 )
};

export const DoubleCounter = ()=> {

 const [ count, setCount ] = useState(2);
 
 function add () {
  setCount(prevCount => prevCount +2)
 }
 
 function dec () {
 if (count > 2) {
  return (
   setCount(prevCount => prevCount -2)
  )
 
  if (count <= 2) {
   return (
    setCount(2)
   )
  }
 }
 }
 
  return(
 
 <div>
  <button onClick={add}>+</button>
  <button onClick={dec}>-</button>
  <h1>{count}</h1>
 </div>
 
  )
 }