import React from 'react';
import Card from '../card/card';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} lg={3} md={4}>
          <Card 
          img="https://static01.nyt.com/images/2020/12/24/obituaries/Menem-05a-esp-1/Menem-05a-superJumbo.jpg" 
          tittle="el rey de reyes" 
          description="unico e inigualable"
          price={332}
           />
        </Grid>
        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>

        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>

        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>
        <Grid item xs={6} lg={3} md={4}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}
