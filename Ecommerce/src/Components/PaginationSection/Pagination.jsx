import './pagination.scss'
import PropTypes from 'prop-types';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

    const goToNextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav>
            <ul className='pagination justify-content-center '>
                <li className="page-item">
                    <a className="page-link prev" 
                        onClick={goToPrevPage} 
                        href='#'>
                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page_no_container page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link page_no' 
                            href='#'>
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item " disabled >
                    <a className="page-link next" 
                        onClick={goToNextPage}
                        href='#'>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}
Pagination.propTypes = {
    nPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired
};
export default Pagination