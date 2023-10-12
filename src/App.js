import Hero from "./components/Hero";
import Links from "./components/Links";
import Navbar from "./components/Navbar"; 
import Products from "./components/Products";
import Popular from "./components/Popular";
import Discount from "./components/Discount";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <Links/> */}
      <Products/>
      <Popular/>
      <Discount/>
    </div>
  );
}

export default App;
