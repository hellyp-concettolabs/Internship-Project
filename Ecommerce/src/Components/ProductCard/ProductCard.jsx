import { Image } from "react-bootstrap"
import PropTypes from 'prop-types';
import Star from "./Star";
import "./productcard.scss"

ProductCard.propTypes = {
    d: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
function ProductCard(props) {
  return (
        <div className=" border rounded-4 ProductCard">
            <div>
                <Image src={props.d.img} className=" img-fluid w-100 "/>
                <span className="discount1 d-flex d-md-none ">-{props.d.discount}</span>
            </div>
            <div className="detailsection p-2 p-lg-3 ">
                <div className="cardtitle"><p className="titletext m-0 ">{props.d.title}</p></div>
                <div className="stars d-flex justify-content-start "><Star/></div>
                <div className=" d-flex justify-content-between align-items-center ">
                    <div className=" d-flex justify-content-between align-items-center gap-3 ">
                        <span className="disprice"><sup>$</sup>{props.d.price}</span>
                        <span className="actualprice text-decoration-line-through ">${props.d.actualprice}</span>
                    </div>
                    <div>
                        <span className="discount d-none d-md-flex ">-{props.d.discount}</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductCard
