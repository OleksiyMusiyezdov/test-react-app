import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {USERS} from "../data/usersData.js";

export default function useFetchUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                // Simulating async fetch
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // Uncomment to simulate an error
                // throw new Error("Error simulated successfully!");

                setUsers(USERS);
            } catch (error) {
                console.error("Error fetching users:", error);
                toast.error("Failed to load users. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { users, loading };
}
