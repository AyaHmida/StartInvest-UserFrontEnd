import React,{useState} from 'react';
import Header from '../components/header';
const allSectors = ['Technologie', 'Finance', 'Santé', 'Éducation', 'Art', 'Agriculture', 'E-commerce', 'Énergie', 'Automobile', 'Tourisme'];

export default function PageDeMiseAJourProfil() {
  const [typePerson, setTypePerson] = useState('');
  const [sectorsOfInterest, setSectorsOfInterest] = useState([]);
  const [currentSector, setCurrentSector] = useState('');
  const [suggestedSectors, setSuggestedSectors] = useState([]);

  const handleSectorChange = () => {
    if (currentSector && !sectorsOfInterest.includes(currentSector)) {
      setSectorsOfInterest([...sectorsOfInterest, currentSector]);
      setCurrentSector('');
    }
    setSuggestedSectors([]); // Clear suggestions when a sector is added
  };

  const handleSectorDelete = (sectorToDelete) => {
    setSectorsOfInterest(sectorsOfInterest.filter((sector) => sector !== sectorToDelete));
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setCurrentSector(input);

    // Filter suggested sectors based on the input
    const filteredSectors = allSectors.filter((sector) =>
      sector.toLowerCase().includes(input.toLowerCase())
    );

    setSuggestedSectors(filteredSectors);
  };

  const handleSuggestionClick = (suggestedSector) => {
    setCurrentSector(suggestedSector);
    setSuggestedSectors([]); // Clear suggestions when a suggestion is clicked
  };
  return (
    <div>
      <Header />
      <br></br>
      <main>
        <div className="container">
          <br/><br/>
          <div className="row g-4">
            {/* Barre latérale START */}
            <div className="col-lg-3">
              {/* Bouton pour afficher le filtre avancé sur les petits écrans START */}
              <div className="d-flex align-items-center d-lg-none">
                <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideNavbar" aria-controls="offcanvasSideNavbar">
                  <span className="btn btn-primary"><i className="fa-solid fa-sliders-h" /></span>
                  <span className="h6 mb-0 fw-bold d-lg-none ms-2">Mon profil</span>
                </button>
              </div>
              {/* Bouton pour afficher le filtre avancé sur les petits écrans END */}
              {/* Barre de navigation START*/}
              <nav className="navbar navbar-expand-lg mx-0"> 
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasSideNavbar">
                  {/* En-tête du volet latéral */}
                  <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  {/* Corps du volet latéral */}
                  <div className="offcanvas-body d-block px-2 px-lg-0">
                    {/* Carte START */}
                    <div className="card overflow-hidden">
                      {/* Image de couverture */}
                      <div className="h-50px" style={{backgroundImage: 'url(assets/images/bg/01.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} />
                      {/* Corps de la carte START */}
                      <div className="card-body pt-0">
                        <div className="text-center">
                          {/* Avatar */}
                          <div className="avatar avatar-lg mt-n5 mb-3">
                            <a href="#!"><img className="avatar-img rounded border border-white border-3" src="assets/images/avatar/07.jpg" alt /></a>
                          </div>
                          {/* Informations */}
                          <h5 className="mb-0"> <a href="#!">Sam Lanson </a> </h5>
                          <small>Développeur Web chez Webestica</small>
                          <p className="mt-3">Description de la startup s'il y en a une</p>
                          {/* Statistiques de l'utilisateur START */}
                          <div className="hstack gap-2 gap-xl-3 justify-content-center">
                            {/* Élément de statistiques de l'utilisateur */}
                            <div>
                              <h6 className="mb-0">256</h6>
                              <small>Publications</small>
                            </div>
                          </div>
                          {/* Statistiques de l'utilisateur END */}
                        </div>
                        {/* Séparateur */}
                        <hr />
                        {/* Barre latérale START */}
                        <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                          <li className="nav-item">
                            <a className="nav-link" href="my-profile.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/home-outline-filled.svg" alt /><span>Fil d'actualité </span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="my-profile-connections.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/person-outline-filled.svg" alt /><span>Connexions </span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="notifications.html"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/notification-outlined-filled.svg" alt /><span>Notifications </span></a>
                          </li>
                        </ul>
                        {/* Barre latérale END */}
                      </div>
                      {/* Corps de la carte END */}
                      {/* Pied de carte */}
                      <div className="card-footer text-center py-2">
                        <a className="btn btn-link btn-sm" href="my-profile.html">Voir le profil </a>
                      </div>
                    </div>
                    <p className="small text-center mt-1">©2024 <a className="text-reset" target="_blank" href="https://www.webestica.com/"> Webestica </a></p>
                  </div>
                </div>
              </nav>
              {/* Barre de navigation END*/}
            </div>
            {/* Barre latérale END */}
            {/* Contenu principal START */}
            <div className="col-md-8 col-lg-6 vstack gap-4">
              {/* Mise à jour du profil START */}
              <div className="card">
                {/* Titre START */}
                <div className="card-header border-0 pb-0">
                  <h1 className="h4 card-title mb-0">Mettre à jour le profil</h1>
                </div>
                {/* Titre END */}
                {/* Formulaire de mise à jour du profil START */}
                <div className="card-body">
                  <form className="row g-3">
                    {/* Informations sur la page */}
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Nom</label>
                      <input type="text" className="form-control" placeholder="Nom " defaultValue name="name" />
                    </div>
                    {/* Nom d'affichage */}
                    {/* Email */}
                    <div className="col-sm-6 col-lg-4">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="Email " defaultValue name="email" />
                    </div>
                    {/* Catégorie */}
                    <div className="col-sm-6 col-lg-4">
                    <label className="form-label">Type de personne</label>
                    <select
                      className="form-select js-choice"
                      data-search-enabled="true"
                      onChange={(e) => setTypePerson(e.target.value)}
                      value={typePerson}
                      required
                    >
                      <option value="">Sélectionnez le type</option>
                      <option value="fondateur">Fondateur</option>
                      <option value="investisseur">Investisseur</option>
                    </select>
                    <small className="text-danger">Ce champ est obligatoire</small>
                  </div>
                    {/* Numéro de téléphone */}
                    <div className="col-lg-6">
                      <label className="form-label">Numéro de téléphone</label>
                      <input type="text" className="form-control" placeholder="Numéro de téléphone " />
                    </div>
                    {typePerson === 'fondateur' && (
                    <>
                      <div className="col-12">
                        <label className="form-label">Nom de la startup</label>
                        <input type="text" className="form-control" placeholder="Nom " defaultValue name="startupName" />
                        <small className="text-muted">Nom de la startup.</small>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <label className="form-label">Secteur</label>
                        <select className="form-select js-choice" data-search-enabled="true">
                          <option value="technologie">Technologie</option>
                          <option value="mathématiques">Mathématiques</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label">Description de la startup</label>
                        <textarea className="form-control" rows={3} placeholder="Description " defaultValue={""} />
                        <small className="text-muted">Limite de caractères : 300</small>
                      </div>
                      <div className="col-12">
                        <h5 className="card-title mb-0">Lien social</h5>
                      </div>
                      {/* Facebook */}
                      <div className="col-sm-6">
                        <label className="form-label">Facebook</label>
                        <div className="input-group">
                          <span className="input-group-text border-0"> <i className="bi bi-facebook text-facebook" /> </span>
                          <input type="text" className="form-control" placeholder="https://www.facebook.com/" />
                        </div>
                      </div>
                    </>
                  )}
{typePerson === 'investisseur' && (
                    <div className="col-sm-6 col-lg-8">
                      <label className="form-label">Secteurs d'intérêt</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ajouter un secteur d'intérêt"
                          value={currentSector}
                          onChange={handleInputChange}
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={handleSectorChange}
                        >
                          Ajouter
                        </button>
                      </div>
                      {/* Suggestions dynamiques */}
                      {suggestedSectors.length > 0 && (
                        <ul className="list-group">
                          {suggestedSectors.map((suggestedSector, index) => (
                            <li
                              key={index}
                              className="list-group-item suggestion-item"
                              onClick={() => handleSuggestionClick(suggestedSector)}
                            >
                              {suggestedSector}
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* Secteurs sélectionnés */}
                      <div className="d-flex flex-wrap">
                        {sectorsOfInterest.map((sector, index) => (
                          <div key={index} className="badge bg-primary m-1">
                            {sector}{' '}
                            <span
                              className="badge bg-danger"
                              onClick={() => handleSectorDelete(sector)}
                              style={{ cursor: 'pointer' }}
                            >
                              X
                            </span>
                          </div>
                        ))}
                      </div>
                      <small className="text-muted">Sélectionnez plusieurs secteurs d'intérêt</small>
                      <br/>
                      <div className="col-12">
                        <br/>
                        <h5 className="card-title mb-0">Lien social</h5>
                      </div>
                      {/* Facebook */}
                      <div className="col-sm-6">
                        <br/>
                        <label className="form-label">Facebook</label>
                        <div className="input-group">
                          <span className="input-group-text border-0"> <i className="bi bi-facebook text-facebook" /> </span>
                          <input type="text" className="form-control" placeholder="https://www.facebook.com/" />
                        </div>
                      </div>
                    </div>
                    
                  )}

                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-primary mb-0">Mettre à jour le profil</button>
                    </div>
                  </form>
                </div>
                {/* Formulaire de mise à jour du profil END */}
              </div>
              {/* Mise à jour du profil END */}
            </div>
          </div> {/* Row END */}
        </div>
        {/* Container END */}
      </main>
    </div>
  );
}
