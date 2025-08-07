import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => (
    <nav className="navbar">
        <Link to="/about" className="navbarItem">About</Link>
        <Link to="/users" className="navbarItem">Users</Link>
    </nav>
);

export default NavBar;
