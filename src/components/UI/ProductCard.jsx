import React from "react";
import productImg from "../../assets/images/couch.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../pages/sytles/productCard.css";
import { Col } from "reactstrap";

const ProductCard = () => {
  return (
    <Col lg="3" md="3" >
      <div className="product__item ">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={productImg} alt="couch-img" />
        </div>
        <div className="p-2 product__info">
        <h3 className="product__name"><Link to='/shop:id'>Modern Couch</Link></h3>
        <span>Chair</span>

        </div>
        
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">$399</span>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i class="bi bi-plus"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
