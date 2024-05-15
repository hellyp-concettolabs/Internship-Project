import "./filtersection.scss"
import { Col } from "react-bootstrap"

function PriceCategory() {

    const prices = [
        {
            label:'Under $10',
            id:`price_range-0-10`,
            value:`price_range-0-10`,
        },
        {
            label:'$10-$25',
            id:`price_range-10-25`,
            value:`price_range-10-25`,
        },
        {
            label:'$25-$50',
            id:`price_range-25-50`,
            value:`price_range-25-50`,
        },
        {
            label:'$50-100',
            id:`price_range-50-100`,
            value:`price_range-50-100`,
        },
        {
            label:'Over $100',
            id:`price_range-100-0`,
            value:`price_range-100-0`,
        },
    ]
    const handleChange = (e) =>{
        console.log(e.target.value);
    }
  return (
    <>
        <div className="subheading">Price</div>
        <Col className=" mt-3 ">
        {prices.map((price,id) =>(
            <div className="form-check pb-2 " key={id}>
                <input 
                    className="form-check-input"
                    type="radio"
                    id={price.id}
                    value={price.value}
                    onChange={handleChange}
                />
                <label htmlFor={price.id}>
                    {price.label}
                </label>
            </div>
        ))}
        </Col>
    </>
  )
}

export default PriceCategory
