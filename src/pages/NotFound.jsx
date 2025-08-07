import React from "react";
import '/src/App.css';
import {Link} from "react-router-dom";

const NotFound = () => (
    <div className="content">
        <h1>404 - Page Not Found</h1>
        <p>
            <Link to="/about" className="navbarItem">Go to About</Link> or
            <Link to="/users" className="navbarItem">Users</Link>
        </p>
    </div>
);

export default NotFound;
