import '../../../src/App.css'
import main_logo from '../../assets/main-logo.png'
import search from '../../assets/search-normal.png'
import heart from '../../assets/wishlist.png'
import shopping_cart from '../../assets/shopping-cart.png'
import user from '../../assets/user.png'

function Header() {
  return (
    <div>
        <nav className="navbar shadow-sm ">
            <div className="container-fluid">
                <div className="logo w-auto ">
                    <img src={main_logo}/>
                </div>
                <div className="search">
                <form className="d-flex" role="search">
                  <input className="form-control rounded-start-2 rounded-end-0 " type="search" placeholder="Search Products" aria-label="Search"/>
                  <button className="btn search-icon btn-outline-success bg-body#FF7900 rounded-end-2 rounded-start-0" type="submit">
                    <img src={search}/>
                  </button>
                </form>
                </div>
                <div className='right-nav d-flex align-items-center'>
                  <div className='wishlist'>
                    <button className='heart border-0 bg-body '>
                      <img src={heart}/>
                    </button>
                  </div>
                  <div className='cart'>
                    <button className='cart border-0 bg-body '>
                      <img src={shopping_cart}/>
                    </button>
                  </div>
                  <div className="Login d-flex align-items-center">
                    <button className='user border-0 bg-body '>
                      <img src={user}/>
                    </button>
                    <div className='signin'>
                      <p className='mb-0 fs-6'>Hello there,</p>
                      <span className='fw-bold'>SIGN IN/REGISTER</span>
                    </div>
                  </div>
                </div>
            </div>
        </nav>

    </div>   
  )
}

export default Header
