import React from "react";

const Messages = () => {
  return (
    <>
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
    </>
  );
};

export default Messages;
