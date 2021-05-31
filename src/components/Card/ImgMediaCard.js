import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Rodal from 'rodal'
import 'rodal/lib/rodal.css';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import './ImgMediaCard.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 405,
   }
});


export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [visible, setVisible] = useState(0);

  function openDisc() {
    alert(visible);
  }

  function show() {
    setVisible(visible + 1)
  }

  function hide() {
    setVisible(visible - 1)
  }
  return (
    <Card className={classes.root}>

      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={props.avatar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="" component="p">
            {props.disc.substr(0, 50) + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => setVisible(visible + 1)} size="small" color="primary">
          Подробнее
        </Button>
        <Rodal className="RodalContainer" visible={visible} onClose={hide} autoBlur="true" height="450">
          <div class="container">

            {/* <img class="ima"
              height="500"
              width="500"
              src={props.avatar}
            /> */}
            <div class="content">
              <h2><a href={props.href}>Посмотреть другие фото</a></h2>
              <h8 style={{ overflowY: "scroll" }}>{props.disc}</h8>
            </div>
          </div>
        </Rodal>
      </CardActions>
    </Card>
  );
}