import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxHeight: 450,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard(props) {

  const classes = useStyles();
  //console.log(props.data);

 const clickHandler = async  () => {
  const x=localStorage.getItem("token");
  //console.log(x);
  const payload={
    productId:props.data.productId,
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
   // console.log(a);
  }
   
  


  return (
    <Card style={{backgroundColor: '#131313',margin:'10px'}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://localhost:8000${props.img}`}
          title="Contemplative Reptile"
        />
        <CardContent style={{backgroundColor: '#131313',color:'#c2c2c2'}}>
          <Typography gutterBottom variant="h7" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{backgroundColor: '#131313'}}>
        <Button onClick={ clickHandler} size="small"  style={{backgroundColor:'#0078f2',color:'#c2c2c2'}}>
          Buy Now
        </Button>
        <Button  style={{color:'#c2c2c2'}} size="medium">
          ${props.price}
        </Button>
      </CardActions>
    </Card>
  );
}








//const config = {
  //     headers: {
  //        'Content-type':'Application/json',
  //       Authorization: `Bearer ${x}` 
  //     }
  // };
  //     const bodyParameters = {
  //       productId:props.data.productId,
  //     quantity:1
  //    };


//   axios.post( 
  //       'http://localhost:8000/cart/addToCart',
  //       config,
  //       bodyParameters 
  //     )
  //     .then( ( response ) => {
  //       console.log( response )
  //     } )
  //     .catch((err)=>console.log(err))
  // }































