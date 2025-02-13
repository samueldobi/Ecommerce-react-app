import React from 'react'
import Hero from "./Hero";
import Products from "./Products";
import Popular from "./Popular";
import Discount from "./Discount";


const Home = () => {
  return (
    <div>
    <Hero/>
    <Products/>
    <Popular/>
    <Discount/>
    </div>
  )
}

export default Home