import { useContext, useState } from "react";
import { Button, Spinner } from "react-bootstrap"
import { UserContext } from "../UserData/StoreUserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signuppop from "../Navbar/Signuppop";
import axios from "axios";
import PropTypes from 'prop-types';
import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartProductCount } from "../CartProductCount/CartProductCount";

SingleProductCartBtn.propTypes = {
    productData: PropTypes.object,
    productQuantity: PropTypes.number,
    addToCart: PropTypes.boolean,
    setAddToCart: PropTypes.function,
};
function SingleProductCartBtn({productData, productQuantity,setAddToCart}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  //console.log(productData);
  //for signup popup
  const [show, setShow] = useState(false);

  const[loading,setLoading] = useState(false);

  const handleAddtocart = async() =>{
    if(userData.name !== ""){
      setLoading(true);
      if(productData && productData.size && productData.size.length === 0){
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        await axios.post(` https://bargainfox-dev.concettoprojects.com/api/add-to-cart`,{
          product_id: productData.id,
          product_variation_id: productData.product_variation_id,
          quantity: productQuantity,
        }).then(response =>{
          console.log(response.data.result);
          //setCartProductData(response.data.result);
          if(response.status === 200){
            dispatch(cartProductCount(response.data.result.quantity));
            setAddToCart(true);
            toast.success(`Product added to cart`);
            setLoading(false);
          }
        }).catch(error => {
          console.log(error);
          setLoading(false);
        })
      }
      else if(productData && productData.size && productData.size.length > 0){
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        await axios.post(` https://bargainfox-dev.concettoprojects.com/api/add-to-cart`,{
          product_id: productData.id,
          product_variation_id: productData.product_variation_id,
          quantity: productQuantity,
        }).then(response =>{
          console.log(response.data.result);
          //setCartProductData(response.data.result);
          if(response.status === 200){
            dispatch(cartProductCount(response.data.result.quantity));
            setAddToCart(true);
            toast.success(`Product added to cart`);
            setLoading(false);
          }
        })
      }
    }else{
      setShow(true)

    }
  }
  const handleGoToCart = () => {
    navigate('/cart');
  }

  return (
    <div className="buybtncontainer ">
        <div className=" w-100 ">
          { productData.is_added_cart ? 
            <Button className="cartbtn rounded-5"
              onClick={handleGoToCart}>
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ):
              'Go To Cart'}
            </Button>
            : <Button className="cartbtn rounded-5"
                onClick={handleAddtocart}>
                Add to cart
              </Button>}

            <ToastContainer position="top-right"/>
            <Signuppop show={show} setShow={setShow} onHide={() => setShow(false)} />
        </div>
        <div className=" w-100 ">
            <Button className="buybtn rounded-5">Buy now</Button>
        </div>
    </div>
  )
}

export default SingleProductCartBtn
