import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-dark text-white py-1">
          <div className="col-md-6 text-center">
            <Link className="navbar-brand fs-3 fw-bold text-info" to="/">
              SabaikoBazar
            </Link>
          </div>

          <div className="col-md-3 fs-3 d-flex justify-content-evenly">
            <div
              onClick={() => {
                Swal.fire({
                  title: "Successful",
                  text: "logged out successfully",
                  timer: 3000,
                });
                dispatch({ type: "LOG_OUT" });
              }}
            >
              <i className="bi bi-box-arrow-in-left text-white"></i>
            </div>
            <Link to={"/register"}>
              <i className="bi bi-person-circle text-warning"></i>
            </Link>
            <Link to={"/cart"}>
              <i className="bi bi-cart text-success"></i>
            </Link>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
