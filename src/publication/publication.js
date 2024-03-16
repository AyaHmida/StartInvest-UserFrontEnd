import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/header";
import { Messages, SidebarLeft, SidebarRight } from "../components";
import { callApi } from "../api";

export default function Publication() {
  const [publications, setPublications] = useState([]);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreviewURL(URL.createObjectURL(selectedFile));
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
        const data = await callApi("auth/publications");
        setPublications(data.publications);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des publications:",
          error
        );
      }
    };

    fetchPublications();
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

  const excludePublication = (index) => {
    const updatedPublications = publications.filter((_, i) => i !== index);
    setPublications(updatedPublications);
  };

  return (
    <div>
      <Header />
      <br />
      <br />

      <main>
        <div className="container">
          <div className="row g-4">
            <SidebarLeft />

            <div className="col-md-8 col-lg-6 vstack gap-4">
              <div className="card card-body">
                <div className="d-flex mb-3">
                  <div className="avatar avatar-xs me-2">
                    <a href="#">
                      {" "}
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/03.jpg"
                        alt=""
                      />{" "}
                    </a>
                  </div>
                  <form className="w-100">
                    <textarea
                      className="form-control pe-4 border-0"
                      rows="2"
                      data-autoresize
                      placeholder="Partage tes pensées..."
                      data-bs-toggle="modal"
                      data-bs-target="#feedActionPhoto"
                    ></textarea>
                  </form>
                </div>
                <ul className="nav nav-pills nav-stack small fw-normal">
                  <li className="nav-item">
                    <a
                      className="nav-link bg-light py-1 px-2 mb-0"
                      href="#!"
                      data-bs-toggle="modal"
                      data-bs-target="#feedActionPhoto"
                    >
                      {" "}
                      <i className="bi bi-image-fill text-success pe-2"></i>
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
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => excludePublication(index)}
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

              <a
                href="#!"
                role="button"
                className="btn btn-loader btn-primary-soft"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                <span className="load-text"> Load more </span>
                <div className="load-icon">
                  <div className="spinner-grow spinner-grow-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </a>
            </div>

            <SidebarRight />
          </div>
        </div>
      </main>
      <Messages />

      <div
        className="modal fade"
        id="feedActionPhoto"
        tabindex="-1"
        aria-labelledby="feedActionPhotoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
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
                <div className="avatar avatar-xs me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/03.jpg"
                    alt
                  />
                </div>

                <form className="w-100" onSubmit={handleSubmit}>
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
                        onChange={handleFileChange}
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
}
