import './pagination.scss'
import PropTypes from 'prop-types';
import{useLocation, useNavigate} from 'react-router'
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const goToNextPage = () => {
            if(currentPage < nPages) {
                 setCurrentPage(currentPage + 1);
                }
            queryParams.set("page", currentPage + 1);
            navigate({ search: queryParams.toString() });
    }
     const goToPrevPage = () => {
         if(currentPage > 1) {
             setCurrentPage(currentPage - 1);
         }
         queryParams.set("page", currentPage - 1);
        navigate({ search: queryParams.toString() });
    }
    
     return (
         <nav>
             <ul className='pagination justify-content-center '>
    
                 <li className={`page-item ${currentPage === 1 ? 'disabled' : ''} `} style={{backgroundColor:'white'}}>
                 <button className="page-link prev" 
                     onClick={goToPrevPage} >
                     Previous
                 </button>
                 </li> 

                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page_no_container page-item ${currentPage === pgNumber ? 'active' : ''} `} >

                         <button onClick={() => {setCurrentPage(pgNumber)
                                                navigate({
                                                   pathname: '/productlist',
                                                   search: `?page=${pgNumber}`,
                                                 });}}  
                             className='page-link page_no' >
                             {pgNumber}
                         </button>
                     </li>
                 ))}

                     <li className={`page-item ${currentPage === nPages ? 'disabled' : ''}`} style={{backgroundColor:'white'}}>
                         <button className="page-link next" 
                             onClick={goToNextPage}>
                             Next
                         </button>
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
 export default Pagination;
