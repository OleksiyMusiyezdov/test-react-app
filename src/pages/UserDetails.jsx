import {useNavigate, useParams} from "react-router-dom";
import '/src/App.css';
import React from "react";
import {USERS} from "../data/usersData.js";

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const user = USERS.find(u => u.id === id);

    if (!user) return <div className="content">User not found.</div>;

    return (
        <div className="content">
            <h1 id={"user-details"}>User Details</h1>
            <div className="user-details-card">
                <div className="field">
                    <div className={"user-details-card-label"}>First Name:</div>
                    <div className={"user-details-card-value"}>{user.firstName}</div>
                </div>
                <div className="field">
                    <div className={"user-details-card-label"}>Last Name:</div>
                    <div className={"user-details-card-value"}>{user.lastName}</div>
                </div>
                <div className="field">
                    <div className={"user-details-card-label"}>Username:</div>
                    <div className={"user-details-card-value"}>{user.username}</div>
                </div>
                <div className="field">
                    <div className={"user-details-card-label"}>Email:</div>
                    <div className={"user-details-card-value"}>{user.email}</div>
                </div>
                <div className="field">
                    <div className={"user-details-card-label"}>Phone:</div>
                    <div className={"user-details-card-value"}>{user.phone}</div>
                </div>
            </div>
            <button className={"user-details-back-button"} onClick={() => navigate('/users')}>Back</button>
        </div>
    );
};

export default UserDetails;
