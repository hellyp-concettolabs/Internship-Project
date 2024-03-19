import PropTypes from 'prop-types';

SingleProductTitle.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
function SingleProductTitle(props) {
  return (
    <>
        <div className="col-sm-11 col-10">
            <span>{props.data.title}</span>
        </div>
    </>
  )
}

export default SingleProductTitle
