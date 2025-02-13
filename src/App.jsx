import  Navbar from "./components/Navbar.jsx"; 
import  Home from "./components/Home.jsx";
import   Allproducts from "./components/Allproducts.jsx";
import Phones from "./components/Phones.jsx";
import Accesories from "./components/Accesories.jsx";
import  Laptops from "./components/Laptops.jsx";
import  Footer from "./components/Footer.jsx";
import ProductPage from "./components/ProductPage.jsx";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<Allproducts/>} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/accesories" element={<Accesories />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/productPage" element={<ProductPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
