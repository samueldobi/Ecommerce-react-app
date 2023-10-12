import Hero from "./components/Hero";
import Phones from "./components/Phones";
import Links from "./components/Links";
import Navbar from "./components/Navbar"; 
import Products from "./components/Products";
import Popular from "./components/Popular";
import Discount from "./components/Discount";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
      <Hero/>
      <Products/>
      <Popular/>
      <Discount/>
      <Footer/>
        <Switch>
          <Route exact path ="/phones">
            <Phones/>
          </Route>
          <Route exact path ="/accesories">
            <Phones/>
          </Route>
          <Route exact path ="/laptops">
            <Phones/>
          </Route>
          <Route exact path ="/deals">
            <Phones/>
          </Route>
        </Switch>
      </div> 
    </div>
       </Router>
  
  );
}

export default App;
