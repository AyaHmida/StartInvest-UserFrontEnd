import React, { useState, useEffect } from "react";
import Header from "../components/header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./calendar.css";
import frLocale from "@fullcalendar/core/locales/fr";

import { callApi } from "../api";

export default function Calendar() {
  const [userID, setUserID] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_time: "",
    end_time: "",
    created_by: userID,
    assigned_to: 2,
  });
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const userString = sessionStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const userId = user ? user.id : null;
    if (userId !== null) {
      setUserID(userId);
      setFormData((prevFormData) => ({
        ...prevFormData,
        created_by: userId,
      }));
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:8000/api/auth/getTasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const eventData = await response.json();
        setEvents(eventData);
      } else {
        throw new Error(
          "Erreur lors de la récupération des données du serveur."
        );
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await callApi("auth/ajouteTask", "POST", taskData);
      console.log("Task added successfully:", response);
      setFormData({
        title: "",
        description: "",
        start_time: "",
        end_time: "",
        created_by: "",
        assigned_to: "2",
      });
      setShowModal(false);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleAddTask = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      color: color,
    }));
  };

  const handleParticipantClick = (user) => {
    console.log("Clicked user:", user);
    setQuery(user.name);
    setFormData((prevFormData) => ({
      ...prevFormData,
      assigned_to: 2,
    }));
    console.log("FormData after click:", formData);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setShowModal(true);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { ...formData };
    addTask(taskData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <Header />
      <main className="cd__main">
        <br />
        <br />
        <br />
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-primary" onClick={handleAddTask}>
            <FontAwesomeIcon icon={faPlus} />
            Ajouter tâche
          </button>
        </div>
        <br />
        <div className="calendar-container">
          <div style={{ width: "90%", margin: "auto" }}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              dayMaxEventRows={4}
              weekends={true}
              events={events.map((event) => ({
                id: event.id,
                title: event.title,
                start: event.start_time,
                end: event.end_time,
                backgroundColor: event.color,
                extendedProps: {
                  created_by: event.created_by,
                  assigned_to: event.assigned_to,
                  color: event.color,
                },
              }))}
              eventContent={(arg) => (
                <div
                  className="event-container"
                  style={{
                    backgroundColor: "#92C2CE",
                    padding: "5px",
                    borderRadius: "5px",
                    color: "black",
                  }}
                >
                  {arg.event.title}
                </div>
              )}
              eventClick={handleEventClick}
              locale={frLocale}
            />
          </div>
        </div>
      </main>
      {showModal && (
        <div
          className="modal fade show d-flex align-items-center justify-content-center"
          id="form"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="modal-title">
                  Event Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="event-title">Title:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="event-description">Description:</label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="event-description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="event-start-time">Start Time:</label>
                    <input
                      type="date"
                      className="form-control"
                      id="event-start"
                      name="start_time"
                      value={formData.start_time}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="event-end-time">End Time:</label>
                    <input
                      type="date"
                      className="form-control"
                      id="event-end-time"
                      name="end_time"
                      value={formData.end_time}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="event-color">Color:</label>
                    <input
                      type="color"
                      className="form-control"
                      id="event-color"
                      name="color"
                      value={formData.color}
                      onChange={handleColorChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="search-participant">Participant:</label>
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
                    {Array.isArray(searchResult) && searchResult.length > 0 ? (
                      searchResult.map((user, index) => (
                        <div
                          key={index}
                          className="d-flex mb-3"
                          onClick={() => handleParticipantClick(user)}
                          style={{ cursor: "pointer" }}
                        >
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
                                        alt=""
                                      />{" "}
                                    </a>
                                  </div>
                                  <div className="w-100">
                                    <div className="d-sm-flex align-items-start">
                                      <h6 className="mb-0">
                                        <a>{user.name}</a>{" "}
                                      </h6>
                                    </div>
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
                  <div className="form-group"></div>
                </div>
                <div className="modal-footer border-top-0 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
