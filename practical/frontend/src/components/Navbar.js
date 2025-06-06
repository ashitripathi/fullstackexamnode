import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Profiles</Link> |<Link to="/register">Register</Link> |
      <Link to="/login">Login</Link> |<Link to="/profile">My Profile</Link>
    </nav>
  );
}

export default Navbar;
