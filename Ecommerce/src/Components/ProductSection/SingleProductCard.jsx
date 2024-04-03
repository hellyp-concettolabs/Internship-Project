import { Image } from "react-bootstrap"
import PropTypes from 'prop-types';
import Star from "../ProductCard/Star.jsx"
import "./singleproductcard.scss"
import { Link } from "react-router-dom";

SingleProductCard.propTypes = {
    d: PropTypes.object.isRequired,
  };
function SingleProductCard(props) {
  return (
    <Link to="/singleproduct" className=" text-decoration-none " style={{color:"black"}}>
        <div className=" border rounded-4 SProductCard">
            <div>
                <Image src={props.d.product_images[0].product_image_url} className="SProductCardimg img-fluid" />
                <span className="sdiscount1 d-flex d-md-none ">-{props.d.discount_percentage}%</span>
            </div>
            <div className="sdetailsection p-2 p-lg-3 ">
                <div className="scardtitle"><p className="stitletext m-0 ">{props.d.name}</p></div>
                <div className="sstars d-flex justify-content-start "><Star/></div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div className=" d-flex justify-content-between align-items-center gap-2 ">
                        <span className="sdisprice"><sup>$</sup>{props.d.my_sale_price}</span>
                        <span className="sactualprice text-decoration-line-through ">${props.d.main_rrp}</span>
                    </div>
                    <div>
                        <span className="sdiscount d-none d-md-flex ">-{props.d.discount_percentage}%</span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default SingleProductCard
