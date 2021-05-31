// import React from "react";
// import "./Game.css";

// const MediaCard = ({img, name, price}) => {
//   return (
//     <div className="grid">
//       <div className="grid-item">
//         <div className="card">
//           <img className="card-img" src={img} alt="Rome" />
//           <div className="card-content">
//             <h1 className="card-header">{name}</h1>
            
//             <button className="card-btn">Visit <span>&rarr;</span></button>
//           </div>
//         </div>
//       </div><div className="grid-item">
//         <div className="card">
//           <img className="card-img" src={img} alt="Rome" />
//           <div className="card-content">
//             <h1 className="card-header">{name}</h1>
            
//             <button className="card-btn">Visit <span>&rarr;</span></button>
//           </div>
//         </div>
//       </div><div className="grid-item">
//         <div className="card">
//           <img className="card-img" src={img} alt="Rome" />
//           <div className="card-content">
//             <h1 className="card-header">{name}</h1>
//             <button className="card-btn">Visit <span>&rarr;</span></button>
//           </div>
//         </div>
//       </div>
// </div>
//   );
// };

// export default MediaCard;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
 // console.log(props.data);

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
        <Button onClick={ ()=> props.onAdd(props.data)} size="small"  style={{backgroundColor:'#0078f2',color:'#c2c2c2'}}>
          Buy Now
        </Button>
        <Button  style={{color:'#c2c2c2'}} size="medium">
          ${props.price}
        </Button>
      </CardActions>
    </Card>
  );
}











































