import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.jpg';
import { Container, Row } from "reactstrap";


const Header = () => {

  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="/" />
            </div>
          </div>
        </Row>
      </Container>
    </header>
    
  )
}

export default Header