import React, { useEffect, useState } from "react";
import { callApi } from "../api";
import { Link } from "@reach/router";

const ModalNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  const countNotify = async () => {
    try {
      const response = await callApi("auth/countNotifications");
      setNotificationCount(response.countNotifications);
      getNotifications();
    } catch (error) {
      console.error("Error fetching count notifications:", error);
    }
  };
  const markAllRead = () => {
    callApi("auth/markAllRead");
    getNotifications();
  };
  const markAsRead = (notificationId) => {
    try {
      callApi(`auth/markAsRead/${notificationId}`);
      getNotifications();
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
      console.log(uniqueNotifications);
    });
  };
  useEffect(() => {
    getNotifications();
    countNotify();
  }, []);

  return (
    <>
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
          className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0 "
          aria-labelledby="notifDropdown"
        >
          <div className="card">
            {notificationCount > 0 && (
              <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="m-0">
                  Notifications{" "}
                  {notificationCount > 0 && (
                    <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                      {notificationCount} nouvelle
                    </span>
                  )}
                </h6>

                <a className="small" onClick={() => markAllRead()}>
                  {" "}
                  <i className="bi bi-check-lg fa-fw pe-2"></i>
                  Tout Marquer comme lu
                </a>
              </div>
            )}
            {notificationCount > 0 ? (
              <div className="card-body p-0">
                <ul className="list-group list-group-flush list-unstyled p-2">
                  {notifications.map(
                    (notification) =>
                      !notification.read_at && (
                        <li key={notification.id}>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3"
                          >
                            <div className="avatar text-center d-none d-sm-inline-block me-3">
                              <div className="avatar-img rounded-circle">
                                <img
                                  src={`http://127.0.0.1:8000/uploads/${notification.data.image}`}
                                  alt="Image"
                                  className="rounded-circle"
                                />
                              </div>
                            </div>
                            <div
                              className="flex-grow-1"
                              style={{ minWidth: "300px" }}
                            >
                              <div className="d-flex justify-content-between align-items-center">
                                <div>
                                  <p className="small mb-0">
                                    <b>{notification.data.user}</b> est{" "}
                                    {notification.data.title}:{" "}
                                    {notification.data.description}{" "}
                                    {notification.created_at}
                                  </p>
                                </div>
                                <div className="dropdown">
                                  <a
                                    className="btn btn-sm btn-light"
                                    href="#"
                                    role="button"
                                    id={`dropdownMenuLink${notification.id}`}
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="bi bi-three-dots"></i>
                                  </a>
                                  <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby={`dropdownMenuLink${notification.id}`}
                                  >
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() =>
                                          markAsRead(notification.id)
                                        }
                                      >
                                        {" "}
                                        <i className="bi bi-check-lg fa-fw pe-2"></i>
                                        Marquer comme lu
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      )
                  )}
                </ul>
              </div>
            ) : (
              <div className="card-body text-center">
                <p>Aucune notification</p>
              </div>
            )}

            <div className="card-footer text-center">
              <Link to="/notifications" className="btn btn-sm btn-primary-soft">
                Voir tous
              </Link>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ModalNotification;
