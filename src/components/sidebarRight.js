import React from "react";

const SidebarRight = () => {
  return (
    <>
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
    </>
  );
};

export default SidebarRight;
