import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { callApi } from "../api";
import { PublicationsAutrePub, ModelPublication } from "../components";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [previewURL, setPreviewURL] = useState(null);
  const [userdetail, setUserdetail] = useState();
  const [startup, setStartup] = useState();
  const { userId } = useParams();

  const getStartup = async (userId) => {
    await callApi(`auth/startup/${userId}`, "GET").then((response) => {
      setStartup(response);
    });
  };

  useEffect(() => {
    getStartup(userId);
    getUser(userId);
  }, []);
  
  const formatDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getUser = (userId) => {
    callApi(`auth/userById/${userId}`).then((data) => {
      setUserdetail(data);
      setPreviewURL(data.image);
    });
  };

  return (
    <div>
      <Header />
      <br></br>
      <div className="container">
        <div className="row g-4">
          <br></br>
          <br></br>
          <div className="col-lg-8 vstack gap-4">
            <div className="card">
              <div
                className="h-200px rounded-top"
                style={{
                  backgroundImage: "url(assets/images/bg/05.jpg)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="card-body py-0">
                <div className="d-sm-flex align-items-start text-center text-sm-start">
                  <div className="position-relative d-inline-block">
                    <div className="avatar avatar-xxl mt-n5 mb-3 position-relative">
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
                  </div>
                  {userdetail && (
                    <div className="ms-sm-4 mt-sm-3">
                      {/* Info */}
                      <h1 className="mb-0 h5">
                        {userdetail.name}&nbsp;
                        <i className="bi bi-patch-check-fill text-success small" />
                      </h1>
                      <p>{userdetail.type}</p>
                    </div>
                  )}
                </div>

                {userdetail && (
                  <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                    <li className="list-inline-item">
                      <i className="bi bi-calendar2-plus me-1" /> account
                      created on {formatDate(userdetail.created_at)}
                    </li>
                  </ul>
                )}
              </div>
              <div className="card-footer mt-3 pt-2 pb-0">
                <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link active"> Posts </a>{" "}
                  </li>
                </ul>
              </div>
            </div>

            <PublicationsAutrePub />
          </div>

          <div className="col-lg-4">
            <div className="row g-4">
              <div className="col-md-6 col-lg-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h5 className="card-title">About</h5>
                  </div>
                  {userdetail && (
                    <div className="card-body position-relative pt-0">
                      {startup && <p>{startup.description}</p>}
                      <ul className="list-unstyled mt-3 mb-0">
                        <li className="mb-2">
                          {" "}
                          <i className="bi bi-telephone fa-fw pe-1" />{" "}
                          Télephone: <strong> {userdetail.numero} </strong>{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-1" /> Email:{" "}
                          <strong> {userdetail.email} </strong>{" "}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModelPublication />
    </div>
  );
};

export default Profile;
