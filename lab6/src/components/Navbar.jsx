import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">

      <NavLink to="/">Home</NavLink>

      <NavLink to="/">About</NavLink>

      <NavLink to="/">News</NavLink>

      <NavLink to="/quiz">Quiz</NavLink>

      <NavLink to="/">Contact</NavLink>

    </div>
  );
}

export default Navbar;