import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
// import heroImg from ".././assets/images/hero.jpg";
import heroImg from ".././assets/images/hero2.jpg";
import "./sytles/Home.css";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    setBestSalesProducts(filteredBestSalesProducts);
    setTrendingProducts(filteredTrendingProducts);
  }, []);
  return (
    <div>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Popular Product in {year}</p>
                <h2>Create more Minimalistic & Modern Interior</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quasi optio quibusdam atque veritatis, beatae ad tempore
                  tenetur dolor quisquam!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="">
              <div className="hero__img">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
          </Row>
        </Container>
        <Services />

        <section className="trending__products">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title">Trending Products</h2>
              </Col>
              <ProductsList data={trendingProducts} />
            </Row>
          </Container>
        </section>

        <section className="best__sales">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title">Best Sales</h2>
              </Col>
              <ProductsList data={bestSalesProducts} />
            </Row>
          </Container>
        </section>
        <section className="timer__count">
          <Container>
            <Row>
              <Col lg='6' md='6'></Col>
            </Row>
          </Container>
        </section>
      </section>
    </div>
  );
};

export default Home;
