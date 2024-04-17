import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';

SingleProductProgressbar.propTypes = {
    ratingCount: PropTypes.object,
  };
function SingleProductProgressbar({ratingCount}) {

  return (
    <>
    {ratingCount &&
      <div>
        <div key={5} className='progressbarcontainer mb-3'>
            <div className='starnum'>{5}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={ratingCount.five_star} className='pb'/>
            </div>
            <div className='reviewcout'>{ratingCount.five_star}</div>
        </div>
        <div key={4} className='progressbarcontainer mb-3'>
            <div className='starnum'>{4}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={ratingCount.four_star} className='pb'/>
            </div>
            <div className='reviewcout'>{ratingCount.four_star}</div>
        </div>
        <div key={3} className='progressbarcontainer mb-3'>
            <div className='starnum'>{3}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={ratingCount.three_star} className='pb'/>
            </div>
            <div className='reviewcout'>{ratingCount.three_star}</div>
        </div>
        <div key={2} className='progressbarcontainer mb-3'>
            <div className='starnum'>{2}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={ratingCount.two_star} className='pb'/>
            </div>
            <div className='reviewcout'>{ratingCount.two_star}</div>
        </div>
        <div key={1} className='progressbarcontainer mb-3'>
            <div className='starnum'>{1}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={ratingCount.one_star} className='pb'/>
            </div>
            <div className='reviewcout'>{ratingCount.one_star}</div>
        </div>
      </div>
    }
    </>
  )
}

export default SingleProductProgressbar
