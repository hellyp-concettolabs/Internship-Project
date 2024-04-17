import { useState } from "react"

function SingleProductQuantity() {

    const [counter,setCounter] = useState(1);
    const handleadd = () => { setCounter(counter+1)}
    const handlesub = () => { 
        if(counter <= 1){
            setCounter(1);
        } else{
            setCounter(counter-1);
        }
    }
  return (
    <>
        <div className="quantityheading">
            Quantity:
            <div className="quantitycontainer d-flex justify-content-center align-items-center ">
                <button className="minusoperator rounded-start-2 rounded-end-0" onClick={handlesub}>-</button>
                <div className="counting">{counter}</div>
                <button className="plusoperator rounded-start-0 rounded-end-2" onClick={handleadd}>+</button>
            </div>
        </div> 
    </>
  )
}

export default SingleProductQuantity
