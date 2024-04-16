import PropTypes from 'prop-types';

SingleProductTitle.propTypes = {
  name: PropTypes.string,
};
  function SingleProductTitle({name}) {
  return (
    <>
        <div className="col-sm-11 col-10">
            <span>{name}</span>
        </div>
    </>
  )
}

export default SingleProductTitle
