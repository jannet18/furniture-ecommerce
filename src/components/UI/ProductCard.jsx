import React from "react";
// import productImg from "../../assets/images/couch.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../pages/sytles/productCard.css";
import { Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({item}) => {
  const dispatch = useDispatch();
  // const {id} = useParams();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl
    }))

    toast.success('Item added successfully')

    // alert('Item added')
  }

  return (
    <Col lg="3" md="3" className="mb-2" >
      <div className="product__item ">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item?.imgUrl} alt="/" width={500} />
        </div>
        <div className="p-2 product__info">
        <h3 className="product__name"><Link to={`/shop/${item?.id}`}>{item?.productName}</Link></h3>
        <span>{item?.category}</span>

        </div>
        
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item?.price}</span>
          <motion.span 
          whileTap={{ scale: 1.2 }} 
          // onClick={addToCart}
          >
          <Link to={`/shop/${item?.id}`}><motion.i whileHover={{ scale: 0.8 }} className="bi bi-plus"></motion.i></Link>
            
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
