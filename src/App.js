import React from 'react';
import Home from "./Home";

import Nav from "./components/navbar/Nav";
import CssBaseline from "@material-ui/core/CssBaseline";
import { FooterContainer } from './components/react_footer/containers/footer'
import FaqPage from '../src/components/faqPage/faqPage';
import Login from './components/login/mainForm'

import { Route, Switch } from "react-router-dom";



const App = () => {
    return (        
    <div style={{backgroundColor: '#131313'}} className="App">                   
      <CssBaseline />
      <Nav />
      <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact  path="/faq"  render={(props) => <FaqPage {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
        
        </Switch>
      <FooterContainer />

        </div>
    )
}

export default App;