import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

SingleProductColor.propTypes = {
  productColor: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.number,
  colorVariation: PropTypes.number,
};
function SingleProductColor({productColor,size,colorVariation}) {
  const navigate = useNavigate();
  const handleColorVariation = (variation_id) =>{
    const params = new URLSearchParams(location.search)
    if(params.has('size')){
      navigate(`?color=${variation_id}&size=${size}`)
    }else{
      navigate(`?color=${variation_id}`)
    }
  }
  //console.log(colorVariation)
  let colorName = "";
  if(productColor){
    colorName = productColor.find((item) => item.variation_id === colorVariation);
  }
  return (
    <>
      {productColor &&
        <>
          <div className='colorheading'>Color: {colorName ? colorName.variation_name : " "}</div>
          <div className=" d-flex gap-2 mt-2 "> 
              {productColor.map((d) => (
                <button key={d.variation_id}
                  onClick={() => handleColorVariation(d.variation_id)}
                  className='colorbtn'
                  style={{border: colorVariation === d.variation_id ? '2px solid black' : 'none' , 
                  borderRadius: colorVariation === d.variation_id ? '10px' : 'none',
                  background:'transparent'}}>
                  <div key={d.variation_id} 
                    className="colormenu rounded-2 my-1 " style={{backgroundColor:`${(d.variation_value) ? (d.variation_value):(d.variation_name).replace(/\s+/g,'')}`}}>
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
