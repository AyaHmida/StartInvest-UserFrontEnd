import React, { useState } from "react";
import Header from "../components/header";
import { SidebarLeft } from "../components";
const allSectors = [
  "Technologie",
  "Finance",
  "Santé",
  "Éducation",
  "Art",
  "Agriculture",
  "E-commerce",
  "Énergie",
  "Automobile",
  "Tourisme",
];

export default function UpdateProfile() {
  const [typePerson, setTypePerson] = useState("");
  const [sectorsOfInterest, setSectorsOfInterest] = useState([]);
  const [currentSector, setCurrentSector] = useState("");
  const [suggestedSectors, setSuggestedSectors] = useState([]);

  const handleSectorChange = () => {
    if (currentSector && !sectorsOfInterest.includes(currentSector)) {
      setSectorsOfInterest([...sectorsOfInterest, currentSector]);
      setCurrentSector("");
    }
    setSuggestedSectors([]); // Clear suggestions when a sector is added
  };

  const handleSectorDelete = (sectorToDelete) => {
    setSectorsOfInterest(
      sectorsOfInterest.filter((sector) => sector !== sectorToDelete)
    );
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setCurrentSector(input);

    // Filter suggested sectors based on the input
    const filteredSectors = allSectors.filter((sector) =>
      sector.toLowerCase().includes(input.toLowerCase())
    );

    setSuggestedSectors(filteredSectors);
  };

  const handleSuggestionClick = (suggestedSector) => {
    setCurrentSector(suggestedSector);
    setSuggestedSectors([]); // Clear suggestions when a suggestion is clicked
  };
  return (
    <div>
      <Header />
      <br></br>
      <main>
        <div className="container">
          <br />
          <br />
          <div className="row g-4">
            <SidebarLeft />

            <div className="col-md-8 col-lg-6 vstack gap-4">
              <div className="card">
                {/* Titre START */}
                <div className="card-header border-0 pb-0">
                  <h1 className="h4 card-title mb-0">
                    Mettre à jour le profil
                  </h1>
                </div>
                {/* Titre END */}
                {/* Formulaire de mise à jour du profil START */}
                <div className="card-body">
                  <form className="row g-3">
                    {/* Informations sur la page */}
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nom "
                        defaultValue
                        name="name"
                      />
                    </div>
                    {/* Nom d'affichage */}
                    {/* Email */}
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email "
                        defaultValue
                        name="email"
                      />
                    </div>
                    {/* Catégorie */}
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Type de personne</label>
                      <select
                        className="form-select js-choice"
                        data-search-enabled="true"
                        onChange={(e) => setTypePerson(e.target.value)}
                        value={typePerson}
                        required
                      >
                        <option value="">Sélectionnez le type</option>
                        <option value="fondateur">Fondateur</option>
                        <option value="investisseur">Investisseur</option>
                      </select>
                      <small className="text-danger">
                        Ce champ est obligatoire
                      </small>
                    </div>
                    {/* Numéro de téléphone */}
                    <div className="col-lg-6">
                      <label className="form-label">Numéro de téléphone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Numéro de téléphone "
                      />
                    </div>
                    {typePerson === "fondateur" && (
                      <>
                        <div className="col-12">
                          <label className="form-label">
                            Nom de la startup
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nom "
                            defaultValue
                            name="startupName"
                          />
                          <small className="text-muted">
                            Nom de la startup.
                          </small>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                          <label className="form-label">Secteur</label>
                          <select
                            className="form-select js-choice"
                            data-search-enabled="true"
                          >
                            <option value="technologie">Technologie</option>
                            <option value="mathématiques">Mathématiques</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="form-label">
                            Description de la startup
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            placeholder="Description "
                            defaultValue={""}
                          />
                          <small className="text-muted">
                            Limite de caractères : 300
                          </small>
                        </div>
                        <div className="col-12">
                          <h5 className="card-title mb-0">Lien social</h5>
                        </div>
                        {/* Facebook */}
                        <div className="col-sm-6">
                          <label className="form-label">Facebook</label>
                          <div className="input-group">
                            <span className="input-group-text border-0">
                              {" "}
                              <i className="bi bi-facebook text-facebook" />{" "}
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.facebook.com/"
                            />
                          </div>
                        </div>
                      </>
                    )}
                    {typePerson === "investisseur" && (
                      <div className="col-sm-6 col-lg-8">
                        <label className="form-label">Secteurs d'intérêt</label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ajouter un secteur d'intérêt"
                            value={currentSector}
                            onChange={handleInputChange}
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={handleSectorChange}
                          >
                            Ajouter
                          </button>
                        </div>
                        {/* Suggestions dynamiques */}
                        {suggestedSectors.length > 0 && (
                          <ul className="list-group">
                            {suggestedSectors.map((suggestedSector, index) => (
                              <li
                                key={index}
                                className="list-group-item suggestion-item"
                                onClick={() =>
                                  handleSuggestionClick(suggestedSector)
                                }
                              >
                                {suggestedSector}
                              </li>
                            ))}
                          </ul>
                        )}
                        {/* Secteurs sélectionnés */}
                        <div className="d-flex flex-wrap">
                          {sectorsOfInterest.map((sector, index) => (
                            <div key={index} className="badge bg-primary m-1">
                              {sector}{" "}
                              <span
                                className="badge bg-danger"
                                onClick={() => handleSectorDelete(sector)}
                                style={{ cursor: "pointer" }}
                              >
                                X
                              </span>
                            </div>
                          ))}
                        </div>
                        <small className="text-muted">
                          Sélectionnez plusieurs secteurs d'intérêt
                        </small>
                        <br />
                        <div className="col-12">
                          <br />
                          <h5 className="card-title mb-0">Lien social</h5>
                        </div>
                        {/* Facebook */}
                        <div className="col-sm-6">
                          <br />
                          <label className="form-label">Facebook</label>
                          <div className="input-group">
                            <span className="input-group-text border-0">
                              {" "}
                              <i className="bi bi-facebook text-facebook" />{" "}
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.facebook.com/"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-primary mb-0">
                        Mettre à jour le profil
                      </button>
                    </div>
                  </form>
                </div>
                {/* Formulaire de mise à jour du profil END */}
              </div>
              {/* Mise à jour du profil END */}
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
        {/* Container END */}
      </main>
    </div>
  );
}
