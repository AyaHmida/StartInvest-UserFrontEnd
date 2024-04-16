import React, { useState, useEffect } from "react";
import { SidebarLeft, Header } from "../components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./calendar.css";
import frLocale from "@fullcalendar/core/locales/fr";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
    created_by: null,
    assigned_to: null,
  });
  const [events, setEvents] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const handleUpdateTask = async (e, taskId) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://127.0.0.1:8000/api/auth/modifierTache/${taskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData), // Utiliser formData pour envoyer les données modifiées
        }
      );
      if (response.ok) {
        console.log("Tâche mise à jour avec succès");
        fetchEvents(); // Actualiser les événements après la modification
        setSelectedTask(null); // Fermer le modal après la modification
      } else {
        throw new Error("Erreur lors de la mise à jour de la tâche");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la tâche:", error);
    }
  };
  const handleDeleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token non disponible");
      }

      const response = await callApi(
        `auth/supprimerTask/${taskId}`,
        "DELETE",
        null,
        true,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (response.ok) {
        console.log("La tâche a été supprimée avec succès");
      } else {
        console.error("Erreur lors de la suppression de la tâche");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de la tâche:", error);
    }
  };
  const truncate = (str, wordsCount) => {
    const words = str.split(" ");
    let truncatedWords = words.slice(0, wordsCount);
    if (words.length > wordsCount) {
      truncatedWords.push("..");
    }
    return truncatedWords.join(" ");
  };

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
      console.log("Tâche ajoutée avec succès:", response);
      setFormData({
        title: "",
        description: "",
        start_time: "",
        end_time: "",
        created_by: null,
        assigned_to: 2,
      });
      setShowModal(false);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la tâche:", error);
    }
  };

  const handleAddTask = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleDeleteAndCloseModal = async (taskId) => {
    try {
      await handleDeleteTask(taskId);
      setSelectedTask(null); // Pour fermer le modal après la suppression
    } catch (error) {
      console.error("Erreur lors de la suppression de la tâche:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleParticipantClick = (user) => {
    console.log("Utilisateur cliqué:", user);
    setQuery(user.name);
    setFormData((prevFormData) => ({
      ...prevFormData,
      assigned_to: user.id,
    }));
    console.log("FormData après clic:", formData);
  };

  const handleSearch = async () => {
    try {
      const response = await callApi("auth/search", "GET", null, false, {
        query: query,
      });
      setSearchResult(response);
    } catch (error) {
      console.error("Erreur lors de la recherche des résultats:", error);
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

  const handleTaskClick = (info) => {
    setSelectedTask(info.event);
    const shortDescription = info.event.extendedProps.description.substring(
      0,
      100
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: shortDescription,
    }));
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />

      <main>
        <div className="container">
          <div className="row g-4">
            <SidebarLeft />

            <div className="col-md-8 col-lg-6 vstack gap-4">
              <main className="cd__main">
                <div
                  className="container mt-5"
                  style={{ height: "550px", width: "115%" }}
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="d-flex justify-content-center mb-4">
                        <button
                          className="btn btn-primary rounded-pill d-flex align-items-center"
                          onClick={handleAddTask}
                        >
                          <FontAwesomeIcon icon={faPlus} className="me-2" />
                          Ajouter rendez-vous
                        </button>
                      </div>
                      <div className="calendar-container">
                        <FullCalendar
                          plugins={[dayGridPlugin]}
                          initialView="dayGridMonth"
                          dayMaxEventRows={4}
                          weekends={true}
                          events={events.map((event) => ({
                            id: event.id,
                            title: event.title, // Appel de la fonction truncate pour afficher uniquement les deux premiers mots
                            start: event.start_time,
                            end: event.end_time,
                            description: event.description,
                            backgroundColor: event.color,
                            extendedProps: {
                              created_by: event.created_by,
                              description: event.description,
                              assigned_to: event.assigned_to,
                              color: event.color,
                            },
                          }))}
                          eventContent={(arg) => (
                            <div className="event-container">
                              {truncate(arg.event.title, 2)}
                            </div>
                          )}
                          eventClick={handleTaskClick}
                          locale={frLocale}
                          height="600px" // Réduire la taille du calendrier
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </main>

      {selectedTask && (
        <div className="modal fade show d-flex align-items-center justify-content-center">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content rounded-0 border-0 shadow-lg">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="modal-title">
                  Modifier la tâche
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setSelectedTask(null)}
                ></button>
              </div>
              <form onSubmit={(e) => handleUpdateTask(e, selectedTask.id)}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="event-title" className="form-label">
                      Titre :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="event-title"
                      name="title"
                      value={formData.title} // Ajoutez cet attribut value
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="event-description" className="form-label">
                      Description :
                    </label>
                    <textarea
                      className="form-control"
                      id="event-description"
                      name="description"
                      value={formData.description} // Ajoutez cet attribut value
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="event-start-time" className="form-label">
                      Date de début :
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="event-start-time"
                      name="start_time"
                      defaultValue={
                        selectedTask.start
                          ? new Date(selectedTask.end)
                              .toLocaleDateString("fr-FR")
                              .split("/")
                              .reverse()
                              .join("-")
                          : ""
                      }
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="event-end-time" className="form-label">
                      Date de fin :
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="event-end-time"
                      name="end_time"
                      defaultValue={
                        selectedTask.end
                          ? new Date(selectedTask.end)
                              .toLocaleDateString("fr-FR")
                              .split("/")
                              .reverse()
                              .join("-")
                          : ""
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="modal-footer border-top-0 d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteAndCloseModal(selectedTask.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary me-2"
                      data-bs-dismiss="modal"
                      onClick={() => setSelectedTask(null)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Enregistrer les modifications
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

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
            <div className="modal-content rounded-0 border-0 shadow-lg">
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
                  <div className="mb-3">
                    <label htmlFor="event-title" className="form-label">
                      Titre:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="event-title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="event-description" className="form-label">
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="event-description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <label htmlFor="event-start-time" className="form-label">
                        Date de début :
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="event-start-time"
                        name="start_time"
                        value={formData.start_time}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="event-end-time" className="form-label">
                        Date de fin :
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="event-end-time"
                        name="end_time"
                        value={formData.end_time}
                        onChange={handleChange}
                      />
                    </div>
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
                </div>
                <div className="modal-footer border-top-0 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
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
    </div>
  );
}
