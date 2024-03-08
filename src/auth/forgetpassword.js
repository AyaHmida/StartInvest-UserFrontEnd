import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Forgetpassword() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSumit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    axios.post("http://127.0.0.1:8000/api/forgot-password", { email })
      .then((res) => {
        console.log(res.data);
        setSuccessMessage('Password reset link sent successfully.');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('An error occurred. Please try again.');
      });
  }

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
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {/* Title */}
                <h1 className="mb-2">Trouvez votre compte</h1>
                {/* Form START */}
                <form className="mt-sm-4" onSubmit={handleSumit}>
                  {/* Email */}
                  <div className="mb-3 input-group-lg">
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                  </div>
                  {/* Button */}
                  <div className="d-grid"><button type="submit" className="btn btn-lg btn-primary">Reset Password</button></div>
                </form>
                {/* Form END */}
              </div>
              {/* Sign in START */}
            </div>
          </div> {/* Row END */}
        </div>
        {/* Container END */}
      </main>
    </>
  )
}

export default Forgetpassword;
