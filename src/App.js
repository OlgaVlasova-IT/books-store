
import Home from './Home'
import Bestsellers from './Bestsellers';
import './App.css';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import cartIcon from './cart-shopping-solid.svg'



function App() {
 const showCart= ()=> {
  const x = document.getElementById('cart');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
 }
 
  return (
    <div>
      {/* <Cover/> */}
      <Router>
       <div>
        <nav className="navBar">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/Bestsellers" className="link">
            BestSellers
          </Link>
          <Link to="/Contact" className="link">
            Contact
          </Link>

          {/* <div className="cartIconCont"  ><button>Check</button></div> */}
          <div className="cartIconCont" onClick={()=>{showCart()}} ><img src={cartIcon} width="50px"/></div>
        </nav>
        
        </div>
    
        <Routes>
          <Route path="/" element={
              <Home
              />
            }></Route>
            <Route path="/Bestsellers" element={
              <Bestsellers
              />
            }></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
