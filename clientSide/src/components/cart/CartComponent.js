import React from 'react';
import './carts.css';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { useHistory } from "react-router-dom";



 function CartComponent(props) {

  const x=localStorage.getItem("token");
  console.log(x);
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }


  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.productPrice, 0);
  const taxPrice = itemsPrice * 0.14;
  let totalPrice = 0;
  const shippingPrice = totalPrice > 2000 ? 0 : 20;
   totalPrice = itemsPrice + taxPrice + shippingPrice;
   if(!x || x==undefined){
    return (
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    );
   }

  return (

    <div style={{backgroundColor:'#131313',color:'#cccccc'}}  className="block col-1">
      <h2 style={{fontSize:'3.5rem',backgroundColor:'#131313',color:'#cccccc'}}>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div style={{fontSize:'2.5rem'}}>Cart is empty<HourglassEmptyIcon/></div>}
        {cartItems.map((item) => (
          <div  style={{fontSize:'2rem',padding:'1rem 0rem'}} key={item._id} className="row">
            <Box>
                <Img className="col-2"><img src={`http://localhost:8000${item.productImage}`} alt={item.productName} /></Img>
                <div className="col-2">{item.productName}</div>
            </Box>
            <div className="col-2">
                <Button style={{color:'#c2c2c2'}} onClick={() => onRemove(item)} className="remove">
                -
                </Button>{' '}
                <Button style={{backgroundColor:'#0078f2',color:'#c2c2c2'}} onClick={() => onAdd(item)} className="add">
                +
                </Button>
            </div>

            <div className="col-2 text-right">
                {item.qty} x ${item.productPrice.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <Row style={{fontSize:'2rem'}}>
              <div className="col-2">Items Price :</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </Row>
            <Row style={{fontSize:'2rem'}}>
              <div className="col-2">Tax Price :</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </Row>
            <Row style={{fontSize:'2rem'}}>
              <div className="col-2">Shipping Price :</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </Row>

            <Row style={{fontSize:'2rem'}}>
              <div className="col-2">
                <strong>Total Price :</strong>
              </div>
              <div style={{fontSize:'2rem'}} className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </Row>
            <hr />
            <div className="row">
              <Button style={{backgroundColor:'#0078f2',color:'#c2c2c2',margin:'1rem 0rem'}}  onClick={() => alert('Implement Checkout!')}>
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


const Row = styled.div`
 display: flex;
 justify-content: center;
 padding: 1rem 0rem;
`
const Img = styled.div`
width:10rem;
height:10rem;
display:flex;
    justify-content: center;
img{
    
 width:100%;
 height:100%;
 object-fit: cover;
}
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default CartComponent;