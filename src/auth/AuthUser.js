import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
  const navigate = useNavigate();

  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };

  const [token, setToken] = useState();
  const [user, setUser] = useState(getUser());

  const saveToken = (user, token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user);
    navigate("/StartInvest");
  };

  const http = axios.create({
    baseURL: "http://127.0.0.1:8000/api/auth",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    setToken: saveToken,
    token,
    user,

    http,
  };
}
