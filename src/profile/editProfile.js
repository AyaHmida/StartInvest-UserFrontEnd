import React, { useState, useEffect } from "react";
import { Header, SidebarLeft } from "../components";
import { callApi } from "../api";
import { useNavigate } from "react-router-dom/dist";

const PageDeMiseAJourProfil = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    numero: "",
    type: "",
    nom: "",
    secteur: "",
    description: "",
  });
  const [secteurs, setSecteurs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await callApi("auth/user", "GET");
        setUserData(userResponse.user);
        const sectorsResponse = await callApi("auth/secteurs", "GET");
        setSecteurs(sectorsResponse.secteurs);
        const startupResponse = await callApi("auth/startup", "GET");
        if (startupResponse) {
          setUserData((prevUserData) => ({
            ...prevUserData,
            nom: startupResponse.nom,
            secteur: startupResponse.secteur,
            description: startupResponse.description,
          }));
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  const updateProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await callApi("auth/updateprofile", "put", userData);
      console.log(response);
      navigate("/publication");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />{" "}
      <main>
        <div className="container">
          <br />
          <br />
          <div className="row g-4">
            <SidebarLeft />

            <div className="col-md-8 col-lg-6 vstack gap-4">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h1 className="h4 card-title mb-0">
                    Mettre à jour le profil
                  </h1>
                </div>
                <div className="card-body">
                  <form className="row g-3" onSubmit={updateProfile}>
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Nom</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={userData.name || ""}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={userData.email || ""}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <label className="form-label">Numéro de téléphone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="numero"
                        value={userData.numero || ""}
                        onChange={handleInputChange}
                        placeholder="Numéro de téléphone"
                      />
                    </div>

                    {userData && userData.type === "fondateur" && (
                      <>
                        <div className="col-12">
                          <label className="form-label">
                            Nom de la startup
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="nom"
                            value={userData.nom || ""}
                            onChange={handleInputChange}
                            placeholder="Nom de la startup"
                            required
                          />
                        </div>
                        <select
                          className="form-select js-choice"
                          data-search-enabled="true"
                          value={userData.secteur || ""}
                          name="secteur"
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Sélectionnez un secteur</option>
                          {secteurs &&
                            secteurs.map((sector, index) => (
                              <option key={index} value={sector.id}>
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
                            name="description"
                            value={userData.description || ""}
                            onChange={handleInputChange}
                            placeholder="Description de la startup"
                          />
                          <small className="text-muted">
                            Limite de caractères : 300
                          </small>
                        </div>
                      </>
                    )}

                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-primary mb-0">
                        Mettre à jour le profil
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageDeMiseAJourProfil;
