import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { callApi } from "../api";
export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const getNotifications = () => {
    callApi("auth/notifications").then((data) => {
      const parsedNotifications = data.likedNotifications.map(
        (notification) => ({
          ...notification,
          data: JSON.parse(notification.data),
        })
      );

      // Filtrer les notifications pour n'afficher qu'une seule instance de chaque type
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
  useEffect(() => {
    getNotifications();
  }, []);
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8 mx-auto">
            {/* Card START */}
            <div className="card">
              <div className="card-header py-3 border-0 d-flex align-items-center justify-content-between">
                <h1 className="h5 mb-0">Notifications</h1>
                {/* Notification action START */}
                <div className="dropdown">
                  <a
                    href="#"
                    className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                    id="cardNotiAction"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots" />
                  </a>
                  {/* Card share action dropdown menu */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardNotiAction"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        <i className="bi bi-check-lg fa-fw pe-2" />
                        Tout marquer comme lu
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Notification action END */}
              </div>
              <div className="card-body p-2">
                <ul className="list-unstyled">
                  {notifications.map(
                    (notification) =>
                      !notification.read_at && (
                        <li key={notification.id}>
                          <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                            {/* Avatar */}
                            <div className="avatar text-center">
                              <img
                                src={`http://127.0.0.1:8000/uploads/${notification.data.image}`}
                                alt="Image"
                              />
                            </div>
                            {/* Info */}
                            <div className="mx-sm-3 my-2 my-sm-0">
                              <p className="small mb-0">
                                <b> {notification.data.user}</b>{" "}
                              </p>
                              <p className="small mb-0">
                                {notification.data.title}:
                                {notification.data.description}
                              </p>
                              <p className="text-primary ">
                                {" "}
                                <u> {notification.created_at}</u>
                              </p>
                            </div>
                            {/* Action */}
                            <div className="d-flex ms-auto">
                              <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                <a
                                  href="#"
                                  className="z-index-1 text-secondary btn position-relative py-0 px-2"
                                  id="cardNotiAction8"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                {/* Card share action dropdown menu */}
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="cardNotiAction8"
                                >
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      {" "}
                                      <i className="bi bi-trash fa-fw pe-2" />
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* Notification action END */}
                            </div>
                          </div>
                        </li>
                      )
                  )}
                </ul>
              </div>
              <div className="card-footer border-0 py-3 text-center position-relative d-grid pt-0">
                {/* Load more button START */}
                <a
                  href="#!"
                  role="button"
                  className="btn btn-loader btn-primary-soft"
                  data-bs-toggle="button"
                  aria-pressed="true"
                >
                  <span className="load-text"> Load more notifications </span>
                  <div className="load-icon">
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </a>
                {/* Load more button END */}
              </div>
            </div>
            {/* Card END */}
          </div>
        </div>{" "}
        {/* Row END */}
      </div>
    </div>
  );
}
