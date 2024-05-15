import PropTypes from 'prop-types';

SingleProductQuantity.propTypes = {
    productData: PropTypes.object,
    productQuantity: PropTypes.number,
    setproductQuantity: PropTypes.func,
};

function SingleProductQuantity({productData,productQuantity,setproductQuantity}) {

    const handleadd = () => { 
        if(productQuantity < productData.stock){
            setproductQuantity(productQuantity+1);
        }
    }
    const handlesub = () => { 
        if(productQuantity <= 1){
            setproductQuantity(1);
        } else{
            setproductQuantity(productQuantity-1);
        }
    }
  return (
    <>
        <div className="quantityheading">
            Quantity:
            <div className="quantitycontainer d-flex justify-content-center align-items-center ">
                <button className="minusoperator rounded-start-2 rounded-end-0" onClick={handlesub}>-</button>
                <div className="counting">{productQuantity}</div>
                <button className="plusoperator rounded-start-0 rounded-end-2" onClick={handleadd}>+</button>
            </div>
        </div> 
    </>
  )
}

export default SingleProductQuantity
