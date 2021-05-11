import React from 'react';
import ReactDom from 'react-dom';
import SlideShow from './components/slideshow/SlideShow'


// import { BrowserRouter as Router } from "react-router-dom";           { impoting files for Nav files }
// import Nav from "./components/navbar/Nav";
// import CssBaseline from "@material-ui/core/CssBaseline";




const App = ()=>{
    return <div>
        <SlideShow/>

        {/* <Router>                         { using components for Nav}
      <CssBaseline />
      <Nav />
    </Router> */}

    </div>
}
ReactDom.render(<App/>, document.getElementById("root"));