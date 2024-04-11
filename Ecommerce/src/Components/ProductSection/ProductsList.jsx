import { Col, Form, FormControl, Offcanvas, Row } from "react-bootstrap"
import PropTypes from 'prop-types';
import SingleProductCard from "./SingleProductCard";
import "./productlist.scss"
import {useEffect, useState } from "react";
import FilterSection from "./FilterSection.jsx"
import Pagination from "../PaginationSection/Pagination.jsx"
import{useLocation, useNavigate} from 'react-router'

ProductList.propTypes = {
  productdata: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function ProductList(props) {

    // const filterData = [
    //     {
    //       id: 6,
    //       title: "Discount",
    //       key: "discount",
    //       type: "radio",
    //       data: [
    //         { id: 1, title: "90% off or more", slug: "90" },
    //         { id: 2, title: "80% off or more", slug: "80" },
    //         { id: 3, title: "70% off or more", slug: "70" },
    //         { id: 4, title: "60% off or more", slug: "60" },
    //         { id: 5, title: "50% off or more", slug: "50" },
    //         { id: 6, title: "40% off or more", slug: "40" },
    //         { id: 7, title: "30% off or more", slug: "30" },
    //       ],
    //     },
    //     {
    //       id: 8,
    //       title: "Price",
    //       key: "price_range",
    //       type: "radio",
    //       data: [
    //         { id: 1, title: "Under £10", slug: "0-10" },
    //         { id: 2, title: "£10 - £25", slug: "10-25" },
    //         { id: 3, title: "£25 - £50", slug: "25-50" },
    //         { id: 4, title: "£50 - £100", slug: "50-100" },
    //         { id: 5, title: "Over £100", slug: "100-0" },
    //       ],
    //     },
    //   ];

    //   const priceFilter = [
    //     {
    //         min:'0',
    //         max:'10',
    //         range:'0-10'
    //     },
    //     {
    //         min:'10',
    //         max:'25',
    //         range:'10-25'
    //     },
    //     {
    //         min:'25',
    //         max:'50',
    //         range:'25-50'
    //     },
    //     {
    //         min:'50',
    //         max:'100',
    //         range:'50-100'
    //     },
    //     {
    //         min:'0',
    //         max:'100',
    //         range:'100-0'
    //     },
    //   ]

    const navigate = useNavigate();
    //const{category_id,sub_category_id,collection_id} = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    //const searchPramas = new URLSearchParams(location.search);
    const[selectedValue,setSelectedValue] = useState('');
    const sortData = ['Select...','Lowest Price','Highest Price','Tops Customer Review','Most Recent'];
    const[filteredValue,setFilteredValue] = useState(sortData);

    //OffCanvas for Filter
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleFilter = () => setShow(true);

   //pagination
   const [currentPage, setCurrentPage] = useState(1);
   const recordsPerPage = 18;
   const indexOfLastRecord = currentPage * recordsPerPage;
   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
   const currentRecords = props.productdata.slice(indexOfFirstRecord, indexOfLastRecord);
   const nPages = Math.ceil(props.productdata.length / recordsPerPage);



    //set sortvalue after pageload
    useEffect(() => {
        const storedSelectedValue = localStorage.getItem('selectedValue');
        if (storedSelectedValue) {
            setSelectedValue(storedSelectedValue);
            queryParams.set("sort_by", storedSelectedValue.replace(/\s/g, '_'));
            navigate({ search: queryParams.toString().toLowerCase() });
        }
        return () => {
            localStorage.removeItem('selectedValue'); 
        };
    }, []);

   const handleSort = (data) =>{
    return () =>{
        setSelectedValue(data);
        //store value in local storgae
        localStorage.setItem('selectedValue', data);
    }
   }

   const sortProductData = (data) =>{
    switch (data){
        case 'Lowest Price':
            return props.productdata.sort((a,b) => a.my_sale_price - b.my_sale_price).slice(indexOfFirstRecord, indexOfLastRecord);
        case 'Highest Price':
            return props.productdata.sort((a,b) => b.my_sale_price - a.my_sale_price).slice(indexOfFirstRecord, indexOfLastRecord);
        case 'Tops Customer Review':
            return props.productdata.sort((a,b) => a.total_review - b.total_review).slice(indexOfFirstRecord, indexOfLastRecord);
        case 'Most Recent':
            return props.productdata.sort((a,b) => new Date(b.created_at) - new Date(a.created_at)).slice(indexOfFirstRecord, indexOfLastRecord);
        case 'Select...' :
            return currentRecords;
        default:
            return currentRecords;
    }
   }
 


  return (
    <>

        <Row className=" mb-3 justify-content-between flex-row-reverse flex-lg-row ">
            <Col className="d-none d-lg-flex ">
                <div className="resultheading">Showing 1 - {currentRecords.length} of {props.productdata.length} results</div>
            </Col>

            <Col className=" d-flex justify-content-end d-lg-none col-3">
                <div className=" d-flex justify-content-end align-items-center"
                    onClick={handleFilter}>
                    <i className="bi bi-filter"></i>
                    <span>Filter</span>
                </div>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header className=" d-flex justify-content-end " closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <FilterSection/>
                    </Offcanvas.Body>
                </Offcanvas>

            </Col>

            <Col className=" col-sm-5 col-9 ">
                    <Form>
                        <div className=" align-items-center d-flex rounded-5 border border-secondary p-1">
                            <Form.Label className="sortby col-4">Sort By:</Form.Label>
                            <div className="dropdown d-flex justify-content-center align-items-center col-7">
                                <FormControl type="select" placeholder="Select..." className="border-0 p-0" 
                                    style={{ boxShadow:"none", cursor:"pointer"}} data-bs-toggle="dropdown"
                                    value={selectedValue} 
                                    onChange={(e) => {
                                        const userInput = e.target.value;
                                        setSelectedValue(userInput);
                                        const filteredOptions = sortData.filter((option) =>
                                            option.toLowerCase().includes(userInput.toLowerCase())
                                        );
                                            setFilteredValue(filteredOptions);
                                        }}/>
                                <div className=" dropdown-toggle " data-bs-toggle="dropdown" style={{cursor:"pointer"}}></div>
                                <ul className=" dropdown-menu Dropdownmenu">
                                    {filteredValue.map((data,i) =>
                                      <button key={i} onClick={handleSort(data)}
                                        style={{border:"0", backgroundColor:"white"}}>
                                        <li className=" dropdown-item ">{data}</li>   
                                      </button>                                
                                    )}
                                </ul>
                            </div>
                        </div>
                    </Form>
            </Col>
        </Row>

        <Row>
            {sortProductData(selectedValue)
            .map((d) => (
                <div key={d.id} className="singleproductcard">
                    <SingleProductCard d={d} key={d.id}/>
                </div>
            ))}     
        </Row>  
        
        <Row>
            <Col>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
            </Col>
        </Row> 
    </>
  )
}

export default ProductList;
