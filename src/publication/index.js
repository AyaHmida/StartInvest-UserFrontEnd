import React, { useEffect, useState } from "react";

import {
  Messages,
  ModelPublication,
  Publications,
  SidebarLeft,
  SidebarRight,
  Header,
} from "../components";
import { callApi } from "../api";

export default function Publication() {
  const [userdetail, setUserdetail] = useState();
  const getUser = () => {
    callApi("auth/user").then((data) => {
      setUserdetail(data);
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Header />
      <br />
      <br />

      <main>
        <div className="container">
          <div className="row g-4">
            <SidebarLeft />

            <div className="col-md-8 col-lg-6 vstack gap-4">
              <div className="card card-body">
                <div className="d-flex mb-3">
                  <div className="avatar avatar-xs me-2">
                    <img
                      className="avatar-img rounded-circle border border-white border-3"
                      src={
                        userdetail && userdetail.image
                          ? `http://127.0.0.1:8000/uploads/${userdetail.image}`
                          : "assets/images/avatar/no-image-male.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <form className="w-100">
                    <textarea
                      className="form-control pe-4 border-0"
                      rows="2"
                      data-autoresize
                      placeholder="Partage tes pensées..."
                      data-bs-toggle="modal"
                      data-bs-target="#feedActionPhoto"
                    ></textarea>
                  </form>
                </div>
                <ul className="nav nav-pills nav-stack small fw-normal">
                  <li className="nav-item">
                    <a
                      className="nav-link bg-light py-1 px-2 mb-0"
                      href="#!"
                      data-bs-toggle="modal"
                      data-bs-target="#feedActionPhoto"
                    >
                      {" "}
                      <i className="bi bi-image-fill text-success pe-2"></i>
                      Photo
                    </a>
                  </li>
                </ul>
              </div>

              <Publications />

              <a
                href="#!"
                role="button"
                className="btn btn-loader btn-primary-soft"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                <span className="load-text"> Load more </span>
                <div className="load-icon">
                  <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </a>
            </div>

            <SidebarRight />
          </div>
        </div>
      </main>
      <Messages />

      <ModelPublication />
    </div>
  );
}
