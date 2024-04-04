import React, { useEffect, useState } from "react";
import { callApi } from "../api";

const Connections = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await callApi("auth/followerPersonns");
        console.log(response);
        setFollowers(response);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    fetchFollowers();
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-header border-0 pb-0">
          <h5 className="card-title">Connections</h5>
        </div>
        {followers &&
          followers.map((item, index) => (
            <div className="card-body" key={index}>
              <div className="d-md-flex align-items-center mb-4">
                <div className="avatar me-3 mb-3 mb-md-0">
                  <a href="#!">
                    <img
                      className="avatar-img rounded-circle"
                      src={
                        item.image
                          ? `http://127.0.0.1:8000/uploads/${item.image}`
                          : "assets/images/avatar/no-image-male.jpg"
                      }
                      alt={item.name}
                    />
                  </a>
                </div>
                {/* Info */}
                <div className="w-100">
                  <div className="d-sm-flex align-items-start">
                    <h6 className="mb-0">
                      <a href="#!">{item.name}</a>
                    </h6>
                  </div>
                  <ul className="avatar-group mt-1 list-unstyled align-items-sm-center">
                    <li className="small">{item.type} </li>
                  </ul>
                </div>
                <div className="ms-md-auto d-flex">
                  <button className="btn btn-primary-soft btn-sm mb-0 me-2">
                    Message
                  </button>
                </div>
              </div>
              <div className="d-grid">
                <a
                  href="#!"
                  role="button"
                  className="btn btn-sm btn-loader btn-primary-soft"
                  data-bs-toggle="button"
                  aria-pressed="true"
                >
                  <span className="load-text">Load more connections</span>
                  <div className="load-icon">
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </a>
                {/* Load more button END */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Connections;
