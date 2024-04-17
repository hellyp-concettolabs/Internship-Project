import { Row, Col } from "react-bootstrap"
import "./filtersection.scss"
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
FilterSection.propTypes ={
    setFilterDiscount: PropTypes.function, 
    setFilterPrice:PropTypes.function,
    // setFilterCondition:PropTypes.function,
    filterDiscount:PropTypes.string,
    filterPrice:PropTypes.string,
}
function FilterSection({setFilterDiscount,setFilterPrice,filterDiscount,filterPrice}) {
    
    // const conditions = [
    //     {
    //         label:'Brand new',
    //         id:`1`,
    //         slug:`brand-new`,
    //         value:`condition-brand-new`,
    //     },
    //     {
    //         label:'Open Box',
    //         id:`2`,
    //         slug:`open-box`,
    //         value:`condition-open-box`,
    //     },
    //     {
    //         label:'Like New',
    //         id:`3`,
    //         slug:`like-new`,
    //         value:`condition-like-new`,
    //     },
    //     {
    //         label:'Very Good',
    //         id:`4`,
    //         slug:`very-good`,
    //         value:`condition-very-good`,
    //     },
    //     {
    //         label:'Good',
    //         id:`5`,
    //         slug:`good`,
    //         value:`condition-good`,
    //     },
    //     {
    //         label:'Acceptable',
    //         id:'6',
    //         slug:`acceptable`,
    //         value:'condition-acceptable',
    //     }
    // ]
    const filterData = [
        {
          id: 6,
          title: "Discount",
          key: "discount",
          type: "radio",
          data: [
            { id: 1, title: "90% off or more", slug: "90" },
            { id: 2, title: "80% off or more", slug: "80" },
            { id: 3, title: "70% off or more", slug: "70" },
            { id: 4, title: "60% off or more", slug: "60" },
            { id: 5, title: "50% off or more", slug: "50" },
            { id: 6, title: "40% off or more", slug: "40" },
            { id: 7, title: "30% off or more", slug: "30" },
          ],
        },
        {
          id: 8,
          title: "Price",
          key: "price_range",
          type: "radio",
          data: [
            { id: 1, title: "Under £10", slug: "0-10" },
            { id: 2, title: "£10 - £25", slug: "10-25" },
            { id: 3, title: "£25 - £50", slug: "25-50" },
            { id: 4, title: "£50 - £100", slug: "50-100" },
            { id: 5, title: "Over £100", slug: "100-0" },
          ],
        },
      ];

    // const handleConditionChange = (e) =>{
    //     const selectedCondition = e.target.value;
    //     setFilterCondition(selectedCondition)

    // };
    const handleDiscountChange = (e) => {
        const selectedDiscount = e.target.value;
        if(filterDiscount === selectedDiscount){
            setFilterDiscount(null);        //Deselect the current selected option
        }else{
        setFilterDiscount(selectedDiscount);
        }
    }
    const handlePriceChange = (e) =>{
        const selectedPrice = e.target.value;
        if(filterPrice === selectedPrice){
            setFilterPrice(null);       //Deselect the current selected option
        }else{
        setFilterPrice(selectedPrice);
        }
    }
  return (
    <div>
        <Row>
            <div className="filterheading text-secondary fw-bold fs-5">Filters</div>
        </Row>
        
        {/* <Row className=" mt-3 ">
        <div className="subheading">Condition</div>
        <Col className=" mt-3 ">
            <Form>
            {conditions.map((condition,id) =>(
            <div className="form-check pb-2" key={id}>
                <Form.Check 
                    className=" rounded-circle "
                    type="checkbox"
                    id={condition.id}
                    value={condition.slug}
                    onChange={handleConditionChange}
                    label={condition.label}
                />
            </div>
            ))}
            </Form>
        </Col>
        </Row> */}

        <Row className=" mt-3 ">
        <div className="subheading">Discount</div>
        <Col className=" mt-3 ">
            <Form>
            {filterData[0].data.map((title,i) => (
                <div key={i} className="pb-2">
                    <Form.Check
                    type="radio"
                    name={filterData[0].key}
                    id={title.id}
                    value={title.slug}
                    label={title.title}
                    onClick={handleDiscountChange}
                    onChange={handleDiscountChange}
                    checked={filterDiscount === title.slug}/>
                    
                </div>
            ))}
            </Form>
            </Col>
        </Row>

        <Row className=" mt-3 ">
        <div className="subheading">Price</div>
        <Col className=" mt-3 ">
            <Form>
            {filterData[1].data.map((title,i) => (
                <div key={i} className="pb-2">
                    <Form.Check
                    type="radio"
                    name={filterData[1].key}
                    id={title.id}
                    value={title.slug}
                    label={title.title}
                    onClick={handlePriceChange}
                    onChange={handlePriceChange}
                    checked={filterPrice === title.slug}/>
                </div>
                )
            )}
            </Form>
        </Col>
        </Row>
    </div>
  )
}

export default FilterSection
