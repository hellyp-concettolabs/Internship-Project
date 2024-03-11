import { Image } from "react-bootstrap"
import PropTypes from 'prop-types';
import "./trendingcard.scss"

TrendingCard.propTypes = {
    d: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
function TrendingCard(props) {
  return (
    <div className="trendcard text-center ">
        <div className="trendsec1 d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded-circle">
            <Image src={props.d.img} className="img-fluid " />
            <span className="trenddiscount rounded-5">{props.d.discount}</span>
        </div>
        <h6 className="trendtitle">{props.d.title}</h6>
  </div>
  )
}
export default TrendingCard
