import React from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../firebase/useGetData";

const AllProducts = () => {
  const {data:productsData} = useGetData("products");
  console.log(productsData)
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>
                    <button className="btn btn-danger">Delete</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="" alt="" />
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
