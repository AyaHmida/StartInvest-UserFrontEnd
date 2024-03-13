import React, { useState } from "react";
import Header from "../components/header";
import { SidebarLeft } from "../components";

export default function Reclamation() {
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
                <div className="card-header border-0 pb-0">
                  <h1 className="h4 card-title mb-0">Ecrire votre message</h1>
                </div>

                <div className="card-body">
                  <form className="row g-3">
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Ecrire votre message ici... "
                        defaultValue={""}
                      />
                    </div>

                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-primary mb-0">
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </main>
    </div>
  );
}
