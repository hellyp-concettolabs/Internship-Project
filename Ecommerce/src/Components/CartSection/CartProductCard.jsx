import { Image} from "react-bootstrap"
import SingleProductQuantity from "../ProductSection/SingleProductQuantity.jsx"
import SingleProductTitle from "../ProductSection/SingleProductTitle.jsx"
import PropTypes from 'prop-types';
import axios from "axios";
import { useEffect, useState} from "react";
// import { useState } from "react";

CartProductCard.propTypes = {
    cartData: PropTypes.array,
    setDeleteItem: PropTypes.func,
    isQuantityChange: PropTypes.func,
};
function CartProductCard({cartData,setDeleteItem,isQuantityChange}) {
    // console.log(cartData)
    const [productQuantity, setproductQuantity] = useState([]);

    
    const handleItemDelete = async(cartProductID) =>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        await axios.post(' https://bargainfox-dev.concettoprojects.com/api/remove-from-cart',{
            cart_product_id: [cartProductID],
        })
        .then(() =>{
            // console.log(response);
            setDeleteItem(true);
        })
        .catch(error =>{
            console.error('Error making Post request:', error);
          })
    }

    const updateItemQuantity = async (index, id, variationId) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        await axios.post(' https://bargainfox-dev.concettoprojects.com/api/add-to-cart',
            {
              quantity: index,
              product_id: id,
              product_variation_id: variationId,
            }
        ).then((response) => {
            if(response.status === 200){
            isQuantityChange(true);
            }
        }).catch(error => {
          console.log("Some error in cart Item quantity", error);
        })
    };
        
    const updateProductQuantity = (index, newQuantity) => {
      const updatedQuantity = [...productQuantity];
      updatedQuantity[index] = newQuantity;
      setproductQuantity(updatedQuantity);
    };

    const handlesub = (index, id, variationId) =>{
        if (productQuantity[index] > 1) {
            updateProductQuantity(index, productQuantity[index] - 1);
            updateItemQuantity(productQuantity[index] - 1, id, variationId);
          }
    }
        
    const handleadd = (index, id, variation_id) =>{
        if(productQuantity[index] < (variation_id === null ? cartData[index].product_info.stock 
            : cartData[index].product_info.product_variation_detail[0].stock)){
        updateProductQuantity(index, productQuantity[index] + 1);
        updateItemQuantity(productQuantity[index] + 1, id, variation_id);
            }
    }
    useEffect(() => {
    //   for(let i = 0 ; i < cartData.length ; i++ ){
    //     setproductQuantity(cartData[i].quantity);
    //   }
    if (cartData) {
        const initialQuantities = cartData.map(item => item.quantity);
        setproductQuantity(initialQuantities);
    }
    }, [cartData])
    
    //console.log(productQuantity)
  return (
    <>
      <>
      {cartData && cartData.map((d,i) => (
        <div key={d.id} className=" py-4 border-bottom d-lg-flex d-block align-items-center">

            <div className=" d-flex align-items-center gap-4">
                {/* <Form.Check checked></Form.Check> */}
                <div className="  col-sm-2 col-3 d-flex align-items-center justify-content-center " >
                    <Image src={d.product_info.product_images[0] && d.product_info.product_images[0].product_image_url} className=" img-fluid rounded-4"
                        style={{height:"100px"}}/>
                </div>
                <div className=" col-lg-10 d-flex flex-column gap-2">
                        <div className="cartproducttitle">
                                <SingleProductTitle name={d.product_info.name}/>
                        </div>
                        <div>
                            <div className=" d-flex flex-row align-items-center gap-2 ">
                                <div className=" fw-bold fs-6"><sup>$</sup>{d.product_variation_id === null ?  
                                    d.product_info.sale_price : d.product_info.product_variation_detail[0].sale_price}</div>
                                <div className=" small text-decoration-line-through">${d.product_variation_id === null ?  
                                    d.product_info.main_rrp : d.product_info.product_variation_detail[0].rrp}</div>
                                <div className=" small text-primary">{Math.floor(d.product_variation_id === null ?  
                                    d.product_info.percentage_discount : d.product_info.product_variation_detail[0].percentage_discount)}%</div>
                            </div>
                        </div>
                    <div className=" d-none d-md-flex ">
                        <div className=" d-flex align-items-center gap-3">
                            {/* <SingleProductQuantity productData={d.product_info} productQuantity={d.quantity} /> */}
                            <div className="quantityheading">
                                Quantity:
                                <div className="quantitycontainer d-flex justify-content-center align-items-center ">
                                    <button className="minusoperator rounded-start-2 rounded-end-0" onClick={() =>handlesub(
                                        i, d.product_id,d.product_variation_id
                                    )}>-</button>
                                    <div className="counting">{productQuantity[i]}</div>
                                    <button className="plusoperator rounded-start-0 rounded-end-2" onClick={() =>handleadd(
                                        i,d.product_id,d.product_variation_id
                                    )}>+</button>
                                </div>
                            </div>
                            <button className=" bg-transparent border-0 "
                                onClick={() => handleItemDelete(d.id)}>
                            <div className="fw-bold px-2 " style={{borderLeft:"2px solid #A4A4B8"}}>
                                Delete
                            </div>
                            </button>
                            {/* <div className="fw-bold px-2 " style={{borderLeft:"2px solid #A4A4B8"}}>Share</div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" d-block d-md-none my-3">
                        <div className=" d-flex align-items-center gap-md-3 gap-1 ">
                        <SingleProductQuantity productQuantity={d.quantity}/>
                            <button className=" bg-transparent border-0 "
                                onClick={() => handleItemDelete(d.id)}>
                            <div className="fw-bold px-2 " style={{borderLeft:"2px solid #A4A4B8"}}>
                                Delete
                            </div>
                            </button>
                            {/* <div className="fw-bold px-2 " style={{borderLeft:"2px solid #A4A4B8"}}>Share</div> */}
                        </div>
                    </div>
            <div className=" col-lg-4 col-12 px-2 ">
                <div className="d-flex flex-lg-column gap-3 text-md-end mt-lg-0 mt-2 ">
                    <span className=" small ">Condition: 
                        {d.product_info && d.product_info.product_condition && 
                         d.product_variation_id === null ?
                         d.product_info.product_condition.title :
                         d.product_info && d.product_info.product_variation_detail.length === 0 ? (d.product_info.product_condition === null ? ("Brand New") : (d.product_info.product_condition.title)) :(d.product_info.product_variation_detail[0].product_condition.title) 
                        }</span>
                    <span className=" small ">{d.product_info.total_review} sold, 
                        by {d.product_info.vendor_info.first_name} {d.product_info.vendor_info.last_name}, 
                        {d.product_variation_id === null ? d.product_info.stock 
                            : d.product_info.product_variation_detail[0].stock} left</span>
                </div>
            </div>
        </div>
        ))}
      </>
    </>
  )
}

export default CartProductCard
