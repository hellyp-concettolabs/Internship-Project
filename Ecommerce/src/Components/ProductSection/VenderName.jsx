import "./vendername.scss"
import PropTypes from 'prop-types';

VenderName.propTypes = {
  venderName: PropTypes.object,
};

function VenderName({venderName}) {

  return (
    <>
      {venderName && 
        <span className="productid">374 sold, by <b className="soldby">{venderName.trading_name}</b></span> 
      }
    </>
  )
}

export default VenderName
