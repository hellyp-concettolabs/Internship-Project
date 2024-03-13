import ProgressBar from 'react-bootstrap/ProgressBar';

function SingleProductProgressbar() {
  return (
    <>
        {[5, 4, 3, 2, 1].map((i) => (
        <div key={i} className='progressbarcontainer mb-3'>
            <div className='starnum'>{i}</div>
            <div className='starreview'><i className="bi bi-star-fill"></i></div>
            <div className=' w-100 '>
                <ProgressBar variant="success" now={0} className='pb'/>
            </div>
            <div className='reviewcout'>0</div>
        </div>
        ))}
    </>
  )
}

export default SingleProductProgressbar
