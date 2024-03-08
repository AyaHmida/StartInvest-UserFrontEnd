import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

function Resetpassword() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams] = useSearchParams();
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/reset-password', {
      token: token,
      email: email,
      password: password,
      password_confirmation: password_confirmation // Assurez-vous que le nom correspond à celui attendu par Laravel
    })
    .then(() => {
      navigate('/login');
    })
      .catch((err) => {
        console.log(err);
        setErrorMessage('An error occurred. Please try again.'); 
      })
  }

  return (
    <>
    <main>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100 py-5">
          <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <div className="card card-body text-center p-4 p-sm-5">
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              <h1 className="mb-4">Réinitialisation de mot de passe</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 input-group-lg">
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrez votre email" />
                </div>
                <div className="mb-3 position-relative">
                  <div className="input-group input-group-lg">
                    <input className="form-control fakepassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Nouveau mot de passe" />
                    <span className="input-group-text p-0">
                      <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px" />
                    </span>
                  </div>
                </div>
                <div className="mb-3 input-group-lg">
                  <input className="form-control" type="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirmez le mot de passe" />
                </div>
                <div className="d-grid"><button type="submit" className="btn btn-lg btn-primary">Réinitialiser le mot de passe</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default Resetpassword;
