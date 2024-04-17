import PropTypes from 'prop-types';

SingleProductCondition.propTypes = {
    productCondition: PropTypes.object,
};
function SingleProductCondition({productCondition}) {

  return (
    <>
    {productCondition && productCondition.title && (
        <div className=' d-flex gap-1 '>
            <span className="quantityheading">Condition:</span>
            <span className=' fw-bold quantityheading text-black  '>{productCondition.title}</span>
        </div>
    )}
    </>
  )
}

export default SingleProductCondition
