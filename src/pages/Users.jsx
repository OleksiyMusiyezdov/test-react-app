import React, { useState } from "react";
import '/src/App.css';
import {useNavigate} from "react-router-dom";
import Spinner from "../components/Spinner/Spinner.jsx";
import useFetchUsers from "../hooks/useFetchUsers.js";

const Users = () => {
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();

    // User data may be fetched from a public API or simulated within the application.
    const { users, loading } = useFetchUsers();

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
