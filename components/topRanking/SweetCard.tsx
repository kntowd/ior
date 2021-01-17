import React from 'react';
import {
  Button, Card, CardContent, CardHeader, CardMedia, Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cards: {
    margin: '30px 0',
  },
  cardContent: {
    color: 'white',
    backgroundColor: '#270000',
  },
  cardHeader: {
    textAlign: 'left',
  },
  cardRating: {
    textAlign: 'right',
  },
  cardButton: {
    color: '#FFAA01',
    margin: '15px 0',
    border: '1px solid #FFAA01',
    borderRadius: '18px',
  },
}));

type props = {filePath: string}

const SweetCard:React.FC<props> = ({ filePath }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title="じゃがりこ"
        className={`${classes.cardContent} ${classes.cardHeader}`}
      />
      <CardContent className={`${classes.cardContent} ${classes.cardRating}`}>
        <Rating
          value={3.5}
        />
      </CardContent>
      <CardMedia
        component="img"
        src={filePath}
      />
      <CardContent className={`${classes.cardContent} ${classes.cardRating}`}>
        <Typography>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <Button className={classes.cardButton}>
          + もっと見る
        </Button>
      </CardContent>
    </Card>
  );
};

export default SweetCard;