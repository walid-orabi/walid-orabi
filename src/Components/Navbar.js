import { Link } from "react-router-dom";
import "../Assets/Navbar.css";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
const Navbar = () => {
  const { cartItems } = useContext(CardContext);
  return (
    <nav className="navbar">  
   
      <div className="logo">R-W</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart ({cartItems.length})
        </Link>
         </div>
    </nav>
  );
}  
export default Navbar;