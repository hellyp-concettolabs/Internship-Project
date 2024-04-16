import { Col, Container, Form, FormControl, Offcanvas, Row } from "react-bootstrap"
import "./productlistpage.scss"
import FilterSection from "./FilterSection"
import { useEffect, useState} from "react"
import axios from "axios";
import{Link, useParams, useSearchParams} from 'react-router-dom'
import SingleProductCard from "./SingleProductCard";
import "./productlist.scss"
import PaginationDetail from "../PaginationSection/PaginationDetail.jsx"
import{useLocation} from 'react-router'

function ProductListPage() {

    const[productData,setProductData] = useState([]);
    const[pageData, setPageData] = useState({});
    //const[isLoading,setIsLoading] = useState(false);

    const priceFilter = [
      {
          min:'0',
          max:'10',
          range:'0-10'
      },
      {
          min:'10',
          max:'25',
          range:'10-25'
      },
      {
          min:'25',
          max:'50',
          range:'25-50'
      },
      {
          min:'50',
          max:'100',
          range:'50-100'
      },
      {
          min:'0',
          max:'100',
          range:'100-0'
      },
    ]

    //const navigate = useNavigate();
    const location = useLocation();
    const { category_id, sub_category_id, collection_id } = useParams();
    const [searchTextParam] = useSearchParams();
  

    const searchParams = new URLSearchParams(location.search);
    const pageNumber = searchParams.get("page");
    const conditionValue = searchParams.get("condition")
    const discountValue = searchParams.get("discount");
    const maxPrice = searchParams.get("max_price");
    const minPrice = searchParams.get("min_price");
    const priceRange = searchParams.get("price_range")
    //const sortbyValue = searchParams.get('sort_by')

    //For Sort_By
    const sortData = ['Select...','Lowest Price','Highest Price','Tops Customer Review','Most Recent'];
    const[selectedSortValue,setSelectedSortValue] = useState('');
    const[filteredValue,setFilteredValue] = useState(sortData);
    //For Condition
    const [filterCondition, setFilterCondition] = useState(conditionValue);
    //For Discount
    const[filterDiscount, setFilterDiscount] = useState(discountValue);
    //For Price
    const[filterPrice, setFilterPrice] = useState(priceRange);
    //OffCanvas for Filter
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleFilter = () => setShow(true);

    useEffect(() => {
      let path = "";
      if(filterDiscount || filterPrice){
        if(filterDiscount){
          path += `&discount=${filterDiscount}`;
        }
        if(filterPrice){
          const price = priceFilter.find((p) =>
            p.range === filterPrice
          );
          if(price.min >= 0){
            path += `&min_price=${price.min}`;
          }
          if(price.max >= 0){
            path += `&max_price=${price.max}`;
          }
        }
      //  navigate(`page=1${path}`);
      }
      if (!filterDiscount && !filterPrice ) {
        path = path.replace(/&?discount=[^&]*/g, "");
      //  navigate(`${path}`);
      }
  
      if (minPrice) {
        path = path.replace(/&?min_price=[^&]*/g, "");
        path += `&min_price=${minPrice}`;
      }
      if (maxPrice) {
        path = path.replace(/&?max_price=[^&]*/g, "");
        path += `&max_price=${maxPrice}`;
      }
      if (priceRange) {
        path = path.replace(/&?price_range=[^&]*/g, "");
        path += `&price_range=${priceRange}`;
        
      }
    },[filterDiscount,filterPrice,minPrice,maxPrice,priceRange,discountValue])

    //Product List API Call
    const fetchData = async() =>{
      let data = {}
      const dataperpage = 18;
      if(category_id){
        data.category_id = category_id;
      }
      if(sub_category_id){
        data.sub_category_id = sub_category_id;
      }
      if(collection_id){
        data.collection_id = collection_id;
      }
      if(filterCondition){
        data.condition_id[1] = filterCondition
      }
      if(searchTextParam){
        let searchText = searchTextParam.get('searchText')
        data.search = searchText;
      }
      if(selectedSortValue){
        data.sort_by = selectedSortValue;
      }
      if(filterDiscount){
        data.discount = filterDiscount;
      }
      if(filterPrice){
        const price = priceFilter.find((p) =>
        p.range === filterPrice
      );
        data.min_price = price.min;
        data.max_price = price.max;
      }
      if(dataperpage){
        data.per_page = dataperpage;
      }
      if(pageNumber){
        data.page = pageNumber;
      }
    await axios.post(' https://bargainfox-dev.concettoprojects.com/api/product/list',
      data
   )
    .then(response =>{
      setProductData(response.data.result.data)
      setPageData(response.data.result)
    })
    .catch(error =>{
      console.error('Error making GET request:', error);
    })
  }

    useEffect(() => {
      fetchData();
    },[category_id,sub_category_id,collection_id,searchTextParam,filterDiscount,selectedSortValue,pageNumber,filterDiscount,filterPrice])


    //  const handleSort = (data) =>{
    //   return () =>{
    //     const storedSelectedValue = data.replace(/\s/g, '_').toLowerCase();
    //     setSelectedSortValue(storedSelectedValue);
    //       //store value in local storgae
    //       localStorage.setItem('selectedValue', data);
    //       console.log(storedSelectedValue);
    //   }
    //  }

  return (
    <>
     <Container fluid >

        <Row className="productlistcontainer">
            <Col className=" d-none d-lg-flex filtersec">
                <FilterSection filterDiscount={filterDiscount} filterPrice={filterPrice} filterCondition={filterCondition}
                setFilterDiscount={setFilterDiscount} setFilterPrice={setFilterPrice} setFilterCondition={setFilterCondition}/>        
            </Col>

            <Col className=" d-flex flex-column productlistsec">
              <Row className=" mb-3 justify-content-between flex-row-reverse flex-lg-row ">
                <Col className="d-none d-lg-flex ">
                  {/* <div className="resultheading">Showing 1 - {currentRecords.length} of {productData.length} results</div> */}
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
                          <FilterSection setFilterDiscount={setFilterDiscount}/>
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
                                    value={selectedSortValue} 
                                    onChange={(e) => {
                                        const userInput = e.target.value;
                                        setSelectedSortValue(userInput);
                                        const filteredOptions = sortData.filter((option) =>
                                            option.toLowerCase().includes(userInput.toLowerCase())
                                        );
                                            setFilteredValue(filteredOptions);
                                    }}/>
                                <div className=" dropdown-toggle " data-bs-toggle="dropdown" style={{cursor:"pointer"}}></div>
                                <ul className=" dropdown-menu Dropdownmenu">
                                    {filteredValue.map((data,i) =>
                                      <button key={i}
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
                {productData
                .map((d) => (
                  <div key={d.id} className="singleproductcard">
                    <Link
                      className=" text-decoration-none " style={{color:"black"}}
                      to={`/singleproduct/${d.sku}/${d.unique_id}`}>
                      <SingleProductCard d={d} key={d.id}/>
                    </Link>
                  </div>
                ))}     
              </Row>  
        
              <Row>
                <Col>
                  <PaginationDetail
                  lastpage={pageData.last_page}/>
                </Col>
              </Row>
            </Col>
        </Row>


    </Container> 
    </>
  )
}

export default ProductListPage
