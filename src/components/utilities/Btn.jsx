import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import Data from '../Phones.json';

const Btn = () => {
  const addProduct = (arg) =>{
    console.log('hi')
    {<h1>hello</h1>}
  }
  return (
    <div>
      <Link to={"/productPage"}>
      <Button  onClick={addProduct} variant="" className="buy-btn text-light">Buy </Button>
      </Link>
    </div>
  )
}

export default Btn