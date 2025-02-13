import React from 'react'
import Hero from "./Hero";
import Products from "./Products";
import Popular from "./Popular";
import Discount from "./Discount";
import Testnav from "./Testnav";
 

const Home = () => {
  return (
    <div>
    <Hero/>
    <Products/>
    <Popular/>
    <Discount/>
    <Testnav/>
    </div>
  )
}

export default Home