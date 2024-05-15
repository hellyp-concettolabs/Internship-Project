import PropTypes from 'prop-types';

Share.propTypes = {
  shareURL: PropTypes.string,
  };
function Share({shareURL}) {
  return (
    <>
        <div className=" col-sm-1 col-2 align-items-center">
            <button href={shareURL} className=" bg-transparent border-0 ">
                <i className="bi bi-box-arrow-up-right img-fluid "></i>
            </button>
        </div> 
    </>
  )
}

export default Share
