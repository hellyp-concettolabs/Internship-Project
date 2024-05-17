import { Image } from "react-bootstrap"
import PropTypes from 'prop-types';
import "./dealcard.scss"

DealCard.propTypes = {
    d: PropTypes.object,
  };
function DealCard(props) {
  return (
      <div key={props.d.title} className="dealcards px-2 ">
          <div className="submaindiv border w-100 ">
          <div className=" p-0 m-0 w-100 ">
            <Image src={props.d.img} className=" img-fluid w-100 rounded-top-4 "/>
          </div>
          <div>
            <div className="dealdiscount px-2 ">{props.d.discount}</div>
            <p className="dealtitle  px-2 ">{props.d.title}</p>
          </div>
          </div>
      </div>
  )
}

export default DealCard
