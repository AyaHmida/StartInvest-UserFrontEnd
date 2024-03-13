import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [numero, setNumero] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const uploadPublication = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("numero", numero);
      formData.append("type", type);

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Type:", type);
      console.log("Numero:", numero);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage(response.data.message);
      setTimeout(() => {
        navigate("/editProfile");
      }, 2000);
    } catch (error) {
      console.error("Error uploading publication:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadPublication();
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:8000/auth/google/redirect";
  };
  const handleFacebook = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:8000/auth/facebook/redirect";
  };
  return (
    <>
      <main>
        {/* Container START */}
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100 py-5">
            {/* Main content START */}
            <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              {/* Sign up START */}
              <div className="card card-body rounded-3 p-4 p-sm-5">
                <div className="text-center">
                  {/* Title */}
                  <h1 className="mb-2">Inscription</h1>
                  <span className="d-block">
                    Déjà membre ? <Link to="/login">Connectez-vous ici</Link>
                  </span>
                </div>
                {/* Form START */}
                <form className="mt-4" onSubmit={handleSubmit}>
                  <div className="mb-3 input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Entrez votre nom"
                    />
                    <small>
                      Nous ne partagerons jamais votre nom avec qui que ce soit.
                    </small>
                  </div>
                  <div className="mb-3">
                    <select
                      className="form-select form-select-lg"
                      onChange={(e) => setType(e.target.value)}
                      id="signupModalFormSignupType"
                      aria-label="Type"
                      required
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="investisseur">Investisseur</option>
                      <option value="fondateur">Fondateur</option>
                    </select>
                    <span className="invalid-feedback">
                      Veuillez sélectionner un type.
                    </span>
                  </div>
                  {/* Email */}
                  <div className="mb-3 input-group-lg">
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Entrez votre email"
                    />
                    <small>
                      Nous ne partagerons jamais votre email avec qui que ce
                      soit.
                    </small>
                  </div>
                  <div className="mb-3 input-group-lg">
                    <input
                      type="number"
                      className="form-control"
                      onChange={(e) => {
                        setNumero(e.target.value);
                      }}
                      placeholder="Entrez votre numéro de téléphone"
                    />
                    <small>
                      Nous ne partagerons jamais votre numéro de téléphone avec
                      qui que ce soit.
                    </small>
                  </div>
                  {/* New password */}
                  <div className="mb-3 position-relative">
                    <div className="input-group input-group-lg">
                      <input
                        className="form-control fakepassword"
                        type="password"
                        id="psw-input"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        placeholder="Entrez votre nouveau mot de passe"
                      />
                      <span className="input-group-text p-0">
                        <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px" />
                      </span>
                    </div>
                    {/* Pswmeter */}
                    <div id="pswmeter" className="mt-2" />
                    <div className="d-flex mt-1">
                      <div id="pswmeter-message" className="rounded" />
                      <div className="ms-auto">
                        <i
                          className="bi bi-info-circle ps-1"
                          data-bs-container="body"
                          data-bs-toggle="popover"
                          data-bs-placement="top"
                          data-bs-content="Incluez au moins une lettre majuscule, une lettre minuscule, un caractère spécial, un chiffre et une longueur minimale de 8 caractères."
                          data-bs-original-title
                          title
                        />
                      </div>
                    </div>
                  </div>
                  {/* Confirm password */}
                  <div className="mb-3 input-group-lg">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Confirmez votre mot de passe"
                    />
                  </div>
                  {/* Keep me signed in */}
                  <div className="mb-3 text-start">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="keepsingnedCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="keepsingnedCheck"
                    >
                      {" "}
                      Rester connecté
                    </label>
                  </div>
                  {/* Button */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-lg btn-primary">
                      M'inscrire
                    </button>
                  </div>
                  <div class="text-center">
                    <br />
                    <p>ou inscrirez-vous avec:</p>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;
