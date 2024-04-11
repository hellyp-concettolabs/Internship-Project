import { Col, Container, Row } from "react-bootstrap"
import ProductsList from "./ProductsList.jsx"
import "./productlistpage.scss"
import FilterSection from "./FilterSection"
import { useEffect, useState} from "react"
import axios from "axios";

function ProductListPage() {

    const[productData,setProductData] = useState([]);
    const [requestMade,setRequestMade] = useState(false);
    useEffect(() => {
      const fetchData = async() =>{
      if(!requestMade){
      await axios.post(' https://bargainfox-dev.concettoprojects.com/api/product/list',{
        per_page:"100",
        category_id:"",
        sub_category_id:"",
        collection_id:""
     })
      .then(response =>{
        setProductData(response.data.result.data)
        setRequestMade(true);
      })
      .catch(error =>{
        console.error('Error making GET request:', error);
      })
    }
    }
    fetchData();
    },[requestMade])

    useEffect(() =>{
      console.log(productData);
    },[productData])

  return (
    <>
     <Container fluid >

        <Row className="productlistcontainer">
            <Col className=" d-none d-lg-flex filtersec">
                <FilterSection/>        
            </Col>

            <Col className=" d-flex flex-column productlistsec">
                <ProductsList productdata={productData} />
            </Col>
        </Row>


    </Container> 
    </>
  )
}

export default ProductListPage
