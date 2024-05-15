import { CloseButton, Image} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import "../Header/signuppop.scss"
import SingleProductTitle from './SingleProductTitle';
import axios from 'axios';
import { Formik } from 'formik';
import star from "../../assets/star.svg";
import coloredstar from "../../assets/coloredstar.svg";

SingleProductReviewPopup.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func,
    onHide: PropTypes.func,
    productData: PropTypes.object,
    stars: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    setStars: PropTypes.func,
    isReviewChange: PropTypes.func,
  };

function SingleProductReviewPopup({show,setShow,onHide,productData,stars,setStars,isReviewChange}) {

    // console.log(productData)
  return (
    <>
      <Modal show={show} onHide={onHide} centered className=' rounded-5 '>
        <div className='signupcontainer'>
        <Modal.Header className=' d-flex flex-column p-2 border-0 '>
          <div className='closebtn '>
            <CloseButton style={{boxShadow:"none"}} onClick={onHide}/>
          </div>
          <Modal.Title id="contained-modal-title-vcenter" className=' text-center'>
            <div className='signin-register'>
                Add Review
            </div>  
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=' d-flex flex-column gap-3 px-0 py-4'>
          <div className=' d-flex align-items-center gap-3'>
            <div>
                <Image src={productData.product_images[0].product_image_url}
                    className=' rounded-4'
                    style={{width:'100px', height:'100px'}}/>
            </div>
            <div className=' '
                style={{fontSize: '14px', fontWeight: '600',textAlign: 'justify'}}>
                <SingleProductTitle name={productData.name}/>
            </div>
          </div>
          <div className='d-flex col-6'>
            {[1,2,3,4,5].map((i,index) => (
              <button key={index} className=" bg-transparent border-0 "
                onClick={() => setStars(i)}>
                  <Image src={stars >= i ? coloredstar : star} style={{height:'30px', width:'30px'}}/>
              </button>
            ))}
          </div>
          <div>
          <Formik
              initialValues={{
                title: productData.review ? productData.review.title : '',
                feedback: productData.review ? productData.review.feedback : '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
                axios.post('https://bargainfox-dev.concettoprojects.com/api/add-reviews',{ 
                  title: values.title,
                  feedback: values.feedback,
                  product_id: productData.id,
                  product_rate:stars,
                })
                .then(response => {
                console.log(response);
                if(response.data.status === 200){
                  setShow(false);
                  isReviewChange(true);
                }
                })
                .catch(error => {
                  console.error(error);
                });
               setSubmitting(false);
              }}
            >
              {({
                 values,
                 handleChange,
                 handleBlur,
                 handleSubmit,
                 isSubmitting,
              }) => (
                 <form onSubmit={handleSubmit} className='d-flex flex-column'>
                    <label htmlFor='title' 
                       className=' text-secondary fs-6 fw-medium mb-1 ' >
                        Add Title
                    </label>
                    <input
                      type="text"
                      id='title'
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      autoCorrect='false'
                      className='signupemail rounded-5 w-100 px-3 py-2 mb-4'
                    />
                    {/* <label htmlFor='uploadPhotos' 
                       className=' text-secondary fs-6 fw-medium mb-1 ' >
                         Add Photos
                    </label>
                    <input
                      type="file"
                      accept='image/png,image/jpeg,image/jpg'
                      id='uploadPhotos'
                      name="uploadPhotos"
                      multiple
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.uploadPhotos}
                      autoCorrect='false'
                      className='signupemail rounded-5 w-100 px-3 py-2 mb-4'
                    /> */}
                    <label htmlFor='feedback' 
                       className=' text-secondary fs-6 fw-medium mb-1 ' >
                       Write Your Review
                    </label>
                   <textarea
                     id='feedback'
                     name="feedback"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.feedback}
                     autoCorrect='false'
                     rows={5}
                     className='signupemail rounded-4 w-100 px-3 py-2 mb-4 '
                   />
                   
                   <button type="submit" disabled={isSubmitting} className='search-icon rounded-5 bg-primary text-light w-100 border-0 py-2 '>
                        Submit Review
                   </button>
                 </form>
               )}
            </Formik>
          </div>
        </Modal.Body>
        </div>
      </Modal>

    </>
  )
}

export default SingleProductReviewPopup




