import React from 'react';
  import MainCard from './card(A)'
  import { Grid } from '@material-ui/core'
import Detail from './details.json'; 

  export default function LaunchCard(props){
      return (
        <div style={{marginTop:'80px',backgroundColor: '#131313'}}>
        <Grid container spacing={3}>

          {Detail.map((item,index)=>{
        return (
          <Grid item xs={12} sm={6} md={4} lg={3}>
          <MainCard image={item.img} name={item.name} disc={item.disc} />
          </Grid>
        )})}

        </Grid> 
        <br></br><br></br>
        </div>
      )
  }



