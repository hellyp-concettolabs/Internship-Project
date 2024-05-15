import "./wishlistbtn.scss"
import PropTypes from 'prop-types';
import axios from "axios";
import { useDispatch } from "react-redux";
import { wishListProductCount } from "../WishListProductCount/WishListProductCount";
import { useState } from "react";
import { Domain_Base_Url } from "../../app/DomainBaseUrl/BaseUrl";

WishListBtn.propTypes = {
    isWishList: PropTypes.bool,
    d: PropTypes.object,
    variationId:PropTypes.number,
    id:PropTypes.number,
    handleWishListChange: PropTypes.func
};

function WishListBtn({isWishList,variationId,id,handleWishListChange}) {

    const dispatch = useDispatch();
    const wishList = (isWishList ?'delete':'add');
    const[wishListCount,setWishListCount] = useState();

    const wishlistQuantity = async () => {
        if(localStorage.getItem("token") !== null){
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        axios.get(`${Domain_Base_Url}/wishlist-count`)
          .then(response => {
                setWishListCount(response.data.result.wishlistcount);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }

    const handleWishlist = async() =>{
        if(localStorage.getItem("token") !== null){
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        await axios.post(`${Domain_Base_Url}/manage-wishlist`,{
            product_id : id,
            product_variation_id : variationId,
            action : wishList
        })
        .then(() =>{
            // console.log(response);
            handleWishListChange(id, !isWishList);
            wishlistQuantity();
            dispatch(wishListProductCount(wishListCount));
        })
        .catch(error =>{
            console.error('Error making Post request:', error);
          })
        }
    }
    // console.log(wishListCount)
    // console.log(wishList)
  return (
    <>
        <button 
            onClick={() => handleWishlist()}
            className={isWishList ? 'wishlistactive' :'wishlist'}>
            <span className=" d-none d-md-flex "><i className="bi bi-heart"></i></span>
        </button>
    </>
  )
}

export default WishListBtn
