import { Image} from "react-bootstrap"
import SingleProductQuantity from "../ProductSection/SingleProductQuantity.jsx"
import SingleProductTitle from "../ProductSection/SingleProductTitle.jsx"
import PropTypes from 'prop-types';
import axios from "axios";
import { useContext} from "react";
import { UserContext } from "../UserData/StoreUserContext.jsx";
// import { useState } from "react";

CartProductCard.propTypes = {
    cartData: PropTypes.array,
    setDeleteItem: PropTypes.function,
};
function CartProductCard({cartData,setDeleteItem}) {
console.log(cartData)
    const { userData } = useContext(UserContext);
    //const[cartProductData,setCartProductData] = useState({});
    //const [productQuantity, setproductQuantity] = useState();
    const handleItemDelete = async(cartProductID) =>{
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
            await axios.post(' https://bargainfox-dev.concettoprojects.com/api/remove-from-cart',{
                cart_product_id: [cartProductID],
            })
            .then((response) =>{
                console.log(response);
                setDeleteItem(true);
                //setCartProductData(response.data.result);
            })
            .catch(error =>{
                console.error('Error making Post request:', error);
              })
        }

        
  return (
    <>
      <>
      {cartData && cartData.map((d) => (
        <div key={d.id} className=" py-4 border-bottom d-lg-flex d-block align-items-center">

            <div className=" d-flex align-items-center gap-4">
                {/* <Form.Check checked></Form.Check> */}
                <div className="  col-sm-2 col-3" >
                    <Image src={d.product_info.product_images[0] && d.product_info.product_images[0].product_image_url} className=" img-fluid rounded-4"/>
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
                                    d.product_info.sale_price : d.product_info.product_variation_detail[0].rrp}</div>
                                <div className=" small text-primary">{Math.floor(d.product_variation_id === null ?  
                                    d.product_info.sale_price : d.product_info.product_variation_detail[0].percentage_discount)}%</div>
                            </div>
                        </div>
                    <div className=" d-none d-md-flex ">
                        <div className=" d-flex align-items-center gap-3">
                            <SingleProductQuantity productData={d.product_info} productQuantity={d.quantity} />
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
                        {d.product_info.product_condition && 
                         d.product_variation_id === null ?
                         d.product_info.product_condition.title :
                         d.product_info.product_variation_detail[0].product_condition.title 
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
