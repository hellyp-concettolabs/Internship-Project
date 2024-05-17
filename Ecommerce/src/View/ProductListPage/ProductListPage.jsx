import { Col, Container, Form, FormControl, Offcanvas, Row, Spinner } from "react-bootstrap";
import { useEffect, useState} from "react";
import axios from "axios";
import{useLocation, useNavigate} from 'react-router';
import{Link, useParams, useSearchParams} from 'react-router-dom';
import FilterSection from "./FilterSection.jsx";
import SingleProductCard from "./SingleProductCard.jsx";
import PaginationDetail from "../PaginationSection/PaginationDetail.jsx";
import NoProduct from "../ProductNotFoundPage/NoProduct.jsx";
import WishListBtn from "../WishList/WishListBtn.jsx";
import "./productlistpage.scss"
import { Domain_Base_Url } from "../../app/DomainBaseUrl/BaseUrl.js";

function ProductListPage() {

    const[productData,setProductData] = useState([]);
    const[pageData, setPageData] = useState({});
    const[loading,setLoading] = useState(false);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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

    const navigate = useNavigate();
    const location = useLocation();
    const { category_id, sub_category_id, collection_id } = useParams();
    const [searchTextParam] = useSearchParams();
  

    const searchParams = new URLSearchParams(location.search);
    const pageNumber = searchParams.get("page");
    //const conditionValue = searchParams.get("condition")
    const discountValue = searchParams.get("discount");
    const priceRange = searchParams.get("price_range")
    const sortbyValue = searchParams.get('sort_by')

    //For Sort_By
    const sortData = ['Select...','Lowest Price','Highest Price','Tops Customer Review','Most Recent'];
    const[filteredValue,setFilteredValue] = useState(sortData);
    const[selectedSortValue,setSelectedSortValue] = useState('');
    const[sortValue,setSortValue] = useState(sortbyValue);
    //For Condition
    // const [filterCondition, setFilterCondition] = useState([]);
    //const [selectedCondition,setSelectedCondition] = useState([]);
    //For Discount
    const[filterDiscount, setFilterDiscount] = useState(discountValue);
    //For Price
    const[filterPrice, setFilterPrice] = useState(priceRange);
    //OffCanvas for Filter
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleFilter = () => setShow(true);

    useEffect(() => {
      if(filterDiscount || filterPrice || sortValue ){
      let path = `?page=${pageNumber ? parseInt(pageNumber) : 1}`;

      if (filterDiscount) {
        path += `&discount=${filterDiscount}`;
      }
      if (filterPrice) {
        const price = priceFilter.find((p) => p.range === filterPrice);
        path += `&price_range=${price.range}&min_price=${price.min}&max_price=${price.max}`;
      }
      if(sortValue){
        path += `&sort_by=${sortValue}`;
      }
      // if(filterCondition.length > 0){
      //   path += `&condition=${filterCondition.join(',')}`;
      // }
      navigate(path);
    }
    },[filterDiscount,filterPrice,sortValue,pageNumber])

    useEffect(() => {
      fetchData();
    },[category_id,sub_category_id,collection_id,searchTextParam,filterDiscount,sortValue,pageNumber,filterPrice]);

    //Product List API Call
    const fetchData = async() =>{
      try{
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
      // if(filterCondition.length > 0){
      //   data.condition_id = [filterCondition]
      // }
      if(searchTextParam){
        let searchText = searchTextParam.get('searchText')
        data.search = searchText;
      }
      if(pageNumber){
        data.page = pageNumber;
      }
      if(dataperpage){
        data.per_page = dataperpage;
      }
      if(sortValue){
        data.sort_by = sortValue;
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
    
    setLoading(true);
    const response = await axios.post(`${Domain_Base_Url}/product/list`,
      data
    )
      setProductData(response.data.result.data);
      setPageData(response.data.result);
      setLoading(false);
    }
    catch(error) {
      console.error('Error making POST request for product list page:', error);
    }
  }

    // console.log(productData);

    const formatCategoryName = (label) => {
      if(label){
      // Split the label into words
      const words = label.split('-');
      // Capitalize the first letter of each word and join them with a &
      return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ');
      }
    };

    const handleWishListChange = (productId, isWishListed) => {
      // Update the productData state based on productId and isWishListed
      setProductData((prevProductData) =>
        prevProductData.map((product) =>
          product.id === productId ? { ...product, is_wishlisted: isWishListed } : product
        )
      );
    };

  return (
    <>
    <Container fluid >
         {/* BreadCrumb */}
        <Row className="productlistcontainer0">
            <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/" className=" text-decoration-none text-secondary">Home</a>
                </li>
                {category_id &&
                <li className="breadcrumb-item">
                    <a href={`/${category_id}`} className=" text-decoration-none text-secondary">&gt; &nbsp; {formatCategoryName(category_id)}</a>
                </li>
                }
                {sub_category_id &&
                <li className="breadcrumb-item">
                    <a href={`/${category_id}/${sub_category_id}`}className=" text-decoration-none text-secondary">&gt; &nbsp; {formatCategoryName(sub_category_id)}</a>
                </li>
                }
                {collection_id &&
                <li className="breadcrumb-item active" aria-current="page"> &gt; &nbsp; {formatCategoryName(collection_id)}</li>
                }
              </ol>
            </nav>
        </Row>
        <Row className="productlistcontainer">
            <Col className=" d-none d-lg-flex filtersec">
                <FilterSection filterDiscount={filterDiscount} filterPrice={filterPrice} 
                setFilterDiscount={setFilterDiscount} setFilterPrice={setFilterPrice} />        
            </Col>
            {!loading && productData.length <= 0 ? 
            (
              <Col className=" d-flex justify-content-center productlistsec">
                <NoProduct heading={'No Product Found'} 
                  desc={`Looks like there are no product available in selected category. Go ahead & explore top categories.`}/>
              </Col>
            ) :
            (<Col className=" d-flex flex-column productlistsec">
              <Row className=" mb-3 justify-content-between flex-row-reverse flex-lg-row ">
                <Col className="d-none d-lg-flex ">
                  <div className="resultheading">Showing {pageData.from} - {pageData.to} of {pageData.total} results</div>
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
                          <FilterSection filterDiscount={filterDiscount} filterPrice={filterPrice} 
                            setFilterDiscount={setFilterDiscount} setFilterPrice={setFilterPrice}/>
                      </Offcanvas.Body>
                  </Offcanvas>

                </Col>

                <Col className=" col-sm-5 col-9 ">
                    <Form>
                        <div className=" align-items-center d-flex rounded-5 border border-secondary p-1">
                            <Form.Label htmlFor="selectsortoption" className="sortby col-4">Sort By:</Form.Label>
                            <div className="dropdown d-flex justify-content-center align-items-center col-7">
                                <FormControl id='selectsortoption' type="select" placeholder="Select..." className="border-0 p-0" 
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
                                        style={{border:"0", backgroundColor:"white"}}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          console.log(data);
                                          setSelectedSortValue(data);
                                          //store value in local storgae
                                          localStorage.setItem('selectedValue', data);
                                          const storedSelectedValue = data.replace(/\s/g, '_').toLowerCase();
                                          setSortValue(storedSelectedValue);
                                        }}>
                                        <li className=" dropdown-item ">{data}</li>   
                                      </button>                                
                                    )}
                                </ul>
                            </div>
                        </div>
                    </Form>
                </Col>
              </Row>
              {loading ? 
                <div className=" d-flex justify-content-center align-items-center ">
                    <Spinner animation="border" variant="primary" />
                </div>:
                (<>
                <Row>
                {productData
                .map((d) => (
                  <div key={d.id} className="singleproductcard">
                    <div className="productlistwishlist">
                      <WishListBtn 
                        isWishList={d.is_wishlisted} 
                        d={d}  
                        id={d.id}
                        variationId={d.product_variation_detail ? d.product_variation_detail.id : null} 
                        handleWishListChange={handleWishListChange}/>
                    </div>
                    <Link
                      className=" text-decoration-none " style={{color:"black"}}
                      to={`/singleproduct/${d.slug}/${d.unique_id}/${d.sku}`}
                    >
                      <SingleProductCard d={d} key={d.id}/>
                    </Link>
                  </div>
                  ))}     
                </Row>  

                <Row>
                  <Col>
                    <PaginationDetail pageNumber={pageNumber} lastpage={pageData.last_page}/>
                  </Col>
                </Row>
              </>)} 
            </Col>)
            }  
        </Row>


    </Container>


    </>
  )
}

export default ProductListPage
