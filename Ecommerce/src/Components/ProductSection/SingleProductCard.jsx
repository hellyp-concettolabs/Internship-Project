import { Image } from "react-bootstrap"
import PropTypes from 'prop-types';
import Star from "../ProductCard/Star.jsx"
import "./singleproductcard.scss"

SingleProductCard.propTypes = {
    d: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
function SingleProductCard(props) {
  return (
        <div className=" border rounded-4 SProductCard">
            <div>
                <Image src={props.d.img} className=" img-fluid w-100 "/>
                <span className="sdiscount1 d-flex d-md-none ">-{props.d.discount}</span>
            </div>
            <div className="sdetailsection p-2 p-lg-3 ">
                <div className="scardtitle"><p className="stitletext m-0 ">{props.d.title}</p></div>
                <div className="sstars d-flex justify-content-start "><Star/></div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div className=" d-flex justify-content-between align-items-center gap-2 ">
                        <span className="sdisprice"><sup>$</sup>{props.d.price}</span>
                        <span className="sactualprice text-decoration-line-through ">${props.d.actualprice}</span>
                    </div>
                    <div>
                        <span className="sdiscount d-none d-md-flex ">-{props.d.discount}</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SingleProductCard
