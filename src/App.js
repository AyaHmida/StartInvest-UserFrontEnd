import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  PageHome,
  Publication,
  Profile,
  Notifications,
  Messaging,
  PostDetails,
  EditProfile,
  Register,
  Login,
  Forgetpassword,
  Resetpassword,
  Reclamation,
  ListReclamation,
  Calendar,
  UpdateProfile,
} from "./components/index";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (newToken) => {
    setToken(newToken);
    return <Navigate to="/publication" />;
  };
  useEffect(() => {
    const expirationTime = localStorage.getItem("expirationTime");
    const currentTime = Date.now();

    if (expirationTime && currentTime > expirationTime) {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      setToken(null);
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/publication" /> : <PageHome />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/publication" /> : <Register />}
        />
        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/publication" />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
        {token && (
          <>
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/postDetails" element={<PostDetails />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/forgot-password" element={<Forgetpassword />} />
            <Route path="/password-reset/:token" element={<Resetpassword />} />
            <Route path="/reclamation" element={<Reclamation />} />
            <Route path="/listReclamation" element={<ListReclamation />} />
          </>
        )}
        {!token && (
          <Route path="/publication" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
