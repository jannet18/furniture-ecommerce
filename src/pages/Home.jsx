import React from 'react';
import { Container, Row , Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../services/Services';
// import heroImg from ".././assets/images/hero.jpg";
import heroImg from ".././assets/images/hero2.jpg";
import "./sytles/Home.css";

const Home = () => {

  const year = new Date().getFullYear();
  return (

    <div>
      <section className='hero__section'>
        <Container>
         <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Popular Product in {year}</p>
              <h2>Create more Minimalistic & Modern Interior</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi optio quibusdam atque veritatis, beatae ad tempore tenetur dolor quisquam!</p>
              <motion.button whileTap={{ scale:1.2 }} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md=''>
            <div className="hero__img">
              <img src={heroImg} alt="heroImg" />
            </div>
          </Col>
          </Row> 
        </Container>
        <Services/>
      </section>
    </div>
  )
}

export default Home