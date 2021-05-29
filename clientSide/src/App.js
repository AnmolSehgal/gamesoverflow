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
         //return pro.data;
    setDatas(value.data);
    //console.log(pro.data);

         
    }
    fetchData();
   //console.log(data);
  },[]);

  //Extracting Temporary Data
  //const { products } = Datas;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...x, qty: x.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    console.log(cartItems);
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


    return (        
    <div style={{backgroundColor: '#131313'}} className="App">                   
      <CssBaseline />
      <Nav />
      <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/faq" render={(props) => <FaqPage {...props} />} />
      <Route exact path="/browse" render={(props) =>  <Games onAdd={onAdd} datas={datas} {...props} />} />
        <Route exact  path="/cart"  render={(props) => <CartComponent cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}  {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
        
        </Switch>
      <FooterContainer />

        </div>
    )
}

export default App;