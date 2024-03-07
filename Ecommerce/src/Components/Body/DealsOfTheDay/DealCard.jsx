import { Image } from "react-bootstrap"
import PropTypes from 'prop-types';

DealCard.propTypes = {
    d: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
function DealCard(props) {
  return (
    <div>
        <div key={props.d.title} className="px-2 ">
            <div className="border rounded-5">
            <div>
              <Image src={props.d.img} className=" img-fluid w-100"/>
            </div>
            <div>
              <span className="dealdiscount px-2 ">{props.d.discount}</span>
              <p className="dealtitle fw-bold px-2 ">{props.d.title}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DealCard
