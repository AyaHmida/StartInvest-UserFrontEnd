import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [numero, setNumero] = useState('');
  
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();
  const uploadPublication = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password); 
      formData.append('numero', numero); 
      formData.append('type', type); 

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Type:", type);
      console.log("Numero:", numero);
      // Ajoutez le fichier à FormData

      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      setMessage(response.data.message);
      setTimeout(() => {
        navigate('/publication');
      }, 2000);
    } catch (error) {
      console.error('Error uploading publication:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadPublication();
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:8000/auth/google/redirect";
  }
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
            <h1 className="mb-2">Sign up</h1>
            <span className="d-block">Already have an account? <Link to="/login">Sign in here</Link></span>
          </div>
          {/* Form START */}
          <form className="mt-4" onSubmit={handleSubmit}>

          <div className="mb-3 input-group-lg">
              <input type="text" className="form-control"  onChange={(e)=>{setName(e.target.value)}} placeholder="Enter name" />
              <small>We'll never share your name with anyone else.</small>
            </div>
            <div className="mb-3">
                    <select className="form-select form-select-lg"  onChange={(e) => setType(e.target.value)}   id="signupModalFormSignupType" aria-label="Type" required>
                        <option value="">Sélectionnez un type</option>
                        <option value="investisseur">Investisseur</option>
                        <option value="fondateur">Fondateur</option>
                    </select>
                    <span className="invalid-feedback">Veuillez sélectionner un type.</span>
            </div>
            {/* Email */}
            <div className="mb-3 input-group-lg">
              <input type="email" className="form-control"  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
              <small>We'll never share your email with anyone else.</small>
            </div>

            <div className="mb-3 input-group-lg">
              <input type="number" className="form-control"  onChange={(e)=>{setNumero(e.target.value)}} placeholder="Enter number phone" />
              <small>We'll never share your number phone with anyone else.</small>
            </div>


           
            {/* New password */}
            <div className="mb-3 position-relative">
              {/* Input group */}
              <div className="input-group input-group-lg">
                <input className="form-control fakepassword" type="password" id="psw-input"  onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter new password" />
                <span className="input-group-text p-0">
                  <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px" />
                </span>
              </div>
              {/* Pswmeter */}
              <div id="pswmeter" className="mt-2" />
              <div className="d-flex mt-1">
                <div id="pswmeter-message" className="rounded" />
                {/* Password message notification */}
                <div className="ms-auto">
                  <i className="bi bi-info-circle ps-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long." data-bs-original-title title />
                </div>
              </div>
            </div>
            {/* Confirm password */}
            <div className="mb-3 input-group-lg">
              <input className="form-control" type="password" placeholder="Confirm password" />
            </div>
            {/* Keep me signed in */}
            <div className="mb-3 text-start">
              <input type="checkbox" className="form-check-input" id="keepsingnedCheck" />
              <label className="form-check-label" htmlFor="keepsingnedCheck"> Keep me signed in</label>
            </div>
            {/* Button */}
            <div className="d-grid"><button type="submit" className="btn btn-lg btn-primary">Sign me up</button></div>
            {/* Copyright */}
          </form><br/>
          <div className="d-grid">
            <button type="button" onClick={handleGoogle}
 class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>
Sign in with Google
</button></div>        </div>
        {/* Sign up END */}
      </div>
    </div> {/* Row END */}
  </div>
  {/* Container END */}
</main>

    </>
  )
}

export default Register