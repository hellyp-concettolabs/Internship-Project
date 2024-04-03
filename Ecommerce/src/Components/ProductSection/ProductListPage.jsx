import { Col, Container, Row } from "react-bootstrap"
import ProductList from "./ProductsList.jsx"
import "./productlistpage.scss"
import FilterSection from "./FilterSection"
import { useContext} from "react"
import { ProductContext } from "../ProductData/StoreProductContext.jsx"
function ProductListPage() {

    const {productData} = useContext(ProductContext);
    

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
                <ProductList productdata={productData}/>
            </Col>

        </Row>
    </Container> 
    </>
  )
}

export default ProductListPage
