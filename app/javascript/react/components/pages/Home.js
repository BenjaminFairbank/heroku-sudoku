import React from 'react'
import { connect } from 'react-redux'
import { setSize, setDifficulty } from '../../modules/game'
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
  box: {
    textAlign: 'center',
  },
  text1: {
    color: theme.palette.tertiary.main,
    paddingTop: 40,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  card: {
    textAlign: 'center',
    margin: 'auto',
    height: 300,
    width: 250,
    backgroundColor: theme.palette.tertiary.main,
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
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'white',
    },
    '&:focus': {
      color: theme.palette.secondary.main,
      backgroundColor: 'white',
    },
  },
}));


const Home = (props) => {
  const classes = useStyles();

  const handleSizeChange = (event) => {
    props.setSize(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    props.setDifficulty(event.target.value);
  };

  return (
    <Container>
      <Box className={classes.box}>
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
            Board Dimensions
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={props.boardSize}
            onChange={handleSizeChange}
            label="Board Dimensions"
          >
            <MenuItem value={4}>4 x 4</MenuItem>
            <MenuItem value={9}>9 x 9</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Game Difficulty
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={props.gameDifficulty}
            onChange={handleDifficultyChange}
            label="Game Difficulty"
          >
            <MenuItem value={1}>Easy</MenuItem>
            <MenuItem value={2}>Intermediate</MenuItem>
            <MenuItem value={3}>Hard</MenuItem>
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
  )
}

const mapStateToProps = (state) => {
  return {
    boardSize: state.game.boardSize,
    gameDifficulty: state.game.gameDifficulty
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSize: (event) => dispatch(setSize(event)),
    setDifficulty: (event) => dispatch(setDifficulty(event))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
