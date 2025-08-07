import React, {useEffect, useState} from "react";
import '/src/App.css';
import {useNavigate} from "react-router-dom";
import {USERS} from "../data/usersData.js";
import { toast } from 'react-toastify';
import Spinner from "../components/Spinner/Spinner.jsx";

const Users = () => {
    const [filter, setFilter] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // User data may be fetched from a public API or simulated within the application.
    useEffect(() => {
        setLoading(true);
        try {
            // Simulating async fetch
            setTimeout(() => {
                setUsers(USERS);
                setLoading(false);
            }, 1000);
            // throw new Error('Error simulated successfully!');
        } catch (error) {
            console.error("Error fetching users:", error);
            toast.error("Failed to load users. Please try again.");
            setLoading(false);
        }
    }, []);

    const filteredUsers = users.filter(user =>
        (`${user.firstName} ${user.lastName}`).toLowerCase().includes(filter.toLowerCase())
    );

    if (loading) return <Spinner />;

    return (
        <div className="content">
            <h1>Users</h1>
            <input
                type="text"
                placeholder="Filter by name"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                aria-label="Filter users by name"
            />
            <div className="user-list">
                {filteredUsers.map(user => (
                    <div key={user.id} className="user-card">
                        <h3>{user.firstName} {user.lastName}</h3>
                        <button onClick={() => navigate(`/users/${user.id}`)} aria-label={`Details for ${user.firstName} ${user.lastName}`}>Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
