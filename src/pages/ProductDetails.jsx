import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from ".././assets/data/products";
import MainSection from "../components/UI/MainSection";
import ".././pages/sytles/ProductDetails.css";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    shortDesc,
    description,
  } = product;
  return (
    <section>
      <MainSection />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-4 mb-3">
                  <span>
                    <i className="bi bi-star-fill"></i>
                  </span>
                  <span>
                    <i className="bi bi-star-fill"></i>
                  </span>

                  <span>
                    <i className="bi bi-star-fill"></i>
                  </span>
                  <span>
                    <i className="bi bi-star-fill"></i>
                  </span>

                  <span>
                    <i className="bi bi-star-half"></i>
                  </span>
                </div>
                <p><span>{avgRating}</span>ratings</p>
              </div>
              <span className="product__price">${price}</span>
              <p className="mt-3">
                {shortDesc}
                <a href="description">{description}more...</a>
              </p>
              <button className="buy__button"><Link to=""></Link>Add to Cart</button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <div className="tab__wrapper">
        <Container>
          <Row>
            <Col>
            <h5>Description</h5>
            <h6>Reviews({reviews.length})</h6>

            </Col>
          </Row>
        </Container>
        </div>
       
      </section>
    </section>
  );
};

export default ProductDetails;
