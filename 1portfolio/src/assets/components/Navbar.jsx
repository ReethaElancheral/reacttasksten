import { Link,NavLink } from "react-router-dom";

const Navbar = () => {

    
  return (
    <>
   <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Me</NavLink>
        <NavLink to="/Skills" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Skills</NavLink>
        {/* <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink> */}
        <NavLink to="/Contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
    
    </nav>
    </>
 
  )
}

export default Navbar;
