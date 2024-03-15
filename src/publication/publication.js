import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/header";
import { SidebarLeft } from "../components";
import AuthUser from "../auth/AuthUser";
import { callApi } from "../api";

export default function Publication() {
  const [publications, setPublications] = useState([]);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const { http, user } = AuthUser();
  const [userdetail, setUserdetail] = useState();
  const getUser = () => {
    callApi("auth/user").then((data) => {
      setUserdetail(data);
    });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("file", file);
    console.log(user);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/publication",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Publication ajoutée avec succès");
      } else {
        console.error("Erreur lors de l'ajout de la publication");
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  useEffect(() => {
    getUser();
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
            <div className="col-lg-3">
              <div className="d-flex align-items-center d-lg-none">
                <button
                  className="border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSideNavbar"
                  aria-controls="offcanvasSideNavbar"
                >
                  <span className="btn btn-primary">
                    <i className="fa-solid fa-sliders-h"></i>
                  </span>
                  <span className="h6 mb-0 fw-bold d-lg-none ms-2">
                    My profile
                  </span>
                </button>
              </div>

              <nav className="navbar navbar-expand-lg mx-0">
                <div
                  className="offcanvas offcanvas-start"
                  tabindex="-1"
                  id="offcanvasSideNavbar"
                >
                  <div className="offcanvas-header">
                    <button
                      type="button"
                      className="btn-close text-reset ms-auto"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="offcanvas-body d-block px-2 px-lg-0">
                    <div className="card overflow-hidden">
                      <div
                        className="h-50px "
                        style={{
                          backgroundImage: "url(assets/images/bg/01.jpg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                      <div className="card-body pt-0">
                        <div className="text-center">
                          <div className="avatar avatar-lg mt-n5 mb-3">
                            <a href="#!">
                              <img
                                className="avatar-img rounded border border-white border-3"
                                src="assets/images/avatar/07.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <h5 className="mb-0">
                            {" "}
                            <a href="#!">Sam Lanson </a>{" "}
                          </h5>
                          <small>Web Developer at Webestica</small>
                          <p className="mt-3">
                            Description for startup if exist
                          </p>

                          <div className="hstack gap-2 gap-xl-3 justify-content-center">
                            <div>
                              <h6 className="mb-0">256</h6>
                              <small>Post</small>
                            </div>
                          </div>
                        </div>

                        <hr />

                        <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                          <li className="nav-item">
                            <a className="nav-link" href="my-profile.html">
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src="assets/images/icon/home-outline-filled.svg"
                                alt=""
                              />
                              <span>Feed </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="my-profile-connections.html"
                            >
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src="assets/images/icon/person-outline-filled.svg"
                                alt=""
                              />
                              <span>Connections </span>
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="notifications.html">
                              {" "}
                              <img
                                className="me-2 h-20px fa-fw"
                                src="assets/images/icon/notification-outlined-filled.svg"
                                alt=""
                              />
                              <span>Notifications </span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="card-footer text-center py-2">
                        <a
                          className="btn btn-link btn-sm"
                          href="my-profile.html"
                        >
                          View Profile{" "}
                        </a>
                      </div>
                    </div>

                    <p className="small text-center mt-1">
                      ©2024{" "}
                      <a
                        className="text-reset"
                        target="_blank"
                        href="https://www.webestica.com/"
                      >
                        {" "}
                        Webestica{" "}
                      </a>
                    </p>
                  </div>
                </div>
              </nav>
            </div>

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
                      placeholder="Share your thoughts..."
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
                  <li className="nav-item">
                    <a
                      className="nav-link bg-light py-1 px-2 mb-0"
                      href="#!"
                      data-bs-toggle="modal"
                      data-bs-target="#feedActionVideo"
                    >
                      {" "}
                      <i className="bi bi-camera-reels-fill text-info pe-2"></i>
                      Video
                    </a>
                  </li>
                </ul>
              </div>

              {publications.map((publication) => (
                <div className="card" key={publication.id}>
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-2">
                          <a href="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/04.jpg"
                              alt=""
                            />{" "}
                          </a>
                        </div>
                        <div>
                          <h6 className="card-title mb-0">
                            {" "}
                            <a href="#"> Judy Nguyen </a>
                          </h6>
                          <div className="nav nav-divider">
                            <p className="nav-item mb-0 small">
                              Web Developer at Webestica
                            </p>
                            <span
                              className="nav-item small"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Public"
                            >
                              {" "}
                              <i className="bi bi-globe"></i>{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                          id="cardShareAction3"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots"></i>
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="cardShareAction3"
                        >
                          <li>
                            <a className="dropdown-item" href="#" onClick="">
                              {" "}
                              <i className="bi bi-slash-circle fa-fw pe-2"></i>
                              Efface post
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <p> {publication.description} </p>
                    <div className="d-flex justify-content-between">
                      <div className="row g-3">
                        <div className="col-6">
                          <a
                            className="h-100"
                            href=""
                            data-glightbox
                            data-gallery="image-popup"
                          >
                            <img
                              className="rounded img-fluid"
                              src=""
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <ul className="nav nav-stack py-3 small">
                      <li className="nav-item">
                        <a className="nav-link active text-secondary" href="#!">
                          {" "}
                          <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>{" "}
                          Louis, Billy and 126 others{" "}
                        </a>
                      </li>
                      <li className="nav-item ms-sm-auto">
                        <a className="nav-link" href="#!">
                          {" "}
                          <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                        </a>
                      </li>
                    </ul>

                    <ul className="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 mb-3">
                      <li className="nav-item">
                        <a className="nav-link active" href="#!">
                          {" "}
                          <i className="bi bi-hand-thumbs-up-fill pe-1"></i>
                          Liked (56)
                        </a>
                      </li>
                    </ul>

                    <ul className="comment-wrap list-unstyled">
                      <li className="comment-item">
                        <div className="d-flex">
                          <div className="avatar avatar-xs">
                            <a href="#">
                              {" "}
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/05.jpg"
                                alt=""
                              />{" "}
                            </a>
                          </div>
                          <div className="ms-2">
                            <div className="bg-light rounded-start-top-0 p-3 rounded">
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-1">
                                  {" "}
                                  <a href="#!"> Frances Guerrero </a>
                                </h6>
                                <small className="ms-2">5hr</small>
                              </div>
                              <p className="small mb-0">
                                Remod tedious ed projection.
                              </p>
                            </div>
                            <ul className="nav nav-divider py-2 small">
                              <li className="nav-item">
                                <a className="nav-link" href="#!">
                                  {" "}
                                  Like (3)
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="card-footer border-0 pt-0">
                    <a
                      href="#!"
                      role="button"
                      className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <div className="spinner-dots me-2">
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                      </div>
                      Load more comments
                    </a>
                  </div>
                </div>
              ))}

              <div className="card">
                <div className="card-header border-0 pb-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-2">
                        <a href="#">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/logo/13.svg"
                            alt=""
                          />{" "}
                        </a>
                      </div>
                      <div>
                        <h6 className="card-title mb-0">
                          {" "}
                          <a href="#!"> Apple Education </a>
                        </h6>
                        <p className="mb-0 small">9 November at 23:29</p>
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
                        <a className="dropdown-item" href="#">
                          {" "}
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>
                          Efface post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card-body pb-0">
                  <p>
                    Find out how you can save time in the classroom this year.
                    Earn recognition while you learn new skills on iPad and Mac.
                    Start recognition your first Apple Teacher badge today!
                  </p>
                  <ul className="nav nav-stack pb-2 small">
                    <li className="nav-item">
                      <a className="nav-link active text-secondary" href="#!">
                        {" "}
                        <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>{" "}
                        Louis, Billy and 126 others{" "}
                      </a>
                    </li>
                    <li className="nav-item ms-sm-auto">
                      <a className="nav-link" href="#!">
                        {" "}
                        <i className="bi bi-chat-fill pe-1"></i>Comments (12)
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
                    <li className="nav-item dropdown">
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardShareAction6"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i className="bi bi-envelope fa-fw pe-2"></i>Send
                            via Direct Message
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                            Bookmark{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i className="bi bi-link fa-fw pe-2"></i>Copy link
                            to post
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i className="bi bi-share fa-fw pe-2"></i>Share post
                            via …
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i className="bi bi-pencil-square fa-fw pe-2"></i>
                            Share to News Feed
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-header border-0 pb-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-story me-2">
                        <a href="#!">
                          {" "}
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/12.jpg"
                            alt=""
                          />{" "}
                        </a>
                      </div>
                      *{" "}
                      <div>
                        <div className="nav nav-divider">
                          <h6 className="nav-item card-title mb-0">
                            {" "}
                            <a href="#!"> Joan Wallace </a>
                          </h6>
                          <span className="nav-item small"> 1day</span>
                        </div>
                        <p className="mb-0 small">12 January at 12:00</p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                        id="cardFeedAction2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardFeedAction2"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i className="bi bi-slash-circle fa-fw pe-2"></i>
                            Efface post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card-body pb-0">
                  <p>
                    Comfort reached gay perhaps chamber his{" "}
                    <a href="#!">#internship</a> <a href="#!">#hiring</a>{" "}
                    <a href="#!">#apply</a>{" "}
                  </p>
                </div>
                <div className="overflow-hidden fullscreen-video w-100">
                  <div className="player-wrapper overflow-hidden">
                    <video
                      className="player-html"
                      controls
                      crossorigin="anonymous"
                      poster="assets/images/videos/poster.jpg"
                    >
                      <source
                        src="assets/images/videos/video-feed.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <ul className="nav nav-stack py-3 small">
                    <li className="nav-item">
                      <a className="nav-link active" href="#!">
                        {" "}
                        <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked
                        (56)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#!">
                        {" "}
                        <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                      </a>
                    </li>
                  </ul>

                  <div className="d-flex mb-3">
                    <div className="avatar avatar-xs me-2">
                      <a href="#!">
                        {" "}
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/12.jpg"
                          alt=""
                        />{" "}
                      </a>
                    </div>

                    <form className="input-group">
                      <textarea
                        data-autoresize
                        className="form-control me-2 bg-light rounded"
                        rows="1"
                        placeholder="Add a comment..."
                      ></textarea>
                      <button
                        className="btn btn-primary mb-0 rounded"
                        type="submit"
                      >
                        Post
                      </button>
                    </form>
                  </div>
                  <ul className="comment-wrap list-unstyled mb-0">
                    <li className="comment-item">
                      <div className="d-flex">
                        <div className="avatar avatar-xs">
                          <a href="#!">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/05.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="ms-2">
                          <div className="bg-light rounded-start-top-0 p-3 rounded">
                            <div className="d-flex justify-content-between">
                              <h6 className="mb-1">
                                {" "}
                                <a href="#!"> Frances Guerrero </a>
                              </h6>
                              <small className="ms-2">5hr</small>
                            </div>
                            <p className="small mb-0">
                              Preference any astonished unreserved Mrs.
                            </p>
                          </div>
                          <ul className="nav nav-divider py-2 small">
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                {" "}
                                Like (3)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-footer border-0 pt-0">
                  <a
                    href="#!"
                    role="button"
                    className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                    data-bs-toggle="button"
                    aria-pressed="true"
                  >
                    <div className="spinner-dots me-2">
                      <span className="spinner-dot"></span>
                      <span className="spinner-dot"></span>
                      <span className="spinner-dot"></span>
                    </div>
                    Load more comments
                  </a>
                </div>
              </div>

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

            <div className="col-lg-3">
              <div className="row g-4">
                <div className="col-sm-6 col-lg-12">
                  <div className="card">
                    <div className="card-header pb-0 border-0">
                      <h5 className="card-title mb-0">Who to follow</h5>
                    </div>

                    <div className="card-body">
                      <div className="hstack gap-2 mb-3">
                        <div className="avatar">
                          <a href="#">
                            {" "}
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/01.jpg"
                              alt=""
                            />{" "}
                          </a>
                        </div>
                        <div className="overflow-hidden">
                          <a className="h6 mb-0" href="#!">
                            Lori Ferguson{" "}
                          </a>
                          <p className="mb-0 small text-truncate">
                            Web Developer at Webestica
                          </p>
                        </div>
                      </div>

                      <div className="d-grid mt-3">
                        <a
                          className="btn btn-sm btn-primary-soft"
                          href="/profileConnection"
                        >
                          View more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-12">
                  <div className="card">
                    <div className="card-header pb-0 border-0">
                      <h5 className="card-title mb-0">Today’s news</h5>
                    </div>

                    <div className="card-body">
                      <div className="mb-3">
                        <h6 className="mb-0">
                          <a href="blog-details.html">
                            Skills that you can learn from business
                          </a>
                        </h6>
                        <small>6hr</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="d-none d-lg-block">
        <a
          className="icon-md btn btn-primary position-fixed end-0 bottom-0 me-5 mb-5"
          data-bs-toggle="offcanvas"
          href="#offcanvasChat"
          role="button"
          aria-controls="offcanvasChat"
        >
          <i className="bi bi-chat-left-text-fill"></i>
        </a>
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabindex="-1"
          id="offcanvasChat"
        >
          <div className="offcanvas-header d-flex justify-content-between">
            <h5 className="offcanvas-title">Messaging</h5>
            <div className="d-flex">
              <a
                href="#"
                className="btn btn-secondary-soft-hover py-1 px-2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </a>
            </div>
          </div>
          <div className="offcanvas-body pt-0 custom-scrollbar">
            <form className="rounded position-relative">
              <input
                className="form-control ps-5 bg-light"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button
                className="btn bg-transparent px-3 py-0 position-absolute top-50 start-0 translate-middle-y"
                type="submit"
              >
                <i className="bi bi-search fs-5"> </i>
              </button>
            </form>
            <ul className="list-unstyled">
              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                <div className="avatar">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/11.jpg"
                    alt=""
                  />
                </div>
                <div className="overflow-hidden">
                  <a className="h6 mb-0 stretched-link" href="#!">
                    Amanda Reed{" "}
                  </a>
                  <div className="small text-secondary text-truncate">
                    Interested can share CV at.
                  </div>
                </div>
                <div className="small ms-auto text-nowrap"> 18, dec </div>
              </li>

              <li className="mt-3 hstack gap-3 align-items-center position-relative">
                <div className="avatar status-online">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/12.jpg"
                    alt=""
                  />
                </div>
                <div className="overflow-hidden">
                  <a className="h6 mb-0 stretched-link" href="#!">
                    Larry Lawson{" "}
                  </a>
                  <div className="small text-secondary text-truncate">
                    Hope you're doing well and Safe.
                  </div>
                </div>
                <div className="small ms-auto text-nowrap"> 20, dec </div>
              </li>
              <li className="mt-3 d-grid">
                <a className="btn btn-primary-soft" href="messaging.html">
                  {" "}
                  See all in messaging{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          aria-live="polite"
          aria-atomic="true"
          className="position-relative"
        >
          <div className="toast-container toast-chat d-flex gap-3 align-items-end">
            <div
              id="chatToast"
              className="toast mb-0 bg-mode"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              data-bs-autohide="false"
            >
              <div className="toast-header bg-mode">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-0 mt-1">Frances Guerrero</h6>
                      <div className="small text-secondary">
                        <i className="fa-solid fa-circle text-success me-1"></i>
                        Online
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="dropdown">
                      <a
                        className="btn btn-secondary-soft-hover py-1 px-2"
                        href="#"
                        id="chatcoversationDropdown"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="chatcoversationDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-camera-video me-2 fw-icon"></i>
                            Video call
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-telephone me-2 fw-icon"></i>
                            Audio call
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-trash me-2 fw-icon"></i>Delete{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-chat-square-text me-2 fw-icon"></i>
                            Mark as unread
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-volume-up me-2 fw-icon"></i>
                            Muted
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-archive me-2 fw-icon"></i>
                            Archive
                          </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-flag me-2 fw-icon"></i>Report
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      className="btn btn-secondary-soft-hover py-1 px-2"
                      data-bs-toggle="collapse"
                      href="#collapseChat"
                      aria-expanded="false"
                      aria-controls="collapseChat"
                    >
                      <i className="bi bi-dash-lg"></i>
                    </a>
                    <button
                      className="btn btn-secondary-soft-hover py-1 px-2"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="toast-body collapse show" id="collapseChat">
                <div className="chat-conversation-content custom-scrollbar h-200px">
                  <div className="text-center small my-2">
                    Jul 16, 2022, 06:15 am
                  </div>
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            Applauded no discovery😊
                          </div>
                          <div className="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">
                          With pleasure
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            Please find the attached
                          </div>

                          <div className="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            How promotion excellent curiosity😮
                          </div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">
                          And sir dare view.
                        </div>
                        <div className="d-flex my-2">
                          <div className="small text-secondary">5:35 PM</div>
                          <div className="small ms-2">
                            <i className="fa-solid fa-check"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center small my-2">2 New Messages</div>
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-3 rounded-2">
                            <div className="typing d-flex align-items-center">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <textarea
                    className="form-control mb-sm-0 mb-3"
                    placeholder="Type a message"
                    rows="1"
                  ></textarea>
                  <div className="d-sm-flex align-items-end mt-2">
                    <button className="btn btn-sm btn-danger-soft me-2">
                      <i className="fa-solid fa-face-smile fs-6"></i>
                    </button>
                    <button className="btn btn-sm btn-secondary-soft me-2">
                      <i className="fa-solid fa-paperclip fs-6"></i>
                    </button>
                    <button className="btn btn-sm btn-success-soft me-2">
                      {" "}
                      Gif{" "}
                    </button>
                    <button className="btn btn-sm btn-primary ms-auto">
                      {" "}
                      Send{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="chatToast2"
              className="toast mb-0 bg-mode"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
              data-bs-autohide="false"
            >
              <div className="toast-header bg-mode">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-0 mt-1">Lori Ferguson</h6>
                      <div className="small text-secondary">
                        <i className="fa-solid fa-circle text-success me-1"></i>
                        Online
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="dropdown">
                      <a
                        className="btn btn-secondary-soft-hover py-1 px-2"
                        href="#"
                        id="chatcoversationDropdown2"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="chatcoversationDropdown2"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-camera-video me-2 fw-icon"></i>
                            Video call
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-telephone me-2 fw-icon"></i>
                            Audio call
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-trash me-2 fw-icon"></i>Delete{" "}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-chat-square-text me-2 fw-icon"></i>
                            Mark as unread
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-volume-up me-2 fw-icon"></i>
                            Muted
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-archive me-2 fw-icon"></i>
                            Archive
                          </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bi bi-flag me-2 fw-icon"></i>Report
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      className="btn btn-secondary-soft-hover py-1 px-2"
                      data-bs-toggle="collapse"
                      href="#collapseChat2"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseChat2"
                    >
                      <i className="bi bi-dash-lg"></i>
                    </a>
                    <button
                      className="btn btn-secondary-soft-hover py-1 px-2"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="toast-body collapse show" id="collapseChat2">
                <div className="chat-conversation-content custom-scrollbar h-200px">
                  <div className="text-center small my-2">
                    Jul 16, 2022, 06:15 am
                  </div>
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            Applauded no discovery😊
                          </div>
                          <div className="small my-2">6:15 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">
                          With pleasure
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            Please find the attached
                          </div>

                          <div className="small my-2">12:16 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-2 px-3 rounded-2">
                            How promotion excellent curiosity😮
                          </div>
                          <div className="small my-2">3:22 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end text-end mb-1">
                    <div className="w-100">
                      <div className="d-flex flex-column align-items-end">
                        <div className="bg-primary text-white p-2 px-3 rounded-2">
                          And sir dare view.
                        </div>
                        <div className="d-flex my-2">
                          <div className="small text-secondary">5:35 PM</div>
                          <div className="small ms-2">
                            <i className="fa-solid fa-check"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center small my-2">2 New Messages</div>
                  <div className="d-flex mb-1">
                    <div className="flex-shrink-0 avatar avatar-xs me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="w-100">
                        <div className="d-flex flex-column align-items-start">
                          <div className="bg-light text-secondary p-3 rounded-2">
                            <div className="typing d-flex align-items-center">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <textarea
                    className="form-control mb-sm-0 mb-3"
                    placeholder="Type a message"
                    rows="1"
                  ></textarea>
                  <div className="d-sm-flex align-items-end mt-2">
                    <button className="btn btn-sm btn-danger-soft me-2">
                      <i className="fa-solid fa-face-smile fs-6"></i>
                    </button>
                    <button className="btn btn-sm btn-secondary-soft me-2">
                      <i className="fa-solid fa-paperclip fs-6"></i>
                    </button>
                    <button className="btn btn-sm btn-success-soft me-2">
                      {" "}
                      Gif{" "}
                    </button>
                    <button className="btn btn-sm btn-primary ms-auto">
                      {" "}
                      Send{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalCreateFeed"
        tabindex="-1"
        aria-labelledby="modalLabelCreateFeed"
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
              ></button>
            </div>

            <div className="modal-body">
              <div className="d-flex mb-3">
                <div className="avatar avatar-xs me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/03.jpg"
                    alt=""
                  />
                </div>
                <form className="w-100">
                  <textarea
                    className="form-control pe-4 fs-3 lh-1 border-0"
                    rows="4"
                    placeholder="Share your thoughts..."
                    autoFocus
                  ></textarea>
                </form>
              </div>
              <div className="hstack gap-2">
                <a
                  className="icon-md bg-success bg-opacity-10 text-success rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Photo"
                >
                  {" "}
                  <i className="bi bi-image-fill"></i>{" "}
                </a>
                <a
                  className="icon-md bg-info bg-opacity-10 text-info rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Video"
                >
                  {" "}
                  <i className="bi bi-camera-reels-fill"></i>{" "}
                </a>
                <a
                  className="icon-md bg-danger bg-opacity-10 text-danger rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Events"
                >
                  {" "}
                  <i className="bi bi-calendar2-event-fill"></i>{" "}
                </a>
                <a
                  className="icon-md bg-warning bg-opacity-10 text-warning rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Feeling/Activity"
                >
                  {" "}
                  <i className="bi bi-emoji-smile-fill"></i>{" "}
                </a>
                <a
                  className="icon-md bg-light text-secondary rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Check in"
                >
                  {" "}
                  <i className="bi bi-geo-alt-fill"></i>{" "}
                </a>
                <a
                  className="icon-md bg-primary bg-opacity-10 text-primary rounded-circle"
                  href="#"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tag people on top"
                >
                  {" "}
                  <i className="bi bi-tag-fill"></i>{" "}
                </a>
              </div>
            </div>

            <div className="modal-footer row justify-content-between">
              <div className="col-lg-3">
                <select
                  className="form-select js-choice choice-select-text-none"
                  data-position="top"
                  data-search-enabled="false"
                >
                  <option value="PB">Public</option>
                  <option value="PV">Friends</option>
                  <option value="PV">Only me</option>
                  <option value="PV">Custom</option>
                </select>
              </div>
              <div className="col-lg-8 text-sm-end">
                <button type="button" className="btn btn-danger-soft me-2">
                  {" "}
                  <i className="bi bi-camera-video-fill pe-1"></i> Live video
                </button>
                <button type="button" className="btn btn-success-soft">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="feedActionPhoto"
        tabindex="-1"
        aria-labelledby="feedActionPhotoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="feedActionPhotoLabel">
                Add post photo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="d-flex mb-3">
                <div className="avatar avatar-xs me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/03.jpg"
                    alt=""
                  />
                </div>
                <form className="w-100">
                  <textarea
                    className="form-control pe-4 fs-3 lh-1 border-0"
                    rows="2"
                    placeholder="Share your thoughts..."
                  ></textarea>
                </form>
              </div>

              <div>
                <label className="form-label">Upload attachment</label>
                <div
                  className="dropzone dropzone-default card shadow-none"
                  data-dropzone='{"maxFiles":2}'
                >
                  <div className="dz-message">
                    <label htmlFor="fileInput">
                      <i className="bi bi-images display-3"></i>
                      <p>Drag here or click to upload photo.</p>
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer ">
              <button
                type="button"
                className="btn btn-danger-soft me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-success-soft">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="feedActionVideo"
        tabindex="-1"
        aria-labelledby="feedActionVideoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="feedActionVideoLabel">
                Add post video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="d-flex mb-3">
                <div className="avatar avatar-xs me-2">
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/03.jpg"
                    alt=""
                  />
                </div>
                <form className="w-100">
                  <textarea
                    className="form-control pe-4 fs-3 lh-1 border-0"
                    rows="2"
                    placeholder="Share your thoughts..."
                  ></textarea>
                </form>
              </div>

              <div>
                <label className="form-label">Upload attachment</label>
                <div
                  className="dropzone dropzone-default card shadow-none"
                  data-dropzone='{"maxFiles":2}'
                >
                  <div className="dz-message">
                    <i className="bi bi-camera-reels display-3"></i>
                    <p>Drag here or click to upload video.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger-soft me-2">
                <i className="bi bi-camera-video-fill pe-1"></i> Live video
              </button>
              <button type="button" className="btn btn-success-soft">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
