import "./vendername.scss"
import PropTypes from 'prop-types';

VenderName.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function VenderName(props) {
  return (
    <>
        <span className="productid">374 sold, by <b className="soldby">{props.data.vender}</b></span> 
    </>
  )
}

export default VenderName
