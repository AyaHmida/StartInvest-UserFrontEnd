import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { callApi } from "../api";

function Header() {
  const navigate = useNavigate();
  const [userdetail, setUserdetail] = useState();
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const markAllRead = async () => {
    const response = await callApi("auth/markAllRead");
    console.log(response);
  };
  const markAsRead = (notificationId) => {
    try {
      callApi(`auth/markAsRead/${notificationId}`);
    } catch (error) {
      console.error(error);
    }
  };
  const getNotifications = () => {
    callApi("auth/notifications").then((data) => {
      const parsedNotifications = data.likedNotifications.map(
        (notification) => ({
          ...notification,
          data: JSON.parse(notification.data),
        })
      );

      const uniqueNotifications = [];
      const seenData = new Set();

      parsedNotifications.forEach((notification) => {
        const notificationData = JSON.stringify(notification.data);
        if (!seenData.has(notificationData)) {
          uniqueNotifications.push(notification);
          seenData.add(notificationData);
        }
      });

      setNotifications(uniqueNotifications);
      // console.log(uniqueNotifications);
    });
  };

  const handleSearch = async () => {
    try {
      const response = await callApi("auth/search", "GET", null, false, {
        query: query,
      });
      setSearchResult(response);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const getUser = () => {
    callApi("auth/user").then((data) => {
      setUserdetail(data);
    });
  };

  const handleLogout = () => {
    callApi("auth/logout", "POST")
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  useEffect(() => {
    getUser();
    handleSearch();
    getNotifications();
  }, [query]);
  return (
    <>
      <header className="navbar-light fixed-top header-static bg-mode">
        <nav className="navbar">
          <div className="container">
            <Link className="navbar-brand" to="/publication">
              <img
                className="light-mode-item navbar-brand-item"
                src="assets/images/logo.svg"
                alt="logo"
              />
              <img
                className="dark-mode-item navbar-brand-item"
                src="assets/images/logo.svg"
                alt="logo"
              />
            </Link>

            <div className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
              <div className="nav-item w-100">
                <form className="rounded position-relative">
                  <input
                    className="form-control ps-5 bg-light"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    data-bs-toggle="modal"
                    data-bs-target="#search"
                  />
                  <button
                    className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                    type="submit"
                  >
                    <i className="bi bi-search fs-5"> </i>
                  </button>
                </form>
              </div>
            </div>

            <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
              <li className="nav-item ms-2">
                <Link
                  className="nav-link bg-light icon-md btn btn-light p-0"
                  to="/messaging"
                >
                  <i className="bi bi-chat-left-text-fill fs-6"> </i>
                </Link>
              </li>
              <li className="nav-item dropdown ms-2">
                <a
                  className="nav-link bg-light icon-md btn btn-light p-0"
                  href="#"
                  id="notifDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <span className="badge-notif animation-blink" />
                  <i className="bi bi-bell-fill fs-6"> </i>
                </a>
                <div
                  className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0"
                  aria-labelledby="notifDropdown"
                >
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h6 className="m-0">
                        Notifications{" "}
                        <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                          4 new
                        </span>
                      </h6>
                      <a
                        className="small"
                        href="#"
                        onClick={() => markAllRead()}
                      >
                        Tout Marquer comme lu
                      </a>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group list-group-flush list-unstyled p-2">
                        {notifications.map((notification) => (
                          <li key={notification.id}>
                            <a
                              href="#"
                              className="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3"
                            >
                              <div className="avatar text-center d-none d-sm-inline-block">
                                <div className="avatar-img rounded-circle ">
                                  <img
                                    src={`http://127.0.0.1:8000/uploads/${notification.data.image}`}
                                    alt="Image"
                                  />
                                </div>
                              </div>
                              <div className="ms-sm-3">
                                <div className="d-flex">
                                  <p className="small mb-2">
                                    {notification.data.user} est{" "}
                                    {notification.data.title}
                                  </p>
                                  <p className="small ms-3">
                                    {notification.created_at}
                                  </p>
                                </div>
                                <a onClick={() => markAsRead(notification.id)}>
                                  Marquer comme lu
                                </a>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-footer text-center">
                      <Link
                        to="/notifications"
                        className="btn btn-sm btn-primary-soft"
                      >
                        See all incoming activity
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item ms-2 dropdown">
                <a
                  className="nav-link btn icon-md p-0"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="avatar-img rounded-circle border border-white border-3"
                    src={
                      userdetail && userdetail.image
                        ? `http://127.0.0.1:8000/uploads/${userdetail.image}`
                        : "assets/images/avatar/no-image-male.jpg"
                    }
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3"
                  aria-labelledby="profileDropdown"
                >
                  {/* Profile info */}
                  <li className="px-3">
                    <div className="d-flex align-items-center position-relative">
                      {/* Avatar */}
                      <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle border border-white border-3"
                          src={
                            userdetail && userdetail.image
                              ? `http://127.0.0.1:8000/uploads/${userdetail.image}`
                              : "assets/images/avatar/no-image-male.jpg"
                          }
                        />
                      </div>
                      <div>
                        <div>
                          <Link className="h6 stretched-link" to="/profile">
                            {userdetail && (
                              <>
                                <p>{userdetail.name}</p>
                                <p className="small m-0">{userdetail.email}</p>
                              </>
                            )}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-divider" />
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      to="/reclamation"
                    >
                      <i className="bi bi-envelope-exclamation-fill" />
                      &nbsp;&nbsp; Reclamation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      onClick={handleLogout}
                    >
                      <i className="bi bi-power fa-fw me-2" />
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div
        className="modal fade"
        id="search"
        tabIndex="-1"
        aria-labelledby="feedActionPhotoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <div className="nav-item w-100">
                <div className="rounded position-relative">
                  <input
                    className="form-control ps-5 bg-light"
                    type="search"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <button
                    className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                    type="submit"
                  >
                    <i className="bi bi-search fs-5"> </i>
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              {Array.isArray(searchResult) && searchResult.length > 0 ? (
                searchResult.map((user, index) => (
                  <div className="d-flex mb-3">
                    <div className="hstack gap-2">
                      <div className="d-md-flex align-items-center mb-4">
                        <div key={index} className="mb-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar me-3">
                              <a href="#!">
                                {" "}
                                <img
                                  className="avatar-img rounded-circle"
                                  src={
                                    user.image
                                      ? `http://127.0.0.1:8000/uploads/${user.image}`
                                      : "assets/images/avatar/no-image-male.jpg"
                                  }
                                />{" "}
                              </a>
                            </div>
                            <div className="w-100">
                              <div className="d-sm-flex align-items-start">
                                <h6 className="mb-0">
                                  <a>{user.name}</a>
                                  {/* <p>{user.type}</p> */}
                                </h6>
                              </div>
                            </div>
                            <div className="ms-md-auto">
                              <button className="btn btn-primary-soft btn-sm mb-0">
                                {" "}
                                Message{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No results found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

