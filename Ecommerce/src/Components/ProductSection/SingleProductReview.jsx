import Star from "../ProductCard/Star"
import SingleProductProgressbar from "./SingleProductProgressbar"

function SingleProductReview() {
  return (
    <>
        <div className="reviewcontainer col-lg-6 col-md-12">
            <div className="reviewheading">
                Customer Reviews
            </div>

            <div className="ratingdetail">
                <div className="col-6 d-flex flex-column gap-3" id="review">
                    <div>
                        <span className="rating">0</span>
                    </div>
                    <div>
                        <Star/>
                    </div>
                    <div>
                        <span className="rr">0 Ratings & Review</span>
                    </div>
                </div>
                <div className="col-6 reviewprogressbar">
                    <SingleProductProgressbar/>
                </div>
            </div>

            <div className="addreview  border-top border-bottom ">
                <div className="">
                    <Star/>
                </div>
                <div className="rp">
                    Rate This Product
                </div>
            </div>
        </div> 
    </>
  )
}

export default SingleProductReview
