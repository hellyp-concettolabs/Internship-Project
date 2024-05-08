import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';

SingleProductProgressbar.propTypes = {
    ratingCount: PropTypes.object,
  };
function SingleProductProgressbar({ratingCount}) {

    // console.log(ratingCount.three_rating)
  return (
    <>
    {ratingCount &&
      <div>
        <div key={5} className='progressbarcontainer mb-3'>
            <div className='starnum'>{5}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={ratingCount.five_rating} className='pb'/>
            </div>
            <div className='reviewcout'>{ratingCount.five_rating}</div>
        </div>
        <div key={4} className='progressbarcontainer mb-3'>
            <div className='starnum'>{4}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={ratingCount.four_rating} className='pb'/>
            </div>
            <div className='reviewcout'>{ratingCount.four_rating}</div>
        </div>
        <div key={3} className='progressbarcontainer mb-3'>
            <div className='starnum'>{3}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={ratingCount.three_rating} className='pb'/>
            </div>
            <div className='reviewcout'>{ratingCount.three_rating}</div>
        </div>
        <div key={2} className='progressbarcontainer mb-3'>
            <div className='starnum'>{2}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={ratingCount.two_rating} className='pb'/>
            </div>
            <div className='reviewcout'>{ratingCount.two_rating}</div>
        </div>
        <div key={1} className='progressbarcontainer mb-3'>
            <div className='starnum'>{1}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={ratingCount.one_rating} className='pb'/>
            </div>
            <div className='reviewcout'>{ratingCount.one_rating}</div>
        </div>
      </div>
    }
    </>
  )
}

export default SingleProductProgressbar
