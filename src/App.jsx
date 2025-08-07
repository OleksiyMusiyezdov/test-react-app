import React from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import Users from "./pages/Users.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router basename="/test-react-app">
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/about" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer position="top-right" autoClose={3000} />
        </Router>
    );
}

export default App
