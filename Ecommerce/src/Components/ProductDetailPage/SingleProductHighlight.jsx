import PropTypes from 'prop-types';

SingleProductHighlight.propTypes = {
    productPurchaseCount: PropTypes.number,
    productDescription: PropTypes.string,
    productBrand: PropTypes.array,
};

function SingleProductHighlight({productPurchaseCount,productDescription,productBrand}) {

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
                {productBrand &&
                <div className=' mt-3'>
                    {productBrand.map((s) =>(
                    <div key={s.id}
                        className=' d-flex gap-2 '>
                        <span className=" fw-bold ">{s.spec_name}:</span>
                        <span>{s.spec_value}</span>
                    </div>
                     ))}
                </div>
                }
            </div>
        </div>
    </>
  )
}

export default SingleProductHighlight
