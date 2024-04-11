import "./filtersection.scss"
import { Col,Form } from "react-bootstrap"
function DiscountCategory() {

    const discounts = [
        {
            label:'90% off or more',
            id:`discount-90`,
            value:`discount-90`,
        },
        {
            label:'80% off or more',
            id:`discount-80`,
            value:`discount-80`,
        },
        {
            label:'70% off or more',
            id:`discount-70`,
            value:`discount-70`,
        },
        {
            label:'60% off or more',
            id:`discount-60`,
            value:`discount-60`,
        },
        {
            label:'50% off or more',
            id:`discount-50`,
            value:`discount-50`,
        },
        {
            label:'40% off or more',
            id:'discount-40',
            value:'discount-40',
        }
    ]

    const handleChange = (e) =>{
        console.log(e.target.value);
    }

  return (
    <>
        <div className="subheading">Discount</div>
        <Col className=" mt-3 ">
        <Form>
        {discounts.map((discount,id) =>(
            <div className="form-check pb-2" key={id}>
                <input 
                    className="form-check-input"
                    type="radio"
                    id={discount.id}
                    value={discount.value}
                    onChange={handleChange}
                />
                <label htmlFor={discount.id}>
                    {discount.label}
                </label>
            </div>
        ))}
        </Form>
        </Col> 
    </>
  )
}

export default DiscountCategory
