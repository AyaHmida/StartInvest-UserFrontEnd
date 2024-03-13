import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
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

const PageDeMiseAJourProfil = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    numero: "",
    type: "",
    startupName: "",
    startupSector: "",
    startupDescription: "",
    sectorsOfInterest: [],
    facebookLink: "",
  });
  const [type, setTypePerson] = useState("");
  const [sectors, setSectors] = useState([]);
  const [startupSector, setstartupSector] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const sectorsOfInterest = allSectors;
  const [currentSector, setCurrentSector] = useState("");
  const [suggestedSectors, setSuggestedSectors] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get("http://localhost:8000/csrf-token");
        const csrfToken = response.data.csrf_token;
        setCsrfToken(csrfToken);
        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
      } catch (error) {
        console.error("Erreur lors de la récupération du jeton CSRF:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const response = await axios.get("http://localhost:8000/secteurs");
        setSectors(response.data.secteurs);
      } catch (error) {
        console.error("Erreur lors de la récupération des secteurs:", error);
      }
    };

    fetchSectors();
  }, []);
  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/showProfile/${userId}`
      );
      setUserData(response.data.users);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données utilisateur:",
        error
      );
    }
  };
  useEffect(() => {
    const userId = new URLSearchParams(location.search).get("userId");
    if (userId) {
      fetchUserData(userId);
    }
  }, [location.search]);

  const handleSectorChange = () => {
    if (currentSector && !userData.sectorsOfInterest.includes(currentSector)) {
      setUserData({
        ...userData,
        sectorsOfInterest: [...userData.sectorsOfInterest, currentSector],
      });
      setCurrentSector("");
    }
    setSuggestedSectors([]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = new URLSearchParams(location.search).get("userId");
      if (!userId) {
        console.error("ID utilisateur non trouvé");
        return;
      }

      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "X-CSRF-TOKEN": csrfToken,
      };

      await axios.put(`http://localhost:8000/profile/${userId}`, userData, {
        headers,
      });
      alert("Profil mis à jour avec succès !");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil:", error);
    }
  };

  const handleSectorDelete = (sectorToDelete) => {
    setUserData({
      ...userData,
      sectorsOfInterest: userData.sectorsOfInterest.filter(
        (sector) => sector !== sectorToDelete
      ),
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    if (name === "type") {
      setTypePerson(value);
    }
    if (name === "startupSector") {
      setTypePerson(value);
    }

    if (name === "currentSector") {
      const filteredSectors = allSectors.filter((sector) =>
        sector.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestedSectors(filteredSectors);
    }
  };

  const handleSuggestionClick = (suggestedSector) => {
    setCurrentSector(suggestedSector);
    setSuggestedSectors([]);
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
                  <form className="row g-3" onSubmit={handleFormSubmit}>
                    {/* Informations sur la page */}
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Nom d'affichage */}
                    {/* Email */}
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Catégorie */}
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Type de personne</label>
                      <select
                        className="form-select js-choice"
                        data-search-enabled="true"
                        onChange={handleInputChange}
                        value={type}
                        name="type"
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
                        name="numero"
                        value={userData.numero}
                        onChange={handleInputChange}
                        placeholder="Numéro de téléphone "
                      />
                    </div>
                    {type === "fondateur" && (
                      <>
                        <div className="col-12">
                          <label className="form-label">
                            Nom de la startup
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nom "
                            value={userData.nom}
                            onChange={handleInputChange}
                            name="startupName"
                          />
                        </div>
                        <select
                          className="form-select js-choice"
                          data-search-enabled="true"
                          value={userData.startupSector}
                          name="startupSector"
                        >
                          <option value="">Sélectionnez un secteur</option>
                          {sectors.map((sector, index) => (
                            <option key={index} value={sector.nom}>
                              {sector.nom}
                            </option>
                          ))}
                        </select>

                        <div className="col-12">
                          <label className="form-label">
                            Description de la startup
                          </label>
                          <textarea
                            className="form-control"
                            rows={3}
                            placeholder="Description "
                            name="description"
                            value={userData.startupDescription}
                            onChange={handleInputChange}
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
                    {type === "investisseur" && (
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
};
export default PageDeMiseAJourProfil;