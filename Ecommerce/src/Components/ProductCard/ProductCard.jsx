import { Image } from "react-bootstrap"
import PropTypes from 'prop-types';
import Star from "./Star";
import "./productcard.scss"

ProductCard.propTypes = {
    d: PropTypes.object.isRequired,
  };
function ProductCard(props) {
  return (
        <div className=" border rounded-4 ProductCard">
            <div>
                {props.d.product_images && props.d.product_images.length > 0 &&(
                <Image src={props.d.product_images[0].product_image_url} className="productimg img-fluid"/>
                )}
                <span className="discount1 d-flex d-md-none ">-{props.d.discount_percentage}%</span>
            </div>
            <div className="detailsection ">
                <div className="cardtitle"><p className="titletext m-0 ">{props.d.name}</p></div>
                <div className="stars d-flex justify-content-start "style={{color:"black"}}><Star/></div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div className=" d-flex justify-content-between align-items-center gap-2 ">
                        <span className="disprice"><sup>$</sup>{props.d.my_sale_price}</span>
                        <span className="actualprice text-decoration-line-through ">${props.d.main_rrp}</span>
                    </div>
                    <div>
                        <span className="discount d-none d-md-flex ">{Math.floor(props.d.discount_percentage)}%</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductCard
