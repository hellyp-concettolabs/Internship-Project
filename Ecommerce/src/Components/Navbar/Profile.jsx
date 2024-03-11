import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import "./profile.scss"

function Profile() {

    const {register, handleSubmit, formState: {errors}} = useForm()

  return (
    <div>
      <Container className="profilecontainer ">
        <Row className="profileheading">
            <h2 className="yprofile">Your Profile</h2>
        </Row>
        <Row className="profileform">
            <Col>
            <Form className='search d-flex flex-column gap-2' onSubmit={handleSubmit()}>
                <span className=' fw-medium '>Name*</span>
                <Form.Control type="text" className=' rounded-5 ' {...register("username")}/>
                {errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}
                <span className=' fw-medium '>Phone number</span>
                <Form.Control type="number" className=' rounded-5 ' {...register("phonenumber")}/>
                {errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}
                <span className=' fw-medium '>Email</span>
                <Form.Control type="email" className=' rounded-5 ' {...register("email",{pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,required:"Enter valid e-mail"})}/>
                {errors.email && <div style={{color:"red"}}>{errors.email.message}</div>}
                <Button onClick  className='search-icon rounded-5 bg-primary text-light submit' type="submit">
                Update & Save
                </Button>
            </Form>
            <div className=" mt-4 text-center text-primary ">Manage Addresses</div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
