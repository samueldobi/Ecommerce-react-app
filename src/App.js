import Hero from "./components/Hero";
import Links from "./components/Links";
import Navbar from "./components/Navbar"; 
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <Links/> */}
      <Products/>
    </div>
  );
}

export default App;
