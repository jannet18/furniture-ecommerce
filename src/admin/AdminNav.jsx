import React from "react";
import { Container, Row, Col } from "reactstrap";
import useAuth from "../firebase/useAuth";
import "../pages/sytles/AdminNav.css";

const AdminNav = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2>FCI Furniture</h2>
                <div className="search__box">
                  <input type="text" placeholder="" />
                  <span>
                    {" "}
                    <i className="bi bi-search"></i>
                  </span>
                </div>
                <div className="admin__nav-top-right">
                  <span>
                    <i className="bi bi-bell"></i>
                  </span>
                  <span>
                    <i className="bi bi-gear"></i>
                  </span>
                  <img src={currentUser.photoURL} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default AdminNav;
