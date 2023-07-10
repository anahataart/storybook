import React from "react";
import { styled } from '@mui/system';
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const useStyles = styled({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CustomCard({
  title,
  altText,
  description,
  thumbnail,
  firstBtn,
  lastBtn,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={thumbnail} alt={altText} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {firstBtn}
        </Button>
        <Button size="small" color="primary">
          {lastBtn}
        </Button>
      </CardActions>
    </Card>
  );
}