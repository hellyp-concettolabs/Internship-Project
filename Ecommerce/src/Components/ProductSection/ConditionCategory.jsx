import "./filtersection.scss"
import { Col } from "react-bootstrap"
function ConditionCategory() {

    const conditions = [
        {
            label:'Brand new',
            id:`condition-brand-new`,
            value:`condition-brand-new`,
        },
        {
            label:'Open Box',
            id:`condition-open-box`,
            value:`condition-open-box`,
        },
        {
            label:'Like New',
            id:`condition-like-new`,
            value:`condition-like-new`,
        },
        {
            label:'Very Good',
            id:`condition-very-good`,
            value:`condition-very-good`,
        },
        {
            label:'Good',
            id:`condition-good`,
            value:`condition-good`,
        },
        {
            label:'Acceptable',
            id:'condition-acceptable',
            value:'condition-acceptable',
        }
    ]

    const handleChange = (e) =>{
        console.log(e.target.value); 
    }
  return (
    <>
        <div className="subheading">Condition</div>
        <Col className=" mt-3 ">
            {conditions.map((condition,id) =>(
            <div className="form-check pb-2" key={id}>
                <input 
                    className="form-check-input rounded-circle "
                    type="checkbox"
                    id={condition.id}
                    value={condition.value}
                    onChange={handleChange}
                />
                <label htmlFor={condition.id}>
                    {condition.label}
                </label>
            </div>
             ))}
        </Col>
    </>
  )
}

export default ConditionCategory
