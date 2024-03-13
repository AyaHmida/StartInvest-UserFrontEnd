import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  PageHome,
  Publication,
  Profile,
  Notifications,
  Messaging,
  PostDetails,
  EditProfile,
  ProfileConnection,
  Register,
  Login,
  Forgetpassword,
  Resetpassword,
  Reclamation,
  UpdateProfile,
} from "./components/index";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <UserProvider>
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
          <Route path="/reclamation" element={<Reclamation />} />
          <Route path="/modifier-profile" element={<UpdateProfile />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
