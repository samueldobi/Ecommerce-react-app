import React from 'react'
import Hero from "./Hero";
import Products from "./Products";
import Popular from "./Popular";
import Discount from "./Discount";
import Footer from "./Footer";

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