import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import PropTypes from 'prop-types';

NoProduct.propTypes = {
    heading: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes
};
function NoProduct({heading,desc,image}) {
    const navigate = useNavigate();
  return (
    <>
      <div className=" d-flex flex-column justify-content-center align-items-center ">
      <image href={image}/>
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
