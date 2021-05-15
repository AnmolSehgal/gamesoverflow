import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";  
import App from "./App";      

//components


const Index = ()=>{
    return (
      <Router>
      <App />
      </Router>
    )

}
ReactDom.render(<Index/>, document.getElementById("root"));