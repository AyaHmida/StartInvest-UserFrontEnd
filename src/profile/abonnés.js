import React, { useEffect, useState } from "react";
import { callApi } from "../api";
import { SidebarLeft, Header } from "../components";
import { Link } from "react-router-dom";

export default function Abonnes() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [utilisateursAAfficher, setUtilisateursAAfficher] = useState(10);
  const [nombreTotalUtilisateurs, setNombreTotalUtilisateurs] = useState(0);
  const [followingStatus, setFollowingStatus] = useState({});

  const handleFollow = (userId) => {
    if (!userId) {
      return;
    }

    callApi(`auth/follow`, "POST", {
      follower_id: userId,
    })
      .then((response) => {
        console.log("User followed successfully");
        setFollowingStatus((prevStatus) => ({
          ...prevStatus,
          [userId]: true,
        }));
      })
      .catch((error) => {
        console.error("Error following user:", error);
      });
  };

  const handleUnfollow = (userId) => {
    if (!userId) {
      return;
    }

    callApi(`auth/unfollow/${userId}`, "DELETE")
      .then((response) => {
        console.log("User unfollowed successfully");
        setFollowingStatus((prevStatus) => ({
          ...prevStatus,
          [userId]: false,
        }));
      })
      .catch((error) => {
        console.error("Error unfollowing user:", error);
      });
  };

  const getUtilisateurs = (limit) => {
    callApi(`auth/getUtilisateurs?limit=${limit}`, "GET")
      .then((response) => {
        console.log("Utilisateurs récupérés avec succès :", response);
        setUtilisateurs(response);
        setNombreTotalUtilisateurs(response.total);
        const initialFollowingStatus = {};
        response.forEach((user) => {
          initialFollowingStatus[user.id] = user.is_following;
        });
        setFollowingStatus(initialFollowingStatus);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
      });
  };

  const chargerPlusUtilisateurs = () => {
    const nouveauNombreUtilisateursAAfficher = utilisateursAAfficher + 10;
    if (nouveauNombreUtilisateursAAfficher <= nombreTotalUtilisateurs) {
      setUtilisateursAAfficher(nouveauNombreUtilisateursAAfficher);
      getUtilisateurs(nouveauNombreUtilisateursAAfficher);
    }
  };

  useEffect(() => {
    getUtilisateurs(utilisateursAAfficher);
  }, []);

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
              <div className="card card-body">
                <div class="col-lg-12 mx-auto">
                  <div class="card-header py-3 border-0 d-flex align-items-center justify-content-between">
                    <h1 class="h5 mb-0">Relations </h1>
                  </div>
                  <div class="card-body p-2">
                    <ul class="list-unstyled">
                      {utilisateurs
                        .slice(0, utilisateursAAfficher)
                        .map((user, index) => (
                          <li key={index}>
                            <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                              <div class="avatar text-center">
                                <img
                                  class="avatar-img rounded-circle"
                                  src={
                                    user && user.image
                                      ? `http://127.0.0.1:8000/uploads/${user.image}`
                                      : "assets/images/avatar/no-image-male.jpg"
                                  }
                                  alt={user.name}
                                />
                              </div>
                              <div class="mx-sm-3 my-2 my-sm-0">
                                <p class="small mb-2">
                                  <Link
                                    to={`/${user.id}`}
                                    style={{
                                      textDecoration: "none",
                                      color: "inherit",
                                    }}
                                  >
                                    <b>{user.name}</b>
                                  </Link>
                                </p>
                              </div>
                              <div class="d-flex ms-auto">
                                <a
                                  class="btn btn-primary-soft rounded-circle icon-md d-flex justify-content-center align-items-center"
                                  href="#"
                                  title={
                                    followingStatus[user.id]
                                      ? "Se désabonner"
                                      : "S'abonner"
                                  }
                                  onClick={() =>
                                    followingStatus[user.id]
                                      ? handleUnfollow(user.id)
                                      : handleFollow(user.id)
                                  }
                                >
                                  <i
                                    className={`bi ${
                                      followingStatus[user.id]
                                        ? "bi-person-x-fill"
                                        : "bi-person-plus-fill"
                                    }`}
                                    style={{ fontSize: "20px" }}
                                    alt={
                                      followingStatus[user.id]
                                        ? "Se désabonner"
                                        : "S'abonner"
                                    }
                                  ></i>
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div class="card-footer border-0 py-3 text-center position-relative d-grid pt-0">
                    <a
                      href="#!"
                      role="button"
                      class="btn btn-loader btn-primary-soft"
                      data-bs-toggle="button"
                      aria-pressed="true"
                      onClick={chargerPlusUtilisateurs}
                    >
                      <span class="load-text"> Charger plus d'amis </span>
                      <div class="load-icon">
                        <div class="spinner-grow spinner-grow-sm" role="status">
                          <span class="visually-hidden">
                            Chargement en cours...
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
