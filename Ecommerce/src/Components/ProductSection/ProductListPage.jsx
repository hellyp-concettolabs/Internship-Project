import { Col, Container, Row } from "react-bootstrap"
import ProductList from "./ProductsList.jsx"
import "./productlistpage.scss"
import FilterSection from "./FilterSection"
import { useContext, useState} from "react"
import { ProductContext } from "../ProductData/StoreProductContext.jsx"
import Pagination from "../PaginationSection/Pagination.jsx"
function ProductListPage() {

    const {productData} = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(20);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = productData.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(productData.length / recordsPerPage);
  return (
    <>
     <Container fluid >
        {/* <Row className="">
            <span className="">Home &gt; Clothing &gt; Women</span>
        </Row> */}
        <Row className="productlistcontainer">
            <Col className=" d-none d-lg-flex filtersec">
                <FilterSection/>        
            </Col>

            <Col className=" d-flex flex-column productlistsec">
                <ProductList productdata={currentRecords}/>
            </Col>
        </Row>
        {currentRecords > 20 &&(
        <Row>
            <Col>
                <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
            </Col>
        </Row>
        )}
    </Container> 
    </>
  )
}

export default ProductListPage
