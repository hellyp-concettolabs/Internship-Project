import { Col, Form, FormControl, Row } from "react-bootstrap"
import PropTypes from 'prop-types';
import SingleProductCard from "./SingleProductCard";

ProductList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function ProductList({data}) {
  return (
    <>
        <Row className=" mb-3 justify-content-between flex-row-reverse flex-lg-row ">
            <Col className="d-none d-lg-flex ">
                <div className=" fs-4 fw-bold">Results</div>
            </Col>
            <Col className=" d-flex d-lg-none col-3 col-sm-1 ">
                <div className=" d-flex justify-content-end align-items-center">
                    <i className="bi bi-filter"></i>
                    <span>Filter</span>
                </div>
            </Col>
            <Col className=" col-lg-4 col-md-6 col-sm-7 col-8 ">
                   <Form>
                        <div className=" align-items-center d-flex rounded-5 border border-secondary p-1">
                            <Form.Label className=" m-0 small fw-bold text-secondary text-center col-4">Sort By:</Form.Label>
                            <div className="dropdown d-flex justify-content-center align-items-center col-7">
                                <FormControl type="text" placeholder="Select..." className="border-0 p-0" style={{ boxShadow:"none", cursor:"pointer"}} data-bs-toggle="dropdown" aria-expanded="false"/>
                                <div className=" dropdown-toggle " data-bs-toggle="dropdown" style={{cursor:"pointer"}}></div>
                                <ul className=" dropdown-menu Dropdownmenu">
                                <li className=" dropdown-item ">Select...</li>
                                <li className=" dropdown-item ">Lowest Price</li>
                                <li className=" dropdown-item ">Highest Price</li>                       
                                <li className=" dropdown-item ">Tops Customer Review</li>                       
                                <li className=" dropdown-item ">Most Recent</li>                       
                                </ul>
                            </div>
                        </div>
                    </Form>
            </Col>
        </Row>
        
        <Row>
            {data && data.map((d,i) => (
                <div key={i} className="singleproductcard">
                    <SingleProductCard d={d} />
                </div>
            ))}     
        </Row>   
    </>
  )
}

export default ProductList
