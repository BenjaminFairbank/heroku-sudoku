import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  box1: {
    textAlign: 'center',
  },
  text1: {
    color: '#a6bdf7',
    paddingTop: 35,
    marginBottom: 35,
    fontWeight: 'bold',
  },
  box2: {
    textAlign: 'center',
    margin: 'auto',
    height: 400,
    width: 400,
    backgroundColor: '#a6bdf7',
  },
  text2: {
    paddingTop: 180,
    color: 'white',
  }
}));


const Home = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Box className={classes.box1}>
          <Typography variant="h5" className={classes.text1}>Welcome to Heroku Sudoku!</Typography>
        </Box>
        <Paper elevation={3} className={classes.box2}>
          <Typography variant="h5" className={classes.text2}>Welcome to Heroku Sudoku!</Typography>
        </Paper>
      </Container>
    </div>
  )
}

export default Home
