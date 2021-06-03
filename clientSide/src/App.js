import React,{ useState,useEffect } from 'react';
import Home from "./Home";

import Nav from "./components/navbar/Nav";
import CssBaseline from "@material-ui/core/CssBaseline";
import { FooterContainer } from './components/react_footer/containers/footer'
import FaqPage from '../src/components/faqPage/faqPage';
import Login from './components/login/mainForm'
import Games from "./components/Browse/Games";
import CartComponent from "./components/cart/CartComponent";

// Temporary data
//import Datas from './objects/trendingDetails'; 


import { Route, Switch } from "react-router-dom";
import axios from "axios";




const App = () => {

   const [datas,setDatas] = useState([]);

  useEffect(() =>{
    const fetchData =  async  () =>{

         //axios.get("http://localhost:8000/product/read").then((res)=>setDatas(res.data)).catch((err)=>console.log(err));
         
         const value = await axios("http://localhost:8000/product/read");
        setDatas(value.data);
        //setToken(value.data[0]);
        //console.log(value.data);

      }
    fetchData();
    
  },[]);

        //console.log(value.data);
  

  //Extracting Temporary Data
  //const { products } = Datas;
  const [cartItems, setCartItems] = useState([]);

  

  const removeHandler = async (item) => {
    const x=localStorage.getItem("token");
    const payload={
      productId:item.productId,
      quantity:-1
    }
    
  
     const val = fetch("http://localhost:8000/cart/delete",{
        method:'POST',
        headers:{
          Authorization: `Bearer ${x}` ,
          'Content-type':'application/json'
        },
        body: JSON.stringify(payload)
      })
      const a=await val
      console.log(a);
   }

   const addHandler = async (item) => {
    const x=localStorage.getItem("token");
    const payload={
      productId:item.productId,
      quantity:1
    }
    
  
     const val = fetch("http://localhost:8000/cart/addToCart",{
        method:'POST',
        headers:{
          Authorization: `Bearer ${x}` ,
          'Content-type':'application/json'
        },
        body: JSON.stringify(payload)
      })
      const a=await val
   }


    return (        
    <div style={{backgroundColor: '#131313'}} className="App">                   
      <CssBaseline />
      <Nav />
      <Switch>
      <Route exact path="/" render={(props) => <Home datas={datas} {...props} />} />
      <Route exact path="/faq" render={(props) => <FaqPage {...props} />} />
      <Route exact path="/browse" render={(props) =>  <Games  datas={datas} {...props} />} />
        <Route exact  path="/cart"  render={(props) => <CartComponent cartItems={cartItems}
        addHandler={addHandler}
        removeHandler={removeHandler}  {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
        
        </Switch>
      <FooterContainer />

        </div>
    )
}

export default App;