import { Col, Container,Row, Spinner } from "react-bootstrap"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./singleproductdetail.scss"
import Star from "../ProductCard/Star";
import ImageAndThumbnail from "./ImageAndThumbnail";
import SingleProductTitle from "./SingleProductTitle";
import Share from "./Share";
import VenderName from "./VenderName";
import SingleProductPrice from "./SingleProductPrice";
import OtherSeller from "./OtherSeller";
import SingleProductColor from "./SingleProductColor.jsx"
import SingleProductSize from "./SingleProductSize.jsx";
import SingleProductQuantity from "./SingleProductQuantity.jsx";
import SingleProductDeliveryinfo from "./SingleProductDeliveryinfo.jsx";
import SingleProductStockInfo from "./SingleProductStockInfo.jsx";
import SingleProductCartBtn from "./SingleProductCartBtn.jsx";
import SingleProductDeliveryTime from "./SingleProductDeliveryTime.jsx";
import SingleProductHighlight from "./SingleProductHighlight.jsx";
import SingleProductReview from "./SingleProductReview.jsx";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleProductCondition from "./SingleProductCondition.jsx";


function SingleProductDetail() {

      const[productData,setProductData] = useState({});
      //const[variationList,setVariationList] = useState([]);
      const [loading,setLoading] = useState(false);
      const [productQuantity,setproductQuantity] = useState(1);
      const{slug , unique_id , sku } = useParams();
      const searchParams = new URLSearchParams(location.search);
      const color = searchParams.get("color");
      const size = searchParams.get("size");
      const [addToCart,setAddToCart] = useState(false);
      //console.log(color)
      //console.log(size)

      const fetchData = async() =>{
        setLoading(true);
        await axios.get(` https://bargainfox-dev.concettoprojects.com/api/product/detail/${slug}/${unique_id}?/${sku}`)
        .then(response =>{
            const result = response.data.result;
            setProductData(response.data.result);
            //setVariationList(response.data.result.variation_list);
            if(response.data.result.variation_list && response.data.result.variation_list.length > 0 ){
                const productVariation =  (color && size) ? 
                response.data.result.variation_list.find((item) => item.color === parseInt(color) && item.size === parseInt(size)) :
            color ? 
                response.data.result.variation_list.find((item) => item.color === parseInt(color)) :
            size ?
                response.data.result.variation_list.find((item) => item.size === parseInt(size)) :
            response.data.result.variation_list.find((item) => item.sku === sku);
                const newProductData = {...productData,
                id: productVariation?.product_id || result.id,
                category_info: productVariation?.category_info || result.category_info,
                unique_id: productVariation?.unique_id || result.unique_id,
                vendor_id: productVariation?.vendor_id || result.vendor_id,
                vendor_info: result.vendor_info,
                color: result.color,
                size: result.size,
                colorVariation: productVariation?.color,
                sizeVariation: productVariation?.size,
                sku: productVariation?.sku || result.sku,
                slug: productVariation?.slug || result.slug,
                category_id: productVariation?.category_id || result.category_id,
                name: productVariation?.name || result.name,
                share_url: productVariation?.share_url || result.share_url,
                product_images: productVariation?.product_images || result.product_images,
                sale_price: productVariation?.sale_price || result.sale_price,
                main_rrp: productVariation?.rrp || result.main_rrp,
                discount_percentage: productVariation?.percentage_discount || result.discount_percentage,
                product_condition: productVariation?.product_condition || result.product_condition,
                purchase_count: productVariation?.purchase_count || result.purchase_count,
                description: productVariation?.description || result.description,
                product_specification: productVariation?.product_specification || result.product_specification,
                stock: productVariation?.stock || result.stock,
                product_view: productVariation?.product_view || result.product_view,
                expected_delivery: productVariation?.expected_delivery || result.expected_delivery,
                total_review: productVariation?.total_review || result.total_review,
                rating_count: productVariation?.rating_count || result.rating_count,
                is_added_cart: productVariation?.is_added_cart || result.is_added_cart,
                product_variation_id: productVariation?.product_variation_id,
                }
                setProductData(newProductData);
            }
            setLoading(false);
        })
        .catch(error =>{
            setLoading(false);
            console.error('Error making GET request:', error);
          })
      }
      useEffect(() => {
        fetchData();
      },[color,size,addToCart])

    console.log(productData);
    //console.log(productId)


  return (
    <>
        {loading ? 
            <div className=" d-flex justify-content-center align-items-center ">
                <Spinner animation="border" variant="primary" />
            </div>:
        (<Container fluid id="productdetailcontainer">
            {/* BreadCrumb */}
            <Row>
                <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb" className=" p-0 ">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/" className=" text-decoration-none text-secondary">Home</a>
                    </li>
                    {productData && productData.category_info &&
                    <li className="breadcrumb-item">
                        <a href={`/${productData.category_info[0].slug}`} className=" text-decoration-none text-secondary">
                            &gt; &nbsp; {productData.category_info[0].title}
                        </a>
                    </li>
                    }
                    {productData && productData.category_info  && productData.category_info[0].subcategory[0].title &&
                    <li className="breadcrumb-item">
                        <a href={`/${productData.category_info[0].slug}/${productData.category_info[0].subcategory[0].slug}`}className=" text-decoration-none text-secondary">
                            &gt; &nbsp; {productData.category_info[0].subcategory[0].title}
                        </a>
                    </li>
                    }
                    {productData && productData.category_info  && productData.category_info[0].subcategory[0].collection[0].title &&
                    <li className="breadcrumb-item">
                        <a href={`/${productData.category_info[0].slug}/${productData.category_info[0].subcategory[0].slug}/${productData.category_info[0].subcategory[0].collection[0].slug}`}className=" text-decoration-none text-secondary">
                             &gt; &nbsp; {productData.category_info[0].subcategory[0].collection[0].title}
                        </a>
                    </li>
                    }
                    {productData && productData.name  && 
                    <li className="breadcrumb-item active" aria-current="page"
                        style={{overflow:"hidden", width:"500px", height:"22px"}}> 
                        &gt; &nbsp; {productData.name}
                    </li>
                    }
                    </ol>
                </nav>
            </Row>
            <Row className="productimageanddetail py-lg-4 py-2">

                <Col className="border-bottom pb-3 ">
                    <ImageAndThumbnail productImage={productData.product_images}/>
                </Col>

                <Col className="d-flex flex-column gap-3 border-bottom pb-3 ">

                    <Row className="productmaintitle">
                        <SingleProductTitle name={productData.name}/>
                        <Share shareURL={productData.share_url}/>
                    </Row>
                    <Row className="starandvender">
                        <Col className="d-flex col-6">
                            <Star/>
                        </Col>
                        <Col className=" col-6 text-md-end text-start ">
                            <VenderName venderName={productData.vendor_info}/>
                        </Col>
                    </Row>
                    <Row className="priceseller">
                        <Col >
                            <SingleProductPrice 
                                productSalePrice={productData.sale_price}
                                productprice={productData.main_rrp}
                                productDiscount={productData.discount_percentage}/>
                        </Col>
                        <Col className="otherseller">
                            <OtherSeller/>
                        </Col>
                    </Row>
                    <Row>
                        <SingleProductCondition productCondition = {productData.product_condition}/>
                    </Row>
                    {productData.color != "" &&
                        <Row>
                                <SingleProductColor colorVariation={productData.colorVariation} productColor={productData.color} size={size}/>
                        </Row>
                    }
                    {productData.size != "" &&
                        <Row>
                                <SingleProductSize sizeVariation={productData.sizeVariation} productSize={productData.size} color={color}/>
                        </Row>
                    }
                    <Row>
                        <SingleProductQuantity productData={productData} productQuantity={productQuantity} setproductQuantity={setproductQuantity}/>
                    </Row>
                    <Row className=" d-flex d-md-none ">
                        <SingleProductStockInfo/>
                    </Row>
                    <Row className=" d-flex d-md-none ">
                        <SingleProductCartBtn addToCart={addToCart} setAddToCart={setAddToCart} productData={productData} productQuantity={productQuantity}/>
                    </Row>
                    <Row className=" border-top border-bottom">
                        <SingleProductDeliveryinfo/>
                    </Row>
                    {productData.stock <= 15 &&
                    <Row className=" d-none d-md-flex ">
                        <SingleProductStockInfo productInStock={productData.stock}
                            productview={productData.product_view}/>
                    </Row>
                    }
                    <Row className=" d-none d-md-flex ">
                        <SingleProductCartBtn addToCart={addToCart} setAddToCart={setAddToCart} productData={productData} productQuantity={productQuantity}/>
                    </Row>
                    <Row>
                        {productData.expected_delivery &&
                            <SingleProductDeliveryTime productDeliveryTime={productData.expected_delivery}/>
                        }
                    </Row>
                </Col>

            </Row>


            <Row className="d-block d-lg-flex flex-lg-row-reverse">
                
                <SingleProductHighlight productPurchaseCount={productData.purchase_count}
                    productDescription={productData.description}
                    productBrand={productData.product_specification}/>
                <SingleProductReview totalReview={productData.total_review} ratingCount={productData.rating_count}/>

            </Row>

        </Container>      
    )} 
    </>
  )
}

export default SingleProductDetail
