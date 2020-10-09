import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Container,
  Box,
  Grid,
  Paper,
  Button,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select
} from "@material-ui/core";
import GridOnIcon from '@material-ui/icons/GridOn'

const useStyles = makeStyles((theme) => ({
  root: {

  },
  box1: {
    textAlign: 'center',
  },
  text1: {
    color: '#a6bdf7',
    paddingTop: 40,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  card: {
    textAlign: 'center',
    margin: 'auto',
    height: 300,
    width: 250,
    backgroundColor: '#a6bdf7',
  },
  text2: {
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  button: {
    margin: theme.spacing(2),
    minWidth: 140,
    color: 'white',
  }
}));


const Home = (props) => {
  const classes = useStyles();
  const [difficulty, setDifficulty] = useState(1);
  const [size, setSize] = useState(1);

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  // const startGame = (diff, siz) => {
  //
  // }

  return (
    <div className={classes.root}>
      <Container>
        <Box className={classes.box1}>
          <Typography variant="h5" className={classes.text1}>
            Welcome to Heroku Sudoku!
          </Typography>
        </Box>
        <Paper elevation={3} className={classes.card}>
          <Typography variant="h5" className={classes.text2}>
            Begin playing
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Difficulty
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={difficulty}
              onChange={handleDifficultyChange}
              label="Difficulty"
            >
              <MenuItem value={1}>Easy</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>Hard</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={size}
              onChange={handleSizeChange}
              label="Size"
            >
              <MenuItem value={1}>Small</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>Large</MenuItem>
            </Select>
          </FormControl>
          <Button
            component={Link}
            to='/play'
            size="large"
            variant="contained"
            color="secondary"
            endIcon={<GridOnIcon />}
            className={classes.button}
          >
            Play
          </Button>
        </Paper>
      </Container>
    </div>
  )
}

export default Home
