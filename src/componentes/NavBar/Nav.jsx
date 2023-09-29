import {} from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
      <header>
      <nav className="navbar navbar-expand-md bg-black navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Masculino">Masculino</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Feminino">Feminino</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/casual">Casual</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/outlet">Outlet</NavLink>
              </li>
            </ul>
            <div id="userControls">
              <button id="userButton" className="btn btn-outline-light rounded-0" type="submit">
                Carregando...
              </button>
            </div>    
          </div>
        </div>
      </nav>
    </header>
    
  );
}
export default Nav;
