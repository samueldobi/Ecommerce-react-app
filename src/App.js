import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import Phones from "./components/Phones";
import Accesories from "./components/Accesories";
import Laptops from "./components/Laptops";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  // const [todos, setTodos] = useState([
  //   { text: 'ribadu ', key: '1' },
  //   { text: 'abido shaker', key: '2' },
  //   { text: 'gagan gagantusa', key: '3' }
  // ]);

  return (
    <Router>
    <div className="App">
      <Navbar/>
     
      
      <div className="content">
        <Switch>
          <Route exact path ="/">
          <Home/>
          </Route>
          <Route exact path ="/phones">
            <Phones/>
          </Route>
          <Route exact path ="/accesories">
            <Accesories/>
          </Route>
          <Route exact path ="/laptops">
            <Laptops/>
          </Route>
          <Route exact path ="/productPage">
            <ProductPage/>
          </Route>
        </Switch>
      </div> 
      <Footer/>
    </div>
       </Router>
  
  );
}

export default App;
