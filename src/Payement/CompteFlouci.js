import React from "react";
import { Header, SidebarLeft } from "../components";

const CompteFlouci = () => {
  return (
    <>
      <div>
        <Header />
        <br />
        <br />
        <main>
          <div className="container">
            <br />
            <br />
            <div className="row g-4">
              <SidebarLeft />

              <div className="col-md-8 col-lg-6 vstack gap-4">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h1 className="h4 card-title mb-0">Gestion du profile</h1>
                  </div>
                  <div className="card-body">
                    <p>
                      Si vous n'avez pas de compte en Flouci, voici le lien :{" "}
                      <a href="https://fr.flouci.com/">flouci.com</a>
                    </p>
                    <form className="row g-3">
                      <div className="col-sm-6 col-lg-4">
                        <label className="form-label">App secrète</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          required
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <label className="form-label">App publique</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label">
                          Montant à investir (en pourcentage du capital social)
                        </label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            name="numero"
                            placeholder="Montant à investir"
                          />
                          <span className="input-group-text">%</span>
                        </div>
                      </div>
                      <div className="col-12 text-end">
                        <button type="submit" className="btn btn-primary mb-0">
                          Ajouter
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
    </>
  );
};

export default CompteFlouci;
