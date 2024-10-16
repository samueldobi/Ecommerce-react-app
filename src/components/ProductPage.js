import React from 'react';
import Data from "../Images.json";
import { useState ,useEffect } from 'react';
const ProductPage = () => {
  // Usestate
  // const[name, setName] = useState('ava')
  // const changeName = ()=>{
  //   setName('ozuor')
  // }
  const [todos, setTodos] = useState([
    { text: 'ribadu ', key: '1' },
    { text: 'abido shaker', key: '2' },
    { text: 'gagan gagantusa', key: '3' }
  ]);
  const populateProduct = () =>{
    console.log('hi')
    return (
    <h2>Hello world </h2>
    )
  }
  // useEffect(() =>{
  //   // console.log('useeffect ran')

  // })
  return (
    <div  >
         <h2>Hello</h2>
        {todos.map((item) =>{
            <div key = {item.id}>
                  <h1>{item.text}</h1>
               
            </div>
          
        })}
    <button onClick={populateProduct}>Click me</button>
    </div>
  )
}

export default ProductPage