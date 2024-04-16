import PropTypes from 'prop-types';

SingleProductSize.propTypes = {
  productSize: PropTypes.arrayOf(PropTypes.object),
};
function SingleProductSize({productSize}) {
  return (
    <>
      {productSize &&
        <>
          <div className="sizecontainer">Size:
              {productSize.map((d)=>(
                  <div key={d.variation_id} className='sizediv rounded-4 '>
                      {d.variation_name}
                  </div>
              ))}
          </div>
          <div className=" mt-2 sizeguide">Size Guide</div> 
        </>
      }
    </>
  )
}

export default SingleProductSize
