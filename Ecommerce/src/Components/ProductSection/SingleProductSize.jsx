import PropTypes from 'prop-types';

SingleProductSize.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
function SingleProductSize(props) {
  return (
    <>
        <div className="sizecontainer">Size:
            {props.data.size.map((d)=>(
                <div key={d} className='sizediv rounded-4 '>
                    {d}
                </div>
            ))}
        </div>
        <div className=" mt-2 sizeguide">Size Guide</div> 
    </>
  )
}

export default SingleProductSize
