import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

SingleProductColor.propTypes = {
  productColor: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.number
};
function SingleProductColor({productColor,size}) {
  const navigate = useNavigate();
  const handleColorVariation = (variation_id) =>{
    const params = new URLSearchParams(location.search)
    if(params.has('size')){
      navigate(`?color=${variation_id}&size=${size}`)
    }else{
      navigate(`?color=${variation_id}`)
    }
  }
  return (
    <>
      {productColor &&
        <>
          <div className='colorheading'>Color: {productColor.variation_name}</div>
          <div className=" d-flex gap-2 mt-2 "> 
              {productColor.map((d) => (
                <button key={d.variation_id}
                  onClick={() => handleColorVariation(d.variation_id)}
                  style={{border:'none' , background:'transparent'}}>
                  <div key={d.variation_id} 
                    className="colormenu rounded-2" style={{backgroundColor:`${(d.variation_value) ? (d.variation_value):(d.variation_name).replace(/\s+/g,'')}`}}>
                    </div>
                </button>
              ))}
          </div>
        </>
      }
    </>
  )
}

export default SingleProductColor
