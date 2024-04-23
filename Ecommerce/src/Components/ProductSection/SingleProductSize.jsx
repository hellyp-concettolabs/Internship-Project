import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

SingleProductSize.propTypes = {
  productSize: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.number,
  sizeVariation: PropTypes.number,
};
function SingleProductSize({productSize,color,sizeVariation}) {
  const navigate = useNavigate();
  const handleSizeVariation = (variation_id) =>{
    const params = new URLSearchParams(location.search)
    if(params.has('color')){
      navigate(`?color=${color}&size=${variation_id}`)
    }else{
      navigate(`?size=${variation_id}`)
    }
  }
  return (
    <>
      {productSize &&
        <>
          <div className="sizecontainer">Size:
              {productSize.map((d)=>(
                <button key={d.variation_id}
                onClick={() => handleSizeVariation(d.variation_id)}
                  style={{background:'transparent',border: sizeVariation === d.variation_id ? '2px solid black' : 'none' , 
                  borderRadius: sizeVariation === d.variation_id ? '22px' : 'none'}}>
                  <div key={d.variation_id} className='sizediv px-3 py-2 rounded-4 '>
                      {d.variation_name}
                  </div>
                </button>
              ))}
          </div>
          <div className=" mt-2 sizeguide">Size Guide</div> 
        </>
      }
    </>
  )
}

export default SingleProductSize
