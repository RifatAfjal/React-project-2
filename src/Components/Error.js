import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
      boxShadow:"5px 15px 20px rgba(0,0,0,0.3)",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    }
  }));

const Error = () => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                       404 error,Page not fount.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        please use a valid key for getting result.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default Error;