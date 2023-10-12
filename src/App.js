import Hero from "./components/Hero";
import Links from "./components/Links";
import Navbar from "./components/Navbar"; 
import Products from "./components/Products";
import Popular from "./components/Popular";
import Discount from "./components/Discount";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <Links/> */}
      <Products/>
      <Popular/>
      <Discount/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
