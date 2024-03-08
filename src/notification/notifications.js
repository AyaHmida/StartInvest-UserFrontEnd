 import React from 'react'
 import Header from '../components/header';
 export default function Notifications(){
  return (
  <div>
    <Header/>
      <div className="container">
        <div className="row g-4">
          {/* Main content START */}
          <div className="col-lg-8 mx-auto">
            {/* Card START */}
            <div className="card">
              <div className="card-header py-3 border-0 d-flex align-items-center justify-content-between">
                <h1 className="h5 mb-0">Notifications</h1>
                {/* Notification action START */}
                <div className="dropdown">
                  <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardNotiAction" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-three-dots" />
                  </a>
                  {/* Card share action dropdown menu */}
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction">
                    <li><a className="dropdown-item" href="#"> <i className="bi bi-check-lg fa-fw pe-2" />Mark all read</a></li>
                  </ul>
                </div>
                {/* Notification action END */}
              </div>
              <div className="card-body p-2">
                <ul className="list-unstyled">
                  <li>
                    <div className="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                      {/* Avatar */}
                      <div className="avatar text-center">
                        <div className="avatar-img rounded-circle bg-success"><span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span></div>
                      </div>
                      {/* Info */}
                      <div className="mx-sm-3 my-2 my-sm-0">
                        <a className="small text-body stretched-link" href="#!"> Webestica has 15 like and 1 new activity</a>
                      </div>
                      {/* Action */}
                      <div className="d-flex ms-auto">
                        {/* Notification action START */}
                        <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                          <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots" />
                          </a>
                          {/* Card share action dropdown menu */}
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction3">
                            <li><a className="dropdown-item" href="#"> <i className="bi bi-trash fa-fw pe-2" />Delete</a></li>
                          </ul>
                        </div>
                        {/* Notification action END */}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                      {/* Avatar */}
                      <div className="avatar text-center">
                        <img className="avatar-img rounded-circle" src="assets/images/logo/08.svg" alt />
                      </div>
                      {/* Info */}
                      <div className="mx-sm-3 my-2 my-sm-0">
                        <p className="small mb-0"><b>Order cancelled: #23685</b> </p>
                        <p className="small mb-0">Order #23685 belonging to Amanda Reed has been cancelled</p>
                        <a className="btn btn-link btn-sm" href="#!"> <u> Review order </u></a>
                      </div>
                      {/* Action */}
                      <div className="d-flex ms-auto">
                        <div className="dropdown position-absolute end-0 top-0 mt-3 me-3">
                          <a href="#" className="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction8" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots" />
                          </a>
                          {/* Card share action dropdown menu */}
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction8">
                            <li><a className="dropdown-item" href="#"> <i className="bi bi-trash fa-fw pe-2" />Delete</a></li>
                          </ul>
                        </div>
                        {/* Notification action END */}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer border-0 py-3 text-center position-relative d-grid pt-0">
                {/* Load more button START */}
                <a href="#!" role="button" className="btn btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
                  <span className="load-text"> Load more notifications </span>
                  <div className="load-icon">
                    <div className="spinner-grow spinner-grow-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </a>
                {/* Load more button END */}
              </div>
            </div>
            {/* Card END */}
          </div>
        </div> {/* Row END */}
      </div>
</div>
  );
};
