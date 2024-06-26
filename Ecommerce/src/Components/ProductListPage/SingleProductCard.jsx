import { Image } from "react-bootstrap"
import PropTypes from 'prop-types';
import Star from "../ProductCard/Star.jsx"
import "./singleproductcard.scss"

SingleProductCard.propTypes = {
    d: PropTypes.object.isRequired,
  };

function SingleProductCard(props) {
    
  return (
    <>
        <div className=" border rounded-4 SProductCard">
            <div className=" d-flex flex-column align-items-center justify-content-center ">
                <Image src={props.d.product_images[0].product_image_url} className="SProductCardimg img-fluid" />
                <span className="sdiscount1 d-flex d-md-none ">{Math.floor(props.d.discount_percentage)}%</span>
            </div>
            <div className="sdetailsection p-2 p-lg-3 ">
                <div className="scardtitle"><p className="stitletext m-0 ">{props.d.name}</p></div>
                <div className="sstars d-flex justify-content-start "><Star totalstar={props.d.avg_rating}/></div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div className=" d-flex justify-content-between align-items-center gap-2 ">
                        <span className="sdisprice"><sup>$</sup>{props.d.sale_price}</span>
                        <span className="sactualprice text-decoration-line-through ">${Math.floor(props.d.main_rrp)}</span>
                    </div>
                    <div>
                        <span className="sdiscount d-none d-md-flex ">{Math.floor(props.d.discount_percentage)}%</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleProductCard
