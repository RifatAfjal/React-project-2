import React from 'react';
import{ makeStyles, Typography, Grid, Card, Button, CardContent, CardActions} from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  root: {
    height:"100%",
    boxShadow:"5px 15px 20px rgba(0,0,0,0.3",
    border: "3px solid black"
  }
}));

const PostDesign = (props) => {
    const {title,body,id} = props.data;
    const classes = useStyles();
    return (
        <>
        <Grid item xs={12} md={6} >
            <Card  className={classes.root}>
                <CardContent align="center">
                  <Typography gutterBottom variant="h5" component="h2">
                     {title}
                  </Typography>
                  <Typography variant="body2" component="p">
                     {body}
                  </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                  <Link to={"/post/"+id} style={{textDecoration:"none"}} > 
                    <Button variant="contained" color="secondary">
                      See more
                    </Button>
                  </Link>
                </CardActions>
            </Card>
        </Grid>
        </>
    );
};

export default PostDesign;