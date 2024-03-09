import React, {  useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserContext = React.createContext(null);
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const logout = async (token) => {
        try {
            await axios.post("http://127.0.0.1:8000/api/logout", null, { headers: {'Authorization': `Bearer ${token}`  }});
            setUser(null);

        } catch (error) {
            console.error("Erreur de déconnexion :", error);
        }
    };

    return (
        <UserContext.Provider value={{ user, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
