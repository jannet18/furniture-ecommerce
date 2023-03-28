import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from ".././assets/data/products";
import MainSection from "../components/UI/MainSection";
import ".././pages/sytles/ProductDetails.css";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [tab, setTab] = useSate("desc");
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
                <p>
                  <span>{avgRating}</span>ratings
                </p>
              </div>
              <span className="product__price">${price}</span>
              <p className="mt-3">
                {shortDesc}
                <a href="description">{description}more...</a>
              </p>
              <button className="buy__button">
                <Link to=""></Link>Add to Cart
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h5
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h5>
                <h5
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews({reviews.length})
                </h5>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews.map((item, id) => (
                        <li key={id} className="mb-4">
                          <h6>Jane Doe</h6>
                          <span>{item.rating}(average rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review__form">
                      <h4>Share your experience</h4>
                      <form action="">
                        <div className="form__group">
                          <input type="text" placeholder="Enter name" />
                        </div>
                        <div className="form__group">
                        <span>1<i className="bi bi-star-half"></i></span>
                        <span>2<i className="bi bi-star-half"></i></span>
                        <span>3<i className="bi bi-star-half"></i></span>
                        <span>4<i className="bi bi-star-half"></i></span>
                        <span>5<i className="bi bi-star-half"></i></span>
                        </div>
                        <div className="form__group">
                          <input type="text" placeholder="Review message..." />
                        </div>
                      </form>
                    </div>
                  </div>
                  <p>{reviews}</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default ProductDetails;
