import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import { callApi } from "../api";
import { Button, Modal } from "react-bootstrap";

const Profile = () => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [publications, setPublications] = useState([]);
  const [userdetail, setUserdetail] = useState();
  const [startup, setStartup] = useState();

  const handleDelete = (publicationId) => {
    callApi(`auth/publications/${publicationId}`, "DELETE")
      .then((response) => {
        console.log("Publication supprimée avec succès");
        setPublications((prevPublications) =>
          prevPublications.filter((pub) => pub.id !== publicationId)
        );
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la suppression de la publication :",
          error
        );
      });
  };

  const handleFileChangeImage = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreviewURL(URL.createObjectURL(selectedFile));
  };
  const getUser = () => {
    callApi("auth/user").then((data) => {
      setUserdetail(data);
      setPreviewURL(data.image);
      console.log(data.name);
    });
  };

  const getStartup = async () => {
    await callApi("auth/startup", "GET").then((response) => {
      setStartup(response);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("file", file);
      console.log(description);
      console.log(file);

      const response = await callApi(
        "auth/publication",
        "POST",
        formData,
        true
      );
      console.log(response);
      setDescription("");
      setFile("");
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
    }
  };

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const data = await callApi("auth/publicationsUser");
        setPublications(data.publications);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des publications:",
          error
        );
      }
    };

    fetchPublications();
    getUser();
    getStartup();
  }, []);
  const formatDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  const [showModal, setShowModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setUploadedImage(URL.createObjectURL(selectedFile));
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUploadedImage(null);
  };
  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await callApi(
        "auth/uploadAvatar",
        "POST",
        formData,
        true
      );
      console.log(response);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleSaveImage = () => {
    handleImageUpload();
    handleCloseModal();
  };
  return (
    <div>
      <Header />
      <br></br>
      <div className="container">
        <div className="row g-4">
          <br></br>
          <br></br>
          <div className="col-lg-8 vstack gap-4">
            <div className="card">
              <div
                className="h-200px rounded-top"
                style={{
                  backgroundImage: "url(assets/images/bg/05.jpg)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="card-body py-0">
                <div className="d-sm-flex align-items-start text-center text-sm-start">
                  <div className="position-relative d-inline-block">
                    <div className="avatar avatar-xxl mt-n5 mb-3 position-relative">
                      <img
                        className="avatar-img rounded-circle border border-white border-3"
                        src={
                          userdetail && userdetail.image
                            ? `http://127.0.0.1:8000/uploads/${userdetail.image}`
                            : "assets/images/avatar/no-image-male.jpg"
                        }
                        alt=""
                      />
                    </div>

                    {/* Bouton pour uploader l'image */}
                    <label
                      htmlFor="uploadAvatar"
                      className="btn btn-primary position-absolute bottom-0 end-0 p-0 d-flex align-items-center justify-content-center"
                      style={{
                        zIndex: "1",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                    >
                      <i className="bi bi-camera"></i>
                    </label>
                    {/* Input pour sélectionner l'image */}
                    <input
                      id="uploadAvatar"
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </div>
                  {userdetail && (
                    <div className="ms-sm-4 mt-sm-3">
                      {/* Info */}
                      <h1 className="mb-0 h5">
                        {userdetail.name}&nbsp;
                        <i className="bi bi-patch-check-fill text-success small" />
                      </h1>
                      <p>{userdetail.type}</p>
                    </div>
                  )}
                  <div className="d-flex mt-3 justify-content-center ms-sm-auto">
                    <Link
                      className="btn btn-danger-soft me-2"
                      to="/editProfile"
                    >
                      <i className="bi bi-pencil-fill pe-1" /> modifier profile
                    </Link>
                  </div>
                </div>
                <Modal show={showModal} onHide={handleCloseModal} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Image téléchargée</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    {/* Afficher l'image téléchargée */}
                    {uploadedImage && (
                      <img
                        src={uploadedImage}
                        alt="Uploaded"
                        className="img-fluid"
                      />
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                      Fermer
                    </Button>
                    <Button variant="primary" onClick={handleSaveImage}>
                      Enregistrer
                    </Button>
                  </Modal.Footer>
                </Modal>

                {userdetail && (
                  <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                    <li className="list-inline-item">
                      <i className="bi bi-calendar2-plus me-1" /> account
                      created on {formatDate(userdetail.created_at)}
                    </li>
                  </ul>
                )}
              </div>
              <div className="card-footer mt-3 pt-2 pb-0">
                <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link active"> Posts </a>{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="card card-body">
              <div className="d-flex mb-3">
                <div className="avatar avatar-xs me-2">
                  <a href="#">
                    {" "}
                    <img
                      className="avatar-img rounded-circle border border-white border-3"
                      src={
                        userdetail && userdetail.image
                          ? `http://127.0.0.1:8000/uploads/${userdetail.image}`
                          : "assets/images/avatar/no-image-male.jpg"
                      }
                      alt=""
                    />{" "}
                  </a>
                </div>
                <form className="w-100">
                  <input
                    className="form-control pe-4 border-0"
                    placeholder="Share your thoughts..."
                    data-bs-toggle="modal"
                    data-bs-target="#modalCreateFeed"
                  />
                </form>
              </div>
              {/* Share feed toolbar START */}
              <ul className="nav nav-pills nav-stack small fw-normal">
                <li className="nav-item">
                  <a
                    className="nav-link bg-light py-1 px-2 mb-0"
                    href="#!"
                    data-bs-toggle="modal"
                    data-bs-target="#modalCreateFeed"
                  >
                    {" "}
                    <i className="bi bi-image-fill text-success pe-2" />
                    Photo
                  </a>
                </li>
              </ul>
            </div>

            {publications.map((item, index) => (
              <div className="card" key={index}>
                <div className="card-header border-0 pb-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-2">
                        <a href="#">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src={item.user.image}
                            alt=""
                          />{" "}
                        </a>
                      </div>
                      <div>
                        <h6 className="card-title mb-0">
                          {" "}
                          <a href="#!"> {item.user.name} </a>
                        </h6>
                        <p className="mb-0 small">
                          {formatDate(item.created_at)}
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                      id="cardShareAction5"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction5"
                    >
                      <li key={item.id}>
                        <a
                          className="dropdown-item"
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                        >
                          {" "}
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>
                          Efface post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <p>{item.description}</p>
                  {item.file ? (
                    <div className="d-flex justify-content-between">
                      <div className="row g-3">
                        <div className="col-6">
                          <a
                            className="h-100"
                            href={`http://127.0.0.1:8000/uploads/${item.file}`}
                            data-glightbox
                            data-gallery="image-popup"
                          >
                            <img
                              className="rounded img-fluid"
                              src={`http://127.0.0.1:8000/uploads/${item.file}`}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}

                  <ul className="nav nav-stack pb-2 small">
                    <li className="nav-item">
                      <a className="nav-link active text-secondary" href="#!">
                        {" "}
                        <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>{" "}
                        Louis, Billy and 126 others{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-footer py-3">
                  <ul className="nav nav-fill nav-stack small">
                    <li className="nav-item">
                      <a className="nav-link mb-0 active" href="#!">
                        {" "}
                        <i className="bi bi-heart pe-1"></i>Liked (56)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="row g-4">
              <div className="col-md-6 col-lg-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h5 className="card-title">About</h5>
                  </div>
                  {userdetail && (
                    <div className="card-body position-relative pt-0">
                      {startup && <p>{startup.description}</p>}
                      <ul className="list-unstyled mt-3 mb-0">
                        <li className="mb-2">
                          {" "}
                          <i className="bi bi-telephone fa-fw pe-1" />{" "}
                          Télephone: <strong> {userdetail.numero} </strong>{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-1" /> Email:{" "}
                          <strong> {userdetail.email} </strong>{" "}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalCreateFeed"
        tabIndex={-1}
        aria-labelledby="modalLabelCreateFeed"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {/* Modal feed header START */}
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabelCreateFeed">
                Create post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <div className="d-flex mb-3">
                <form className="w-100" onSubmit={handleSubmit}>
                  <div className="avatar avatar-xs me-2">
                    <img
                      className="avatar-img rounded-circle border border-white border-3"
                      src={
                        userdetail && userdetail.image
                          ? `http://127.0.0.1:8000/uploads/${userdetail.image}`
                          : "assets/images/avatar/no-image-male.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <textarea
                    className="form-control pe-4 fs-3 lh-1 border-0"
                    rows={4}
                    placeholder="Partage tes pensées..."
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    autoFocus
                  />
                  <div className="hstack gap-2">
                    <label
                      htmlFor="uploadImage"
                      className="icon-md bg-success bg-opacity-10 text-success rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Upload Image"
                    >
                      <input
                        type="file"
                        id="uploadImage"
                        name="file"
                        onChange={handleFileChangeImage}
                        style={{ display: "none" }}
                      />
                      <i className="bi bi-image-fill" />
                    </label>
                    {previewURL && (
                      <img
                        src={previewURL}
                        alt="Preview"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    )}
                  </div>
                  <div className="modal-footer row justify-content-between">
                    <div className="col-lg-8 text-sm-end">
                      <button
                        type="submit"
                        className="btn btn-success-soft"
                        data-bs-dismiss="modal"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
