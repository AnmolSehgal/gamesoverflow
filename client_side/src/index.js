import React from 'react';
import ReactDom from 'react-dom';
//components
import SlideShow from './components/slideshow/SlideShow';
import WideComponent from '../src/components/wideCard/WideComponent';
import { FooterContainer } from './components/react_footer/containers/footer'

import { BrowserRouter as Router } from "react-router-dom";        
import Nav from "./components/navbar/Nav";
import CssBaseline from "@material-ui/core/CssBaseline";
// import FaqPage from '../src/components/faqPage/faqPage';





const App = ()=>{
    return <div>
      <Router>                      
      <CssBaseline />
      <Nav />
    </Router>
        <SlideShow/>

        
      <WideComponent />
      <FooterContainer />
      {/* <FaqPage /> */}
    </div>

}
ReactDom.render(<App/>, document.getElementById("root"));