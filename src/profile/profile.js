import React from 'react';
import Header from '../components/header';
const Profile = () => {
  return (

  <div>
    <Header/>
    <br></br>
    <div className="container">
      <div className="row g-4">
        {/* Main content START */}
        <div className="col-lg-8 vstack gap-4">
          {/* My profile START */}
          <div className="card">
            {/* Cover image */}
            <div className="h-200px rounded-top" style={{backgroundImage: 'url(assets/images/bg/05.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} />
            {/* Card body START */}
            <div className="card-body py-0">
              <div className="d-sm-flex align-items-start text-center text-sm-start">
                <div>
                  {/* Avatar */}
                  <div className="avatar avatar-xxl mt-n5 mb-3">
                    <img className="avatar-img rounded-circle border border-white border-3" src="assets/images/avatar/07.jpg" alt />
                  </div>
                </div>
                <div className="ms-sm-4 mt-sm-3">
                  {/* Info */}
                  <h1 className="mb-0 h5">Sam Lanson <i className="bi bi-patch-check-fill text-success small" /></h1>
                  <p>Fondateur</p>
                </div>
                {/* Button */}
                <div className="d-flex mt-3 justify-content-center ms-sm-auto">
                <a className="btn btn-danger-soft me-2" href="/editProfile">
  <i className="bi bi-pencil-fill pe-1" /> Edit profile
</a>
                </div>
              </div>
              {/* List profile */}
              <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                <li className="list-inline-item"><i className="bi bi-calendar2-plus me-1" /> account created  on Nov 26, 2019</li>
              </ul>
            </div>
            {/* Card body END */}
            <div className="card-footer mt-3 pt-2 pb-0">
              {/* Nav profile pages */}
              <ul className="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                <li className="nav-item"> <a className="nav-link active" > Posts </a> </li>
              </ul>
            </div>
          </div>
          {/* My profile END */}
          {/* Share feed START */}
          <div className="card card-body">
            <div className="d-flex mb-3">
              {/* Avatar */}
              <div className="avatar avatar-xs me-2">
                <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt /> </a>
              </div>
              {/* Post input */}
              <form className="w-100">
                <input className="form-control pe-4 border-0" placeholder="Share your thoughts..." data-bs-toggle="modal" data-bs-target="#modalCreateFeed" />
              </form>
            </div>
            {/* Share feed toolbar START */}
            <ul className="nav nav-pills nav-stack small fw-normal">
              <li className="nav-item">
                <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionPhoto"> <i className="bi bi-image-fill text-success pe-2" />Photo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo"> <i className="bi bi-camera-reels-fill text-info pe-2" />Video</a>
              </li>
            </ul>
            {/* Share feed toolbar END */}
          </div>
          {/* Share feed END */}
          {/* Card feed item START */}
          <div className="card">
            {/* Card header START */}
            <div className="card-header border-0 pb-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  {/* Avatar */}
                  <div className="avatar avatar-story me-2">
                    <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt /> </a>
                  </div>
                  {/* Info */}
                  <div>
                    <div className="nav nav-divider">
                      <h6 className="nav-item card-title mb-0"> <a href="#!"> Lori Ferguson </a></h6>
                      <span className="nav-item small"> 2hr</span>
                    </div>
                    <p className="mb-0 small">Web Developer at Webestica</p>
                  </div>
                </div>
                {/* Card feed action dropdown START */}
                <div className="dropdown">
                  <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-three-dots" />
                  </a>
                  {/* Card feed action dropdown menu */}
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction5">
                    <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Efface post</a></li>
                  </ul>
                </div>
                {/* Card feed action dropdown END */}
              </div>
            </div>
            {/* Card header END */}
            {/* Card body START */}
            <div className="card-body">
              <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
              {/* Card img */}
              <img className="card-img" src="assets/images/post/3by2/01.jpg" alt="Post" />
              {/* Feed react START */}
              <ul className="nav nav-stack py-3 small">
                <li className="nav-item">
                  <a className="nav-link active" href="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1" />Liked (56)</a>
                </li>
              </ul>
              {/* Feed react END */}
              {/* Add comment */}
              <div className="d-flex mb-3">
                {/* Avatar */}
                <div className="avatar avatar-xs me-2">
                  <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt /> </a>
                </div>
                {/* Comment box  */}
                <form className="position-relative w-100">
                  <textarea className="form-control pe-4 bg-light" rows={1} placeholder="Add a comment..." defaultValue={""} />
                </form>
              </div>
              {/* Comment wrap START */}
              <ul className="comment-wrap list-unstyled">
                {/* Comment item START */}
                <li className="comment-item">
                  <div className="d-flex position-relative">
                    {/* Avatar */}
                    <div className="avatar avatar-xs">
                      <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt /></a>
                    </div>
                    <div className="ms-2">
                      {/* Comment by */}
                      <div className="bg-light rounded-start-top-0 p-3 rounded">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-1"> <a href="#!"> Frances Guerrero </a></h6>
                          <small className="ms-2">5hr</small>
                        </div>
                        <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                      </div>
                      {/* Comment react */}
                    </div>
                  </div>
                </li>
                {/* Comment item END */}
              </ul>
              {/* Comment wrap END */}
            </div>
          </div>
          {/* Card feed item END */}
          {/* Card feed item START */}
          <div className="card">
            {/* Card header START */}
            <div className="card-header border-0 pb-0">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  {/* Avatar */}
                  <div className="avatar me-2">
                    <a href="#"> <img className="avatar-img rounded-circle" src="assets/images/logo/13.svg" alt /> </a>
                  </div>
                  {/* Title */}
                  <div>
                    <h6 className="card-title mb-0"> <a href="#!"> Apple Education </a></h6>
                    <p className="mb-0 small">9 November at 23:29</p>
                  </div>
                </div>
                {/* Card share action menu */}
                <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardShareAction5" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-three-dots" />
                </a>
                {/* Card share action dropdown menu */}
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction5">
                  <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Efface post</a></li>
                </ul>
              </div>
              {/* Card share action END */}
            </div>
            {/* Card header START */}
            {/* Card body START */}
            <div className="card-body pb-0">
              <p>Find out how you can save time in the classroom this year. Earn recognition while you learn new skills on iPad and Mac. Start  recognition your first Apple Teacher badge today!</p>
              {/* Feed react START */}
              <ul className="nav nav-stack pb-2 small">
                <li className="nav-item">
                  <a className="nav-link active text-secondary" href="#!"> <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle" /> Louis, Billy and 126 others </a>
                </li>
              </ul>
              {/* Feed react END */}
            </div>
            {/* Card body END */}
            {/* Card Footer START */}
            <div className="card-footer py-3">
              {/* Feed react START */}
              <ul className="nav nav-fill nav-stack small">
                <li className="nav-item">
                  <a className="nav-link mb-0 active" href="#!"> <i className="bi bi-heart pe-1" />Liked (56)</a>
                </li>
              </ul>
              {/* Feed react END */}
            </div>
            {/* Card Footer END */}
          </div>
          {/* Card feed item END */}
        </div>
        {/* Main content END */}
        {/* Right sidebar START */}
        <div className="col-lg-4">
          <div className="row g-4">
            {/* Card START */}
            <div className="col-md-6 col-lg-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h5 className="card-title">About</h5>
                  {/* Button modal */}
                </div>
                {/* Card body START */}
                <div className="card-body position-relative pt-0">
                  <p> Devonshire difficulty gay assistance joy.</p>
                  {/* Date time */}
                  <ul className="list-unstyled mt-3 mb-0">
                    <li className="mb-2"> <i className="bi bi-calendar-date fa-fw pe-1" /> Born: <strong> October 20, 1990 </strong> </li>
                    <li> <i className="bi bi-envelope fa-fw pe-1" /> Email: <strong> webestica@gmail.com </strong> </li>
                  </ul>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Card END */}
            {/* Card START */}
            <div className="col-md-6 col-lg-12">
              <div className="card">
                {/* Card header START */}
                <div className="card-header d-sm-flex justify-content-between border-0">
                  <h5 className="card-title">Photos</h5>
                  <a className="btn btn-primary-soft btn-sm" href="#!"> See all photo</a>
                </div>
                {/* Card header END */}
                {/* Card body START */}
                <div className="card-body position-relative pt-0">
                  <div className="row g-2">
                    {/* Photos item */}
                    <div className="col-6">
                      <a href="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox>
                        <img className="rounded img-fluid" src="assets/images/albums/01.jpg" alt />
                      </a>
                    </div>
                    {/* Photos item */}
                    <div className="col-6">
                      <a href="assets/images/albums/02.jpg" data-gallery="image-popup" data-glightbox>
                        <img className="rounded img-fluid" src="assets/images/albums/02.jpg" alt />
                      </a>
                    </div>
                    {/* Photos item */}
                    <div className="col-4">
                      <a href="assets/images/albums/03.jpg" data-gallery="image-popup" data-glightbox>
                        <img className="rounded img-fluid" src="assets/images/albums/03.jpg" alt />
                      </a>
                    </div>
                    {/* Photos item */}
                    <div className="col-4">
                      <a href="assets/images/albums/04.jpg" data-gallery="image-popup" data-glightbox>
                        <img className="rounded img-fluid" src="assets/images/albums/04.jpg" alt />
                      </a>
                    </div>
                    {/* Photos item */}
                    <div className="col-4">
                      <a href="assets/images/albums/05.jpg" data-gallery="image-popup" data-glightbox>
                        <img className="rounded img-fluid" src="assets/images/albums/05.jpg" alt />
                      </a>
                      {/* glightbox Albums left bar END  */}
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>

    <div className="modal fade" id="modalCreateFeed" tabIndex={-1} aria-labelledby="modalLabelCreateFeed" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          {/* Modal feed header START */}
          <div className="modal-header">
            <h5 className="modal-title" id="modalLabelCreateFeed">Create post</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          {/* Modal feed header END */}
          {/* Modal feed body START */}
          <div className="modal-body">
            {/* Add Feed */}
            <div className="d-flex mb-3">
              {/* Avatar */}
              <div className="avatar avatar-xs me-2">
                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt />
              </div>
              {/* Feed box  */}
              <form className="w-100">
                <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows={4} placeholder="Share your thoughts..." autofocus defaultValue={""} />
              </form>
            </div>
            {/* Feed rect START */}
            <div className="hstack gap-2">
              <a className="icon-md bg-success bg-opacity-10 text-success rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Photo"> <i className="bi bi-image-fill" /> </a>
              <a className="icon-md bg-info bg-opacity-10 text-info rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Video"> <i className="bi bi-camera-reels-fill" /> </a>
            </div>
            {/* Feed rect END */}
          </div>
          {/* Modal feed body END */}
          {/* Modal feed footer */}
          <div className="modal-footer row justify-content-between">
            {/* Button */}
            <div className="col-lg-8 text-sm-end">
              <button type="button" className="btn btn-danger-soft me-2"> <i className="bi bi-camera-video-fill pe-1" /> Live video</button>
              <button type="button" className="btn btn-success-soft">Post</button>
            </div>
          </div>
          {/* Modal feed footer */}
        </div>
      </div>
    </div>

    <div className="modal fade" id="feedActionVideo" tabIndex={-1} aria-labelledby="feedActionVideoLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="feedActionVideoLabel">Add post video</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          {/* Modal feed header END */}
          {/* Modal feed body START */}
          <div className="modal-body">
            {/* Add Feed */}
            <div className="d-flex mb-3">
              {/* Avatar */}
              <div className="avatar avatar-xs me-2">
                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt />
              </div>
              {/* Feed box  */}
              <form className="w-100">
                <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows={2} placeholder="Share your thoughts..." defaultValue={""} />
              </form>
            </div>
            {/* Dropzone photo START */}
            <div>
              <label className="form-label">Upload attachment</label>
              <div className="dropzone dropzone-default card shadow-none" data-dropzone="{&quot;maxFiles&quot;:2}">
                <div className="dz-message">
                  <i className="bi bi-camera-reels display-3" />
                  <p>Drag here or click to upload video.</p>
                </div>
              </div>
            </div>
            {/* Dropzone photo END */}
          </div>
          {/* Modal feed body END */}
          {/* Modal feed footer */}
          <div className="modal-footer">
            {/* Button */}
            <button type="button" className="btn btn-danger-soft me-2"><i className="bi bi-camera-video-fill pe-1" /> Live video</button>
            <button type="button" className="btn btn-success-soft">Post</button>
          </div>
          {/* Modal feed footer */}
        </div>
      </div>
    </div>
    {/* Modal create Feed video END */}
    {/* Modal create events START */}

  </div>
 );
};

export default Profile;
