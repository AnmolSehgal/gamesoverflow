import React,{ useEffect, useState} from 'react';
import './carts.css';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";




 function CartComponent({addHandler, removeHandler, car,  cartItems}) {

  const [ fetchedData, setFetchedData] = useState([]);
  const x=localStorage.getItem("token");
  //console.log(x);
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  useEffect(()=>{
    const fetchData = async () => {

    const x=localStorage.getItem("token");
      
      const data = await fetch("http://localhost:8000/cart/getCart",{
        method:'GET',
        headers:{
          Authorization: `Bearer ${x}` ,
          'Accept':'application/json',
          'Content-type':'application/json'
        },
      })
      const val= await data.json();
      setFetchedData(val);
      //console.log(val);

    }


    fetchData();

  },[]);

  useEffect( ()=>{
    const fetchData = async () => {

      const x=localStorage.getItem("token");
        
        const data = await fetch("http://localhost:8000/cart/getCart",{
          method:'GET',
          headers:{
            Authorization: `Bearer ${x}` ,
            'Accept':'application/json',
            'Content-type':'application/json'
          },
        })
        const val= await data.json();
        setFetchedData(val);
        console.log(val);
  
      }
      fetchData();
  
    },[car]
  );

    const checkoutHandler = async () => {
      const x=localStorage.getItem("token");
      
      const data = await fetch("http://localhost:8000/order/checkout",{
        method:'POST',
        headers:{
          Authorization: `Bearer ${x}` ,
          'Accept':'application/json',
          'Content-type':'application/json'
        },
      })
    //console.log(data);

    }


  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.productPrice, 0);
  const taxPrice = itemsPrice * 0.14;
  let totalPrice = 0;
  const shippingPrice = totalPrice > 2000 ? 0 : 20;
   totalPrice = itemsPrice + taxPrice + shippingPrice;
   if(!x || x==undefined){
    return (
      <button style={{margin:'1rem 0rem',fontSize:'2.5rem'}} type="button" onClick={handleClick}>
        Please Log-In
      </button>
    );
   }

   if(fetchedData === null)
   return (
    <div style={{backgroundColor:'#131313',color:'#cccccc'}}  className="block col-1">
    <h2 style={{fontSize:'3.5rem',backgroundColor:'#131313',color:'#cccccc'}}>Cart Items</h2>
    <div>
      {fetchedData === null && <div style={{fontSize:'2.5rem'}}>Cart is empty<HourglassEmptyIcon/></div>}
      </div>
      </div>
   );

  


   

  return (

    <div style={{backgroundColor:'#131313',color:'#cccccc'}}  className="block col-1">
      <h2 style={{fontSize:'3.5rem',backgroundColor:'#131313',color:'#cccccc'}}>Cart Items</h2>
      <div>
        {/* {fetchedData.length === null && <div style={{fontSize:'2.5rem'}}>Cart is empty<HourglassEmptyIcon/></div>} */}
        {fetchedData.map((item) => (
          <div  style={{fontSize:'2rem',padding:'1rem 0rem'}} key={item.productId} className="row">
            <Box>
                <Img className="col-2"><img src={`http://localhost:8000${item.productImage}`} alt={item._id} /></Img>
                <div className="col-2">{item.productName}</div>
            </Box>
            <div className="col-2">
                <Button style={{color:'#c2c2c2'}} onClick={()=> removeHandler(item)} className="remove">
                -
                </Button>{' '}
                <Button style={{backgroundColor:'#0078f2',color:'#c2c2c2'}} onClick={() => addHandler(item)} className="add">
                +
                </Button>
            </div>

            <div className="col-2 text-right">
                {item.quantity} x ${item.price.toFixed(2)}
            </div>
          </div>
          
        ))}

        { (
          <>
            <hr></hr>
            {/* <Row style={{fontSize:'2rem'}}>
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
            </Row> */}

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
              <Button style={{backgroundColor:'#0078f2',color:'#c2c2c2',margin:'1rem 0rem'}}  onClick={ checkoutHandler }>
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