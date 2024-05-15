import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import PropTypes from 'prop-types';

NoProduct.propTypes = {
    heading: PropTypes.string,
    desc: PropTypes.string,
};

function NoProduct({heading,desc}) {

    const navigate = useNavigate();
    
  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center ">
        <h4>{heading}</h4>
        <span>{desc}</span>   
        <Button variant="primary" className=" rounded-5 mt-3"
            onClick={() => {navigate('/')}}>
            Return to shop
        </Button> 
      </div>
    </>
  )
}

export default NoProduct
