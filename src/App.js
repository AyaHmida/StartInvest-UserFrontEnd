import React from "react";
import { BrowserRouter } from "react-router-dom"; // Modifier l'importation pour utiliser BrowserRouter au lieu de Router

import AuthentificatedRouter from "./routes/AuthentificatedRouter";
import NoAuthentificatedRouter from "./routes/NoAuthentificatedRouter";
import { UserProvider } from "./context/UserContext";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <UserProvider>
        {token ? <AuthentificatedRouter /> : <NoAuthentificatedRouter />}
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
