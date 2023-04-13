import React from "react";
import { toast } from "react-toastify";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../firebase/useGetData";
import { db } from "../firebase/config";

import { doc, deleteDoc } from "firebase/firestore";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");
  console.log(productsData);

  const deleteProduct = async (id) => {
await deleteDoc(doc(db, "products", id ))
toast.success("Deleted successfully!")
  }
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
                {loading ? (
                  <h3 className="py-5 text-center fw-bold">Loading...</h3>
                ) : (
                  productsData.map((product, id) => (
                    <tr key={id}>
                      <td>
                        <img src={product.imgUrl} alt="" />
                      </td>
                      <td>{product.title}</td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>
                        <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
