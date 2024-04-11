import { Row } from "react-bootstrap"
import "./filtersection.scss"
import ConditionCategory from "./ConditionCategory"
import DiscountCategory from "./DiscountCategory"
import PriceCategory from "./PriceCategory"

function FilterSection() {
    

  return (
    <div>
        <Row>
            <div className="filterheading text-secondary fw-bold fs-5">Filters</div>
        </Row>
        <Row className=" mt-3 ">
            <ConditionCategory/>
        </Row>
        <Row className=" mt-3 ">
            <DiscountCategory />
        </Row>
        <Row className=" mt-3 ">
            <PriceCategory/>
        </Row>
    </div>
  )
}

export default FilterSection
