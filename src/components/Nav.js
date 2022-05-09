
import { Link } from "react-router-dom";
const NavCont = () => {
  return (
    <nav className="navCont">
      <p className="brandName">Sounding keys</p>
      <p className="navLinks"><Link to="/">Home </Link> /</p>
      <p className="navLinks"><Link to="/about">About </Link> /</p>
      <p className="navLinks"><Link to="/contact">Contact</Link></p>
    </nav>
  )
};
export default NavCont;
