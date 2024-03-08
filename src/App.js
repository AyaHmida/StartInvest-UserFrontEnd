import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {PageHome,Publication,Profile,Notifications, Messaging, PostDetails, EditProfile , ProfileConnection,Register, Login, Forgetpassword , Resetpassword} from './components/index'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/publication" element={<Publication />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messaging" element={<Messaging />} />
                <Route path="/postDetails" element={<PostDetails />} />
                <Route path="/editProfile" element={<EditProfile />} />
                <Route path="/profileConnection" element={<ProfileConnection />} />  
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<Forgetpassword />} />
                <Route path="/password-reset/:token" element={<Resetpassword />} />
                
 
            </Routes>
        </Router>
    );
}

export default App;
