import React from "react";
import { Link } from "react-router-dom";

import {CartWidget} from "../components/Cart/CartWidget";
import {useCart} from "../hooks"

const NavBar = () => {
  const {numItems} = useCart();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand links-router">
            MDZ Drinks
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active links-router" aria-current="page">
                  Catálogo
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li>
                  <Link to="/category/gaseosas" className="dropdown-item">
                  Gaseosas
                  </Link>
                  </li>
                  <li>
                  <Link to="/category/cervezas" className="dropdown-item">
                  Cervezas
                  </Link>
                  </li>
                  <li>
                  <Link to="/category/gin" className="dropdown-item">
                  Gin
                  </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {numItems > 0 && (
              <span className="navbar-text">
                <Link to={"/cart"} className="links-router">
                  <CartWidget />
                </Link>
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
