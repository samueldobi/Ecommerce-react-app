import Navbar from "./components/Navbar"; 
import Phones from "./components/Phones";
import Home from "./components/Home";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
      <div className="content">
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
