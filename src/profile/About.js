import React, { useEffect, useState } from "react";
import { callApi } from "../api";

const About = () => {
  const [userdetail, setUserdetail] = useState();
  const [startup, setStartup] = useState();

  const getUser = () => {
    callApi("auth/user").then((data) => {
      setUserdetail(data);
    });
  };

  const getStartup = async () => {
    await callApi("auth/startup", "GET").then((response) => {
      setStartup(response);
    });
  };
  useEffect(() => {
    getStartup();
    getUser();
  });
  return (
    <>
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
                      <i className="bi bi-telephone fa-fw pe-1" /> Télephone:{" "}
                      <strong> {userdetail.numero} </strong>{" "}
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
    </>
  );
};

export default About;
