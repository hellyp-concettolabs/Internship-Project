import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import SingleProductCard from "../ProductSection/SingleProductCard";
import { Link } from "react-router-dom";
import WishListBtn from "./WishListBtn";
import "../WishListSection/wishlist.scss"
import NoProduct from "../ProductNotFoundPage/NoProduct";

function WishList() {

    const[wishListData,setWishListData] = useState("");
    const[removeWishListItem,setRemoveWishListItem] = useState(false);
    const [loading,setLoading] = useState(false);

    const handleWishlist = async() =>{
      if(localStorage.getItem("token")){
      setLoading(true);
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        await axios.post(' https://bargainfox-dev.concettoprojects.com/api/wishlist',{
            per_page: 100,
        })
        .then((response) =>{
            // console.log(response);
            setWishListData(response.data.result.data);
            setLoading(false);
        })
        .catch(error =>{
            console.error('Error making Post request:', error);
          })
      }
    }
    useEffect(() => {
        handleWishlist();
        setRemoveWishListItem(false);
    },[removeWishListItem])

    const handleWishListChange = (productId, isWishListed) => {
      // Update the productData state based on productId and isWishListed
      setWishListData((prevProductData) =>
        prevProductData.map((product) =>
          product.id === productId ? { ...product, is_wishlisted: isWishListed } : product
        )
      );
      setRemoveWishListItem(true);
    };
      // console.log(wishListData)
  return (
    <>
     {loading ? 
            <div className=" d-flex justify-content-center align-items-center ">
                <Spinner animation="border" variant="primary" />
            </div>:
        // {/* BreadCrumb */}
        (<>
        <div className=" mx-3">
            <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/" className=" text-decoration-none text-secondary">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page"> &gt; &nbsp; Wishlist</li>
              </ol>
            </nav>
        </div>
        <Container fluid className="my-5 px-5 ">
            <Row className="d-flex align-items-center justify-content-between">
              <Col className="text-center text-sm-start mb-3 ">
                <div className="fw-bold fs-3">Wishlist</div>
              </Col>
            </Row>
            <Row className=" d-flex align-items-center flex-wrap ">
                {wishListData && wishListData
                .map((d) => (
                  <Col key={d.id} className="col-1 singlewishlistproductcard mb-4">
                    <div className="wishlistList">
                      <WishListBtn 
                      isWishList={d.is_wishlisted} 
                      d={d} 
                      id={d.id}
                      variationId={d.product_variation_detail ? d.product_variation_detail.id : null}
                      handleWishListChange={handleWishListChange} />
                    </div>
                    <Link
                      className=" text-decoration-none " style={{color:"black"}}
                      to={`/singleproduct/${d.slug}/${d.unique_id}/${d.sku}`}>
                      <SingleProductCard d={d} key={d.id}/>
                    </Link>
                  </Col>
                ))}     
              </Row>    
        </Container> 
        {!loading && wishListData <= 0 &&
        <Container fluid style={{padding:"80px 50px 60px"}}>
            <Col className=" d-flex justify-content-center productlistsec">
                <NoProduct heading={'Your wishlist is empty'} 
                  desc={`Looks like you have not added something to you wishlist.
                  Go ahead & explore top categories.`}/>
            </Col>
        </Container>
        }
        </>)}
        
    </>
  )
}

export default WishList
