import React, { useState } from "react";
import Header from "../components/header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Calendar() {
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Header />
      <main className="cd__main">
        {/* Modèle pour ajouter une nouvelle tâche */}
        {showModal && (
          <div
            className="modal fade edit-form"
            id="form"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header border-bottom-0">
                  <h5 className="modal-title" id="modal-title">
                    Add Task
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <form id="myForm">
                  <div className="modal-body">
                    {/* Contenu du formulaire pour ajouter une nouvelle tâche */}
                  </div>
                  <div className="modal-footer border-top-0 d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-success"
                      id="submit-button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        <br></br>
        <br></br>
        <br></br>

        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-primary" onClick={handleAddTask}>
            <FontAwesomeIcon icon={faPlus} />
            Ajouter tache
          </button>
        </div>
        {/* Affichage du calendrier */}
        <div className="calendar-container">
          <div style={{ maxWidth: "800px", margin: "auto" }}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={false}
              events={[
                { title: "Tâche 1", date: "2024-03-25" },
                { title: "Tâche 2", date: "2024-03-26" },
                { title: "Tâche 3", date: "2024-03-27" },
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
