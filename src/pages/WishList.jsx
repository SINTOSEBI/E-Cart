import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';




function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handlewishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div >
      <Row className='ms-5 me-3' style={{marginTop:'150px'}}>
       {wishlistArray?.length>0?
       wishlistArray?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
       <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
       <Card.Body>
         <Card.Title className='fw-bolder' style={{overflowY:'hidden'}}>{item.title.slice(0,20)}...</Card.Title>
         <Card.Text>
           <p>{item.description.slice(0,40)}...</p>
           <p className='fw-bolder'>Price: ₹ {item.price}</p>
         </Card.Text>
         <div className='d-flex align-items-center justify-content-between'>
           <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger rounded"> <i class="fa-solid fa-trash"></i></Button>
           <Button onClick={()=>handlewishlist(item)} variant="outline-success rounded"> <i class="fa-solid fa-cart-plus"></i></Button>
         </div>
       </Card.Body>
     </Card>
       </Col>))
     : <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center mb-5'>
      <img src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="no image" />
      <h4 className='text-danger mt-3 ' style={{overflowY:'hidden'}}>Your wishlist is empty</h4>
      <button className='btn btn-success rounded mt-5' style={{overflowY:'hidden'}}><Link style={{textDecoration:'none',color:'white'}} to={'/'} >Back to Home</Link></button>
     </div>  
    }
    </Row>
    </div>
  )
}

export default WishList