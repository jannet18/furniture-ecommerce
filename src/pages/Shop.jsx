import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import MainSection from "../components/UI/MainSection";
import "../pages/sytles/Shop.css";
import { Container, Row, Col } from "reactstrap";
import products from ".././assets/data/products";
import ProductsLists from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "chair") {
      const filterProducts = products?.filter(
        (item) => item?.category === "chair"
      );

      setProductsData(filterProducts);
    }

    if (filterValue === "sofa") {
      const filterProducts = products?.filter(
        (item) => item?.category === "sofa"
      );

      setProductsData(filterProducts);
    }

    if (filterValue === "chaise") {
      const filterProducts = products?.filter(
        (item) => item?.category === "chaise"
      );

      setProductsData(filterProducts);
    }

    if (filterValue === "outdoor") {
      const filterProducts = products?.filter(
        (item) => item?.category === "outdoor"
      );

      setProductsData(filterProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products?.filter((item) =>
      item?.productName
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };
  return (
    <>
      <Helmet title="Products">
        <MainSection title="Products" />

        <section>
          <Container>
            <Row>
              <Col lg="3" md="3">
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option>Filter By Category</option>
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="chaise">Chaise</option>
                    <option value="outdoor">Outdoor</option>
                  </select>
                </div>
              </Col>
              <Col lg="3" md="3">
                <div className="filter__widget">
                  <select>
                    <option>Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col lg="6" md="6" className="text-end">
                <div className="search__box">
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                  />
                  <i className="bi bi-search"></i>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="pt-0">
          <Container>
            <Row>
              {productsData?.length === 0 ? (
                <h1 className="text-center fs-4">Not available!</h1>
              ) : (
                <ProductsLists data={productsData} />
              )}
              <Col></Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Shop;
