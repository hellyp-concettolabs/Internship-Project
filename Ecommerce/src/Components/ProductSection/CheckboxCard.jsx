import { Form } from "react-bootstrap"
import PropTypes from 'prop-types';

CheckboxCard.propTypes = {
    conditions: PropTypes.arrayOf(PropTypes.object).isRequired,
    discounts: PropTypes.arrayOf(PropTypes.object).isRequired,
    prices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function CheckboxCard({ conditions , discounts , prices}) {
   

  return (
    <>
        <Form>
            
                {conditions && conditions.map((condition,index) =>(
                    <div key={index} className=" pb-2">
                        <Form.Check 
                            type={"checkbox"}
                            id={condition.cat}
                            label={condition.cat}
                        />
                    </div>
                ))}
                {discounts && discounts.map((discount,index) =>(
                    <div key={index} className=" pb-2">
                        <Form.Check 
                            type={"checkbox"}
                            id={discount.dis}
                            label={discount.dis}
                        />
                    </div>
                ))}
                {prices && prices.map((price,index) =>(
                    <div key={index} className=" pb-2">
                        <Form.Check 
                            type={"checkbox"}
                            id={price.p}
                            label={price.p}
                        />
                    </div>
                ))}

        </Form>
    </>
  )
}

export default CheckboxCard
