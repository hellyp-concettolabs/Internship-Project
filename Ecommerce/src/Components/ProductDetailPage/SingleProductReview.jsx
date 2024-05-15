import { useEffect, useState } from "react";
import Star from "../ProductCard/Star";
import SingleProductProgressbar from "./SingleProductProgressbar";
import PropTypes from 'prop-types';
import SingleProductReviewPopup from "./SingleProductReviewPopup";
import star from "../../assets/star.svg";
import coloredstar from "../../assets/coloredstar.svg";
import likes from "../../assets/like-up.svg";
import { Image } from "react-bootstrap";
import Signuppop from "../Header/Signuppop";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Domain_Base_Url } from "../../app/DomainBaseUrl/BaseUrl";

SingleProductReview.propTypes = {
    productData: PropTypes.object,
    totalReview: PropTypes.number,
    ratingCount: PropTypes.object,
    isReviewChange: PropTypes.func,
    reviewChange: PropTypes.bool
  };

function SingleProductReview({productData,totalReview,ratingCount,isReviewChange}) {

    const[show,setShow] = useState(false);
    const[signUpShow,setSignUpShow] = useState(false);
    const[stars,setStars] = useState();
    const[storeReview,setStoreReview] = useState();
    const[helpfulChange,isHelpfulChange] = useState(false);

    useEffect(() => {
        setStars(productData && productData.review ? (productData.review.product_rate) : 0 );
        // console.log(stars)
    },[productData]);

    useEffect(() =>{
        fetchReview();
        isHelpfulChange(false);
    },[productData,helpfulChange]);

    const fetchReview = async() =>{
        if(productData && Object.keys(productData).length !== 0){
            await axios.post(`${Domain_Base_Url}/review-list`,{
                product_id: productData.id
            })
            .then((response) => {
            //   console.log(response);
            setStoreReview(response.data.result.data);
            })
            .catch(error => {
              console.error('Error making Post request:', error);
            })
        }
    }

    const handleStar = (i) =>{
        if(localStorage.getItem("token")){
            if(localStorage.getItem("token")){
                if(productData.is_purchased === true && productData.review === null){
                    console.log(i);
                    setStars(i);                
                }else if(productData.is_purchased === true && productData.review !== null){
                    if(productData.review.is_approve === 0){
                        toast.error('You have already submitted review its under approval process.');
                    }else{
                        console.log(i);
                        setStars(i);                    
                    }
                }else{
                    toast.error(`Sorry! You are not allowed to review this product since you haven't bought it.`);
                }
            }else{
                setSignUpShow(true);
            }
        }else{
            setSignUpShow(true);
        }
    }

    const handleReview = () =>{
        if(localStorage.getItem("token")){
            if(productData.is_purchased === true && productData.review === null){
                setShow(true);
            }else if(productData.is_purchased === true && productData.review !== null){
                if(productData.review.is_approve === 0){
                    toast.error('You have already submitted review its under approval process.');
                }else{
                    setShow(true);
                }
            }else{
                toast.error(`Sorry! You are not allowed to review this product since you haven't bought it.`);
            }
        }else{
            setSignUpShow(true);
        }
    }

    const handleIsHelpfull = async(id,isHelpful) => {
        if(isHelpful === false){
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
            await axios.post(` https://bargainfox-dev.concettoprojects.com/api/review-helpful`,{
                review_id: id,
                is_helpful: !isHelpful
            })
            .then(response =>{
                console.log(response);
                isHelpfulChange(true);
                toast.success('Review help added successfully.');
            })
            .catch(error =>{
                console.error('Error making GET request:', error);
            })
        }
    }
    // console.log(storeReview)
  return (
    <>
        <div className="reviewcontainer col-lg-6 col-md-12">
            <div className="reviewheading">
                Customer Reviews
            </div>

            <div className="ratingdetail">
                <div className="col-6 d-flex flex-column gap-3" id="review">
                    <div>
                        <span className="rating">{!isNaN(parseInt(productData.avg_rating)) ? parseInt(productData.avg_rating) : 0}</span>
                    </div>
                    <div>
                        <Star totalstar={productData.avg_rating}/>
                    </div>
                    <div>
                        <span className="rr">{totalReview} Ratings & Review</span>
                    </div>
                </div>
                <div className="col-6 reviewprogressbar">
                    <SingleProductProgressbar ratingCount={ratingCount}/>
                </div>
            </div>

            <div className="addreview  border-top border-bottom ">
                <div className=" d-flex ">
                    {[1,2,3,4,5].map((i,index) => (
                        <button key={index} className=" bg-transparent border-0 "
                            onClick={() => handleStar(i)}>
                            <Image src={stars >= i ? coloredstar : star} style={{height:'30px', width:'30px'}}/>
                        </button>
                    ))}
                </div>
                <button className=" border-0 bg-transparent "
                    onClick={handleReview}>
                    <div className="rp">
                        Rate This Product
                    </div>
                </button>
                {show &&
                    <SingleProductReviewPopup 
                        productData={productData} 
                        show={show} 
                        setShow={setShow} 
                        onHide={() => setShow(false)}
                        stars={stars}
                        setStars={setStars}
                        isReviewChange={isReviewChange}/>
                }
            </div>
            {storeReview && storeReview.length !== 0 &&
                <div>
                    <div className=" small fw-bold ">
                        Customer Review ({storeReview && storeReview.length})
                    </div>
                    {storeReview.map((d) => (
                        <div key={d.id} className=" mb-4">
                            <div className=" d-flex align-items-center justify-content-start gap-3 ">
                                <div className=" d-flex align-items-center ">
                                    <Image src={d.user.avatar_url}
                                        className=" rounded-circle mt-3 img-fluid "
                                        style={{height:"50px", width:"50px"}}/>
                                </div>
                                <div style={{marginTop:"21px"}}>
                                    <span className=" fw-semibold ">{d.user.name}</span>
                                </div>
                            </div>
                            <div className=" mt-2 ">
                                {d.feedback}
                            </div>
                            <div className=" mt-3 d-flex align-items-center justify-content-between">
                                <div className=" d-flex align-items-center gap-2 ">
                                    <div>
                                        <Star totalstar={d.product_rate}/>
                                    </div>
                                    <div>
                                        {new Date(d.created_at).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}
                                    </div>
                                </div>
                                <div className=" d-flex align-items-center gap-1" style={{cursor:"pointer"}}>
                                    <div className={`${d.is_helpful === true ? "text-success " : "text-secondary "} "small"`} 
                                        onClick={() => handleIsHelpfull(d.id,d.is_helpful === null ? false : d.is_helpful)}>
                                        Was this helpful?</div>
                                    <Image src={likes} className=" img-fluid " style={{width:"16px", height:"16px"}}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div> 

        <Signuppop show={signUpShow} setShow={setSignUpShow} onHide={() => setSignUpShow(false)} />
    </>
  )
}

export default SingleProductReview
