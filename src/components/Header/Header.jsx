import React, { useRef, useEffect } from "react";
import "./Header.css";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo1.jpg";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);


  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if(document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80) 
        {
          headerRef.current.classList.add("stick__header");
        } else {
          headerRef.current.classList.remove("sticky__header");
        }
    })
  }

  useEffect(() => {
    stickyHeader()
    return () => window.removeEventListener("scroll", stickyHeader);
  })

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />

              <div>
                <h1>FCI FURNITURE</h1>
                <p>Since 1998</p>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                <li className="nav__item">
                  <Link to="/home">Home</Link>
                </li>

                <li className="nav__item">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="nav__item">
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <span className="badge">1</span>
                <i className="bi bi-heart" font-size=""></i>
              </span>
              <span className="cart__icon">
                <span className="badge">1</span>
                <i className="bi bi-cart3" font-size=""></i>
              </span>
              <span>
                <motion.i
                  whileTap={{ scale: 1.2 }}
                  className="bi bi-person"
                  font-size=""
                ></motion.i>
              </span>
              <div className="mobile__menu">
              <span onClick={menuToggle}>
                <i className="bi bi-list"></i>
              </span>
            </div>
            </div>
            
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
