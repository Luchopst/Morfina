import "../Styles/Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-transparent bd-filter rounded"
        aria-label="Twelfth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-start"
            id="navbarsExample10"
          >
            <div className="logo">
              <img src="\Imagenes\LogoMorfina.jpg" alt="" />
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-light menu-nav"
                  aria-current="page"
                  href="#"
                >
                  Banda
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light menu-nav" href="#">
                  Fotos
                </a>
              </li>
              <li className="nav-item "></li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle text-light "
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Integrantes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Shows
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Comentarios
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
