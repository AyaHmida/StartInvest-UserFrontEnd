import axios from 'axios';
import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';

function Header() {
  const navigate=useNavigate();
  const Logout=(e)=>{
  //   e.preventDefault();
  //   const token = localStorage.getItem('token');
  //   axios.post("http://127.0.0.1:8000/api/logout", null, {
  //       headers: {
  //           'Authorization': `Bearer ${token}` 
  //       }
  //   })
  //   .then(() => {
  //     localStorage.removeItem('token');
  //     delete axios.defaults.headers.common['Authorization'];
  //     navigate('/login');
  //  })
  //   .catch((err)=>{console.log(err)})

  }
  return (
  <>

<header className="navbar-light fixed-top header-static bg-mode">
  {/* Logo Nav START */}
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      {/* Logo START */}
      <Link className="navbar-brand" to="/publication">
        <img className="light-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo" />
        <img className="dark-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo" />
      </Link>
      {/* Logo END */}
      {/* Responsive navbar toggler */}
      <button className="navbar-toggler ms-auto icon-md btn btn-light p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-animation">
          <span />
          <span />
          <span />
        </span>
      </button>
      {/* Main navbar START */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
          <div className="nav-item w-100">
            <form className="rounded position-relative">
              <Link to="/profileConnection">  
              <input className="form-control ps-5 bg-light" type="search" placeholder="Search..." aria-label="Search" />
              <button className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit"><i className="bi bi-search fs-5"> </i></button>
              </Link>
            </form>
          </div>
        </div>
        {/* Nav Search END */}
      </div>
      {/* Main navbar END */}
      {/* Nav right START */}
      <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
        <li className="nav-item ms-2">
          <Link className="nav-link bg-light icon-md btn btn-light p-0" to="/messaging">
            <i className="bi bi-chat-left-text-fill fs-6"> </i>
          </Link>
        </li>
        <li className="nav-item dropdown ms-2">
          <a className="nav-link bg-light icon-md btn btn-light p-0" href="#" id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            <span className="badge-notif animation-blink" />
            <i className="bi bi-bell-fill fs-6"> </i>
          </a>
          <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0" aria-labelledby="notifDropdown">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span></h6>
                <a className="small" href="#">Clear all</a>
              </div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush list-unstyled p-2">
                  <li>
                    <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3 position-relative">
                      <div className="avatar text-center d-none d-sm-inline-block">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt />
                      </div>
                      <div className="ms-sm-3 d-flex">
                        <div>
                          <p className="small mb-2">Wish <b>Amanda Reed</b> a happy birthday (Nov 12)</p>
                          <button className="btn btn-sm btn-outline-light py-1 me-2">Say happy birthday 🎂</button>
                        </div>
                        <p className="small ms-3">2min</p>
                      </div>
                    </div>
                  </li>
                  {/* Notif item */}
                  {/* Notif item */}
                  <li>
                    <a href="#" className="list-group-item list-group-item-action rounded d-flex border-0 p-3 mb-1">
                      <div className="avatar text-center d-none d-sm-inline-block">
                        <img className="avatar-img rounded-circle" src="assets/images/logo/12.svg" alt />
                      </div>
                      <div className="ms-sm-3 d-flex">
                        <p className="small mb-2"><b>Bootstrap in the news:</b> The search giant’s parent company, Alphabet, just joined an exclusive club of tech stocks.</p>
                        <p className="small ms-3">4hr</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-footer text-center">
                <a href="notifications.html" className="btn btn-sm btn-primary-soft">See all incoming activity</a>
              </div>
            </div>
          </div>
        </li>
        {/* Notification dropdown END */}
        <li className="nav-item ms-2 dropdown">
          <a className="nav-link btn icon-md p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="avatar-img rounded-2" src="assets/images/avatar/07.jpg" alt />
          </a>
          <ul className="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3" aria-labelledby="profileDropdown">
            {/* Profile info */}
            <li className="px-3">
              <div className="d-flex align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar me-3">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                </div>
                <div>
                  <Link className="h6 stretched-link" to="/profile">Lori Ferguson</Link>

                  <p className="small m-0">type</p>
                </div>
              </div>
            </li>
            <li className="dropdown-divider" />
            <li><Link className="dropdown-item bg-danger-soft-hover" onClick={Logout}><i className="bi bi-power fa-fw me-2" />Sign Out</Link></li>
           
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</header>

  </>

  )
}

export default Header