import { Col, Form, FormControl, Offcanvas, Row } from "react-bootstrap"
import PropTypes from 'prop-types';
import SingleProductCard from "./SingleProductCard";
import "./productlist.scss"
import { useState } from "react";
import FilterSection from "./FilterSection.jsx"

ProductList.propTypes = {
  productdata: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function ProductList(props) {

    const [show, setShow] = useState(false);
    const[selectedValue,setSelectedValue] = useState('');
    const sortData = ['Select...','Lowest Price','Highest Price','Tops Customer Review','Most Recent'];
    const[filteredValue,setFilteredValue] = useState(sortData);
    const handleClose = () => setShow(false);
   const handleFilter = () => setShow(true);

   const handleSort = (data) =>{
    return () =>{
        setSelectedValue(data);
    }
   }

  return (
    <>
        <Row className=" mb-3 justify-content-between flex-row-reverse flex-lg-row ">
            <Col className="d-none d-lg-flex ">
                <div className="resultheading">Results</div>
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
            {props.productdata && props.productdata.map((d) => (
                <div key={d.id} className="singleproductcard">
                    <SingleProductCard d={d} key={d.id}/>
                </div>
            ))}     
        </Row>   
    </>
  )
}

export default ProductList
