import PropTypes from 'prop-types';

SingleProductStockInfo.propTypes = {
  productInStock: PropTypes.number,
  productview: PropTypes.number
};

function SingleProductStockInfo({productInStock,productview}) {
  return (
    <>
        <div className="stockinfocontainer">
            <div>
                <span className="stock">HURRY, THERE ARE ONLY {productInStock} ITEM(S) LEFT!</span>
            </div>
            <div>
                <span className="viewercount rounded-3"><i className="bi bi-people"></i>{productview}</span>
                <span className="viewer">People looking at this product</span>
            </div>
        </div>
    </>
  )
}

export default SingleProductStockInfo
