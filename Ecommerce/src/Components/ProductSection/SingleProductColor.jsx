import PropTypes from 'prop-types';

SingleProductColor.propTypes = {
  productColor: PropTypes.arrayOf(PropTypes.object),
};
function SingleProductColor({productColor}) {
  return (
    <>
      {productColor &&
        <>
          <div className='colorheading'>Color: {productColor.variation_name}</div>
          <div className=" d-flex gap-2 mt-2 "> 
              {productColor.map((d) => (
                  <div key={d.variation_id} className="colormenu rounded-2" style={{backgroundColor:`${d.variation_name}`}}></div>
              ))}
          </div>
        </>
      }
    </>
  )
}

export default SingleProductColor
