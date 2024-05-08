import "./star.scss";
import star from "../../assets/star.svg";
import coloredstar from "../../assets/coloredstar.svg";
import { Image } from "react-bootstrap";
import PropTypes from 'prop-types';


Star.propTypes = {
    totalstar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  };
function Star({totalstar}) {

  return (
    <>
    <div className="stars d-flex ">
    {[1,2,3,4,5].map((i,index) => (
      <div key={index} className=" ">
        <Image src={i <= totalstar ? coloredstar : star}/>
      </div>
    ))}
    </div>
    </>
  )
}

export default Star
