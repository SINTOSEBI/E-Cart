import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div style={{height:'300px',color:'white'}} className='d-flex justify-content-center align-items-center w-100 flex-column bg-primary'>
      <div className='d-flex justify-content-evenly align-items-center w-100'>
        <div className="websites" style={{width:'400px'}}>
          <h4 className='mb-3' style={{overflowY:'hidden'}}>
          <i class="fa-solid fa-cart-shopping me-2"></i>
            E-CART
          </h4>
          <h6 style={{overflowY:'hidden'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ut reiciendis expedita reprehenderit illo autem illum optio nihil quaerat dolorem, </h6>
          <h6 style={{overflowY:'hidden'}}>accusamus a ea quod similique nisi ex impedit amet voluptate?</h6>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-3' style={{overflowY:'hidden'}}>Links</h4>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link>
          <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>Wish List</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h4 className='mb-3' style={{overflowY:'hidden'}}>Guides</h4>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>Bootswatch</Link>
        </div >
        <div className="contacts d-flex flex-column">
          <h4 className='mb-3' style={{overflowY:'hidden'}}>Contact Us</h4>
          <div className='d-flex mb-2'>
          <input type="text" className='form-control rounded' placeholder='Enter your ID' />
          <button className='btn btn-warning ms-2 align-items-center justify-content-center d-flex p-3 rounded'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center'>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>

          <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
      </div>
      <p className='mt-5'>Copyright © 2023 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer