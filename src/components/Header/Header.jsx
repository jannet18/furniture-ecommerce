import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import logo from '/home/janet/development/code/react-firebase/furniture-ecommerce/src/assets/logo1.jpg';
import { Container, Row } from "reactstrap";
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <header className='header'>
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
            <div className="navigation">
              <ul className="menu">
                <li className="nav__item">
                  <Link to='/home'>Home</Link>
                </li>
              
                <li className="nav__item">
                  <Link to='/shop'>Shop</Link>
                </li>
                <li className="nav__item">
                  <Link to='/cart'>Cart</Link>
                </li>
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon"><span className='badge'>1</span><i className="bi bi-heart" font-size=""></i></span>
              <span className="cart__icon"><span className='badge'>1</span><i className="bi bi-cart3" font-size=""></i></span>
              <span><motion.i whileTap={{ scale:1.2}} className="bi bi-person" font-size=""></motion.i></span>
            </div>
            <div className="mobile__menu">
              <span><i className="bi bi-list"></i></span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
    
  )
}

export default Header