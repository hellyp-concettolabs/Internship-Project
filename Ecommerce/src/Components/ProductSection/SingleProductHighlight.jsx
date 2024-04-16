import PropTypes from 'prop-types';

SingleProductHighlight.propTypes = {
    productPurchaseCount: PropTypes.number,
    productDescription: PropTypes.string,
};
function SingleProductHighlight({productPurchaseCount,productDescription}) {
  return (
    <>
        <div className="highlightcontainer col-lg-6 col-md-12 ">
            
            <div className="highlightheading">
                Highlight
            </div>

            <div className="customer">
                <i className="bi bi-check text-light bg-dark rounded-circle px-1"></i>
                {productPurchaseCount} Customers bought this item
            </div>

            <div className=" border-top py-3">
                <div className="productdesc">Product Description</div>
                <div className="desclist">
                    {productDescription}
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleProductHighlight
