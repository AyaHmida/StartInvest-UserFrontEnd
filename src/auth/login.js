import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Login() {
  const { search } = useLocation();
  const errorMessage = new URLSearchParams(search).get("message");
  const handleGoogle = (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:8000/auth/google/redirect";
  };
  const handleFacebook = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:8000/auth/facebook/redirect";
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSumit = (e) => {
    e.preventDefault();
    setError("");
    console.log(email, password);
    axios
      .post("http://127.0.0.1:8000/api/login", { email, password })
      .then((res) => {
        console.log(res.data);
        navigate("/publication");
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("Une erreur s'est produite. Veuillez réessayer.");
        }
      });
  };
  return (
    <>
      <main>
        {/* Container START */}
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100 py-5">
            {/* Main content START */}
            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              {/* Sign in START */}
              <div className="card card-body text-center p-4 p-sm-5">
                {/* Title */}
                <h1 className="mb-2">Connexion</h1>
                {errorMessage && (
                  <p className="text-danger mb-3">{errorMessage}</p>
                )}

                {/* Form START */}
                <form className="mt-sm-4" onSubmit={handleSumit}>
                  {/* Email */}
                  <div className="mb-3 input-group-lg">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Entrez votre email"
                    />
                  </div>
                  {/* Nouveau mot de passe */}
                  <div className="mb-3 position-relative">
                    {/* Mot de passe */}
                    <div className="input-group input-group-lg">
                      <input
                        className="form-control fakepassword"
                        type="password"
                        id="psw-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Entrez votre nouveau mot de passe"
                      />
                      <span className="input-group-text p-0">
                        <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px" />
                      </span>
                    </div>
                  </div>
                  {/* Se souvenir de moi */}
                  <div className="mb-3 d-sm-flex justify-content-between">
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rememberCheck"
                      >
                        Se souvenir de moi?
                      </label>
                    </div>
                    <Link to="/forgot-password">Mot de passe oublié?</Link>
                  </div>
                  {/* Bouton */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-lg btn-primary">
                      Se connecter
                    </button>
                  </div>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <br />
                  <div class="text-center">
                    <p>
                      Vous n'avez pas de compte?{" "}
                      <Link to="/register">S'inscrire</Link>
                    </p>
                    <p>ou connectez-vous avec:</p>
                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                      onClick={handleFacebook}
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                      onClick={handleGoogle}
                    >
                      <i class="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </button>
                  </div>
                </form>
              </div>
              {/* Sign in START */}
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
        {/* Container END */}
      </main>
    </>
  );
}

export default Login;
