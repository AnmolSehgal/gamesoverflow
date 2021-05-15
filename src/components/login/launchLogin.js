import React from 'react';
  import { Grid } from '@material-ui/core'
import Login from '../login/login.js' 

  export default function LaunchLogin(props){
      return (
        <div style={{backgroundImage: `url("/images/image.png")`,backgroundSize: '100%',height:'810px'}}>
          <Login />
        </div>    
      )
  }