import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error, setError] = useState('');
  const handleGoogle = (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:8000/auth/google/redirect";
  }

  const navigate=useNavigate();
  const handleSumit=(e)=>{
    e.preventDefault();
    setError('');
    console.log(email,password);
    axios.post("http://127.0.0.1:8000/api/login",{email,password} )
    .then((res)=>{console.log(res.data); navigate('/publication') })
    .catch((err)=>{
      console.log(err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); 
      } else {
        setError('Une erreur s\'est produite. Veuillez réessayer.'); 
      }
    
    })


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
          {/* Title */}
          <h1 className="mb-2">Sign in</h1>
          <p className="mb-0">Don't have an account?<Link to="/register"> Click here to sign up</Link></p>
          {/* Form START */}
          <form className="mt-sm-4" onSubmit={handleSumit}>
            {/* Email */}
            <div className="mb-3 input-group-lg">
              <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
            </div>
            {/* New password */}
            <div className="mb-3 position-relative">
              {/* Password */}
              <div className="input-group input-group-lg">
                <input className="form-control fakepassword" type="password" id="psw-input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter new password" />
                <span className="input-group-text p-0">
                  <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px" />
                </span>
              </div>
            </div>
            {/* Remember me */}
            <div className="mb-3 d-sm-flex justify-content-between">
              <div>
                <input type="checkbox" className="form-check-input" id="rememberCheck" />
                <label className="form-check-label" htmlFor="rememberCheck">Remember me?</label>
              </div>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
            {/* Button */}
            <div className="d-grid"><button type="submit" className="btn btn-lg btn-primary">Login</button></div>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div class="text-center">

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1" onClick={handleGoogle}>
  <i class="fab fa-google"></i>
</button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
  <i class="fab fa-linkedin-in"></i>
</button>

                  </div>

            {/* Copyright */}
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

export default Login