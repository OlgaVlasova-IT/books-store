import Home from './Home'
import Bestsellers from './Bestsellers';
import './App.css';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";



function App() {
  return (
    <div>
      {/* <Cover/> */}
      <Router>
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
        </nav>
    
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
