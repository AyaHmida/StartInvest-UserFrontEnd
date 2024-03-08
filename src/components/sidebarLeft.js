import React from 'react'
import { Link } from 'react-router-dom'

function sidebarLeft() {
  return (
    <>
    <div className="col-lg-3">

<div className="d-flex align-items-center d-lg-none">
  <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
    <span className="btn btn-primary"><i className="fa-solid fa-sliders-h"></i></span>
    <span className="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
  </button>
</div>

<nav className="navbar navbar-expand-lg mx-0">
  <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
    <div className="offcanvas-header">
      <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div className="offcanvas-body d-block px-2 px-lg-0">
      <div className="card overflow-hidden">
      <div
className="h-50px "
style={{
backgroundImage: 'url(assets/images/bg/01.jpg)',
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
}}
></div>
        <div className="card-body pt-0">
          <div className="text-center">
            <div className="avatar avatar-lg mt-n5 mb-3">
              <a href="#!"><img className="avatar-img rounded border border-white border-3" src="assets/images/avatar/07.jpg" alt="" /></a>
            </div>
            <h5 className="mb-0"> <Link to="/profile">Sam Lanson </Link> </h5>
            <small>Web Developer at Webestica</small>
            <p className="mt-3">Description for startup if exist</p>

            <div className="hstack gap-2 gap-xl-3 justify-content-center">
              <div>
                <h6 className="mb-0">256</h6>
                <small>Post</small>
              </div>


            </div>
          </div>

          <hr />

          <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
            <li className="nav-item">
              <Link  className="nav-link" to="/profile"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/home-outline-filled.svg" alt="" /><span>profile </span></Link>
            </li>
            

            <li className="nav-item">
              <Link className="nav-link" to="/notifications"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/notification-outlined-filled.svg" alt="" /><span>Notifications </span></Link>
            </li>

          </ul>
        </div>

        
      </div>

    </div>
  </div>
</nav>
</div>
    </>
  )
}

export default sidebarLeft