  import React from 'react'
  import Header from '../components/header';
  export default function messaging(){
  return (
  <div>
    <Header/>
    <main>
      <div className="container mt-4">
        <div className="row gx-0">
            
          <div className="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">
            
            {/* Divider */}
            <div className="d-flex align-items-center mb-4 d-lg-none">
              <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="btn btn-primary"><i className="fa-solid fa-sliders-h" /></span>
                <span className="h6 mb-0 fw-bold d-lg-none ms-2">Chats</span>
              </button>
            </div>
            {/* Advanced filter responsive toggler END */}
            <div className="card card-body border-end-0 border-bottom-0 rounded-bottom-0">
              <div className=" d-flex justify-content-between align-items-center">
                <h1 className="h5 mb-0">Chats </h1>
                {/* Chat new create message item START */}
                <div className="dropend position-relative">
                  <div className="nav">
                    <a className="icon-md rounded-circle btn btn-sm btn-primary-soft nav-link toast-btn" data-target="chatToast" href="#"> <i className="bi bi-pencil-square" /> </a>
                  </div>
                </div>
                {/* Chat new create message item END */}
              </div>
            </div>
            <nav className="navbar navbar-light navbar-expand-lg mx-0">
              <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar">
                {/* Offcanvas header */}
                <div className="offcanvas-header">
                  <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" />
                </div>
                {/* Offcanvas body */}
                <div className="offcanvas-body p-0">
                  <div className="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0">
                    {/* Search chat START */}
                    <form className="position-relative">
                      <input className="form-control py-2" type="search" placeholder="Search for chats" aria-label="Search" />
                      <button className="btn bg-transparent text-secondary px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                        <i className="bi bi-search fs-5" />
                      </button>
                    </form>
                    {/* Search chat END */}
                    {/* Chat list tab START */}
                    <div className="mt-4 h-100">
                      <div className="chat-tab-list custom-scrollbar">
                        <ul className="nav flex-column nav-pills nav-pills-soft">
                          <li data-bs-dismiss="offcanvas">
                            {/* Chat user tab item */}
                            <a href="#chat-1" className="nav-link active text-start" id="chat-1-tab" data-bs-toggle="pill" role="tab">
                              <div className="d-flex">
                                <div className="flex-shrink-0 avatar avatar-story me-2 status-online">
                                  <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt />
                                </div>
                                <div className="flex-grow-1 d-block">
                                  <h6 className="mb-0 mt-1">Frances Guerrero</h6>
                                </div>
                              </div>
                            </a>
                          </li>
                          {/* Chat user tab item */}
                          <li data-bs-dismiss="offcanvas">
                            <a href="#chat-3" className="nav-link text-start" id="chat-3-tab" data-bs-toggle="pill" role="tab">
                              <div className="d-flex">
                                <div className="flex-shrink-0 avatar avatar-story me-2">
                                  <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt />
                                </div>
                                <div className="flex-grow-1 d-block">
                                  <h6 className="mb-0 mt-1">Billy Vasquez</h6>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Chat list tab END */}
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-lg-8 col-xxl-9">
            <div className="card card-chat rounded-start-lg-0 border-start-lg-0">
              <div className="card-body h-100">
                <div className="tab-content py-0 mb-0 h-100" id="chatTabsContent">
                  {/* Conversation item START */}
                  <div className="fade tab-pane show active h-100" id="chat-1" role="tabpanel" aria-labelledby="chat-1-tab">
                    {/* Top avatar and status START */}
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <div className="d-flex mb-2 mb-sm-0">
                        <div className="flex-shrink-0 avatar me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt />
                        </div>
                        <div className="d-block flex-grow-1">
                          <h6 className="mb-0 mt-1">Judy Nguyen</h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        {/* Card action START */}
                        <div className="dropdown">
                          <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>               
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon" />Mark as read</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon" />View profile</a></li>
                          </ul>
                        </div>
                        {/* Card action END */}
                      </div>
                    </div>
                    {/* Top avatar and status END */}
                    <hr />
                    {/* Chat conversation START */}
                    <div className="chat-conversation-content custom-scrollbar">
                      {/* Chat time */}
                      <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                      {/* Chat message left */}
                      <div className="d-flex mb-1">
                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt />
                        </div>
                        <div className="flex-grow-1">
                          <div className="w-100">
                            <div className="d-flex flex-column align-items-start">
                              <div className="bg-light text-secondary p-2 px-3 rounded-2">Applauded no discovery in newspaper allowance am northward😊</div>
                              <div className="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Chat message right */}
                      <div className="d-flex justify-content-end text-end mb-1">
                        <div className="w-100">
                          <div className="d-flex flex-column align-items-end">
                            <div className="bg-primary text-white p-2 px-3 rounded-2">No visited raising gravity outward subject my cottage Mr be.</div>
                            <div className="d-flex my-2">
                              <div className="small text-secondary">6:20 AM</div>
                              <div className="small ms-2"><i className="fa-solid fa-check-double text-info" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Chat message left */}
                    </div>
                  </div>
                  {/* Conversation item END */}
                  {/* Conversation item START */}
                  <div className="fade tab-pane h-100" id="chat-3" role="tabpanel" aria-labelledby="chat-3-tab">
                    {/* Top avatar and status START */}
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <div className="d-flex mb-2 mb-sm-0">
                        <div className="flex-shrink-0 avatar me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt />
                        </div>
                        <div className="d-block flex-grow-1">
                          <h6 className="mb-0 mt-1">Billy Vasquez</h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        {/* Call button */}
                        {/* Card action START */}
                        <div className="dropdown">
                          <a className="icon-md rounded-circle btn btn-primary-soft me-2 px-2" href="#" id="chatcoversationDropdown" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></a>               
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="chatcoversationDropdown">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-check-lg me-2 fw-icon" />Mark as read</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-person-check me-2 fw-icon" />View profile</a></li>
                          </ul>
                        </div>
                        {/* Card action END */}
                      </div>
                    </div>
                    {/* Top avatar and status END */}
                    <hr />
                    {/* Chat conversation START */}
                    <div className="chat-conversation-content overflow-auto custom-scrollbar">
                      {/* Chat time */}
                      <div className="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                      {/* Chat message right */}
                      <div className="d-flex justify-content-end text-end mb-1">
                        <div className="w-100">
                          <div className="d-flex flex-column align-items-end">
                            <div className="bg-primary text-white p-2 px-3 rounded-2">Hello</div>
                          </div>
                        </div>
                      </div>
                      {/* Chat message left */}
                      <div className="d-flex mb-1">
                        <div className="flex-shrink-0 avatar avatar-xs me-2">
                          <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt />
                        </div>
                        <div className="flex-grow-1">
                          <div className="w-100">
                            <div className="d-flex flex-column align-items-start">
                              <div className="bg-light text-secondary p-2 px-3 rounded-2">Thank you for prompt response</div>
                              <div className="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Chat message left */}
                    </div>
                    {/* Chat conversation END */}
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-sm-flex align-items-end">
                  <textarea className="form-control mb-sm-0 mb-3" data-autoresize placeholder="Type a message" rows={1} defaultValue={""} />
                  <button className="btn btn-sm btn-primary ms-2"><i className="fa-solid fa-paper-plane fs-6" /></button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </main>
    
    <div className="position-fixed bottom-0 end-0 p-3">
      {/* Chat toast START */}
      <div id="chatToast" className="toast bg-mode" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
        <div className="toast-header bg-mode d-flex justify-content-between">
          {/* Title */}
          <h6 className="mb-0">New message</h6>
          <button className="btn btn-secondary-soft-hover py-1 px-2" data-bs-dismiss="toast" aria-label="Close"><i className="fa-solid fa-xmark" /></button>
        </div>
        {/* Top avatar and status END */}
        <div className="toast-body collapse show" id="collapseChat">
          {/* Chat conversation START */}
          {/* Form */}
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text border-0">To</span>
              <input className="form-control" type="text" placeholder="Type a name or multiple names" />
            </div>
          </form>         
          {/* Chat conversation END */}
          {/* Extra space */}
          <div className="h-200px" />
          {/* Button  */}
          <div className="d-sm-flex align-items-end">
            <textarea className="form-control mb-sm-0 mb-3" placeholder="Type a message" rows={1} spellCheck="false" defaultValue={""} />
            <button className="btn btn-sm btn-primary ms-2"><i className="fa-solid fa-paper-plane fs-6" /></button>
          </div>
        </div>
      </div>
      {/* Chat toast END */}
    </div>
  </div>
  );
};
