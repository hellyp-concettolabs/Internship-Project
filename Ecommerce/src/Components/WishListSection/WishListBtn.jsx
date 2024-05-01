import "../WishListSection/wishlistbtn.scss"
import PropTypes from 'prop-types';
import axios from "axios";
import { useDispatch } from "react-redux";
import { wishListProductCount } from "../WishListProductCount/WishListProductCount";
import { useState } from "react";

WishListBtn.propTypes = {
    isWishList: PropTypes.boolean,
    d: PropTypes.object,
    variationId:PropTypes.number,
    id:PropTypes.number,
    handleWishListChange: PropTypes.function
};

function WishListBtn({isWishList,variationId,id,handleWishListChange}) {

    const dispatch = useDispatch();
    const wishList = (isWishList ?'delete':'add');
    const[wishListCount,setWishListCount] = useState();

    const wishlistQuantity = async () => {
        if(localStorage.getItem("token") !== null){
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        axios.get(' https://bargainfox-dev.concettoprojects.com/api/wishlist-count')
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
        await axios.post(' https://bargainfox-dev.concettoprojects.com/api/manage-wishlist',{
            product_id : id,
            product_variation_id : variationId,
            action : wishList
        })
        .then((response) =>{
            console.log(response);
            handleWishListChange(id, !isWishList);
            wishlistQuantity();
            dispatch(wishListProductCount(wishListCount));
        })
        .catch(error =>{
            console.error('Error making Post request:', error);
          })
        }
    }
    console.log(wishListCount)
    console.log(wishList)
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
