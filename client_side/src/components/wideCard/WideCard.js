import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 380,
  },
  media: {
    height: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={props.imgSrc}
          title="Contemplative Reptile"
        />
        <CardContent style={{backgroundColor: '#4D4D4D', color: '#F0F0F0', maxWidth: 'auto'}}>
          <Typography style={{height: '60px', fontWeight: '600', fontSize: '24px'}} gutterBottom variant="h5" component="h2">
            {props.heading}
          </Typography>
          <Typography style={{height: '60px', fontWeight: '400', fontSize: '14px'}} variant="body2" component="p">
            {props.about}
          </Typography>
          <Typography style={{height: '40px', fontWeight: '500', fontSize: '14px'}} variant="body2" component="p">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
