import PropTypes from 'prop-types';

SingleProductColor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
function SingleProductColor(props) {
  return (
    <>
        <div className='colorheading'>Color: Orange</div>
        <div className=" d-flex gap-2 mt-2 "> 
            {props.data.color.map((d) => (
                <div key={d} className="colormenu rounded-2" style={{backgroundColor:`${d}`}}></div>
            ))}
        </div>
    </>
  )
}

export default SingleProductColor
