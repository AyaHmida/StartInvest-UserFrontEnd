import React, { useEffect, useState } from "react";
import { Header } from "../components";
import { callApi } from "../api";
const Messaging = () => {
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [userdetail, setUserdetail] = useState();
  const [selectedFollowerId, setSelectedFollowerId] = useState(null);
  const [selectedFollower, setSelectedFollower] = useState(null);

  const getUser = () => {
    callApi("auth/user").then((data) => {
      setUserdetail(data.user);
    });
  };

  const showConversation = (followerId) => {
    callApi(`auth/showConversation/${followerId}`).then((response) => {
      setMessages(response);
    });

    const follower = followers.find((follower) => follower.id === followerId);
    setSelectedFollower(follower);
  };

  const createMessage = (followerId) => {
    if(followerId==null){
      
    }
    const formData = new FormData();
    formData.append("content", content);
    formData.append("auth_id", userdetail.id);
    formData.append("receiver_id", selectedFollowerId);
    formData.append("chat_id", selectedFollower.chat_id);
    callApi(`auth/message/${followerId}`, "POST", formData, true);
    setContent("");
    showConversation(followerId);
  };

  const [followers, setFollowers] = useState([]);

  const fetchFollowers = async () => {
    try {
      const response = await callApi("auth/followerPersonns");
      setFollowers(response);
    } catch (error) {
      console.error("Error fetching followers:", error);
    }
  };

  useEffect(() => {
    getUser();
    fetchFollowers();
  }, []);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <main>
        <div className="container mt-4">
          <div className="row gx-0">
            <div className="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">
              <nav className="navbar navbar-light navbar-expand-lg mx-0">
                <div
                  className="offcanvas offcanvas-start"
                  tabIndex={-1}
                  id="offcanvasNavbar"
                >
                  <div className="offcanvas-header">
                    <button
                      type="button"
                      className="btn-close text-reset ms-auto"
                      data-bs-dismiss="offcanvas"
                    />
                  </div>
                  <div className="offcanvas-body p-0">
                    <div className="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0">
                      <form className="position-relative">
                        <input
                          className="form-control py-2"
                          type="search"
                          placeholder="Rechercher des chats"
                          aria-label="Rechercher"
                        />
                        <button
                          className="btn bg-transparent text-secondary px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                          type="submit"
                        >
                          <i className="bi bi-search fs-5" />
                        </button>
                      </form>
                      <div className="mt-4 h-100">
                        <div className="chat-tab-list custom-scrollbar">
                          <ul className="nav flex-column nav-pills nav-pills-soft">
                            {followers.map((follower) => (
                              <li
                                key={follower.id}
                                onClick={() => showConversation(follower.id)}
                                data-bs-dismiss="offcanvas"
                              >
                                <a
                                  href={`#chat-${follower.id}`}
                                  className={`nav-link text-start ${
                                    selectedFollowerId === follower.id
                                      ? "active"
                                      : ""
                                  }`}
                                  id={`chat-${follower.id}-tab`}
                                  data-bs-toggle="pill"
                                  role="tab"
                                >
                                  <div className="d-flex">
                                    <div className="flex-shrink-0 avatar avatar-story me-2 status-online">
                                      <img
                                        className="avatar-img rounded-circle"
                                        src={
                                          follower.image
                                            ? `http://127.0.0.1:8000/uploads/${follower.image}`
                                            : "assets/images/avatar/no-image-male.jpg"
                                        }
                                        alt={follower.name}
                                      />
                                    </div>
                                    <div className="flex-grow-1 d-block">
                                      <h6 className="mb-0 mt-1">
                                        {follower.name}
                                      </h6>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-lg-8 col-xxl-9">
              <div className="card card-chat rounded-start-lg-0 border-start-lg-0">
                <div className="card-body h-100">
                  <div
                    className="tab-content py-0 mb-0 h-100"
                    id="chatTabsContent"
                  >
                    {/* Conversation item START */}
                    <div
                      className="fade tab-pane show active h-100"
                      id={`chat-${selectedFollowerId}`}
                      role="tabpanel"
                      aria-labelledby={`chat-${selectedFollowerId}-tab`}
                    >
                      {/* Top avatar and status START */}
                      <div className="d-sm-flex justify-content-between align-items-center">
                        <div className="d-flex mb-2 mb-sm-0">
                          <div className="flex-shrink-0 avatar me-2">
                            <img
                              className="avatar-img rounded-circle"
                              src={
                                selectedFollower && selectedFollower.image // Modification ici
                                  ? `http://127.0.0.1:8000/uploads/${selectedFollower.image}`
                                  : "assets/images/avatar/no-image-male.jpg"
                              }
                              alt={selectedFollower && selectedFollower.name} // Modification ici
                            />
                          </div>
                          <div className="d-block flex-grow-1">
                            <h6 className="mb-0 mt-1">
                              {selectedFollower && selectedFollower.name}
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          {/* Card action START */}
                          <div className="dropdown">
                            <a
                              className="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                              href="#"
                              id="chatcoversationDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              aria-expanded="false"
                            >
                              <i className="bi bi-three-dots-vertical" />
                            </a>
                            <ul
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="chatcoversationDropdown"
                            >
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-check-lg me-2 fw-icon" />
                                  Mark as read
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="bi bi-person-check me-2 fw-icon" />
                                  View profile
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* Card action END */}
                        </div>
                      </div>
                      {/* Top avatar and status END */}
                      <hr />
                      {/* Chat conversation START */}
                      <div className="chat-conversation-content custom-scrollbar">
                        {messages &&
                          messages.map((message, index) => (
                            <div key={index}>
                              {/* Chat time */}
                              <div className="text-center small my-2">
                                Jul 16, 2022, 06:15 am
                              </div>
                              {/* Chat message left */}
                              {message.from_user !== userdetail.id ? (
                                <div className="d-flex mb-1">
                                  <div className="flex-shrink-0 avatar avatar-xs me-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={
                                        selectedFollower &&
                                        selectedFollower.image // Modification ici
                                          ? `http://127.0.0.1:8000/uploads/${selectedFollower.image}`
                                          : "assets/images/avatar/no-image-male.jpg"
                                      }
                                    />
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="w-100">
                                      <div className="d-flex flex-column align-items-start">
                                        <div
                                          className={`bg-light text-secondary p-2 px-3 rounded-2 ${
                                            message.from_user !== userdetail.id
                                              ? "float-start"
                                              : ""
                                          }`}
                                        >
                                          {message.content}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                              {/* Chat message right */}
                              {message.from_user === userdetail.id ? (
                                <div className="d-flex justify-content-end text-end mb-1">
                                  <div className="w-100">
                                    <div className="d-flex flex-column align-items-end">
                                      <div
                                        className={`bg-primary text-white p-2 px-3 rounded-2`}
                                      >
                                        {message.content}
                                      </div>
                                      <div className="d-flex my-2">
                                        <div className="small text-secondary">
                                          6:20 AM
                                        </div>
                                        <div className="small ms-2">
                                          <i className="fa-solid fa-check-double text-info" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          ))}
                      </div>
                    </div>
                    {/* Conversation item END */}
                    {/* Conversation item START */}
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-sm-flex align-items-end">
                    <textarea
                      className="form-control mb-sm-0 mb-3"
                      data-autoresize
                      placeholder="Type a message"
                      rows={1}
                      defaultValue={""}
                      name="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <button
                      className="btn btn-sm btn-primary ms-2"
                      onClick={() => createMessage(selectedFollower.id)}
                    >
                      <i className="fa-solid fa-paper-plane fs-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Messaging;
