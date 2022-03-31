import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setSize, setDifficulty, resetGame } from '../../modules/game'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import MUILink from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

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
}))

const Home = (props) => {
  const classes = useStyles()

  useEffect(() => {
    props.resetGame()
  }, [])

  const handleSizeChange = (event) => {
    props.setSize(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    props.setDifficulty(event.target.value);
  };

  return (
    <Container>
      <Box className={classes.box}>
        <Typography variant="h4" className={classes.text1}>
          Welcome to Heroku Sudoku!
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Typography variant="h6">
          Unfortunately, the API used to provide this app with fresh new games has been discontinued!
        </Typography>
        <Typography variant="caption">
          You can still enjoy a limited selection of games which are still available to play by following the links below:
        </Typography><br/><br/>
        <MUILink href="/games/68" underline="hover">{'Game 68 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/69" underline="hover">{'Game 69 (Intermediate - 4x4)'}</MUILink><br/>
        <MUILink href="/games/70" underline="hover">{'Game 70 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/71" underline="hover">{'Game 71 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/72" underline="hover">{'Game 72 (Hard - 9x9)'}</MUILink><br/>
        <MUILink href="/games/73" underline="hover">{'Game 73 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/74" underline="hover">{'Game 74 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/75" underline="hover">{'Game 75 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/76" underline="hover">{'Game 76 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/77" underline="hover">{'Game 77 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/78" underline="hover">{'Game 78 (Easy - 4x4)'}</MUILink><br/>
        <MUILink href="/games/79" underline="hover">{'Game 79 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/80" underline="hover">{'Game 80 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/81" underline="hover">{'Game 81 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/82" underline="hover">{'Game 82 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/83" underline="hover">{'Game 83 (Hard - 9x9)'}</MUILink><br/>
        <MUILink href="/games/84" underline="hover">{'Game 84 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/85" underline="hover">{'Game 85 (Easy - 4x4)'}</MUILink><br/>
        <MUILink href="/games/86" underline="hover">{'Game 86 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/87" underline="hover">{'Game 87 (Intermediate - 9x9)'}</MUILink><br/>
        <MUILink href="/games/88" underline="hover">{'Game 88 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/89" underline="hover">{'Game 89 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/90" underline="hover">{'Game 90 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/91" underline="hover">{'Game 91 (Intermediate - 4x4)'}</MUILink><br/>
        <MUILink href="/games/92" underline="hover">{'Game 92 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/93" underline="hover">{'Game 93 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/94" underline="hover">{'Game 94 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/95" underline="hover">{'Game 95 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/96" underline="hover">{'Game 96 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/97" underline="hover">{'Game 97 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/130" underline="hover">{'Game 130 (Easy - 4x4)'}</MUILink><br/>
        <MUILink href="/games/131" underline="hover">{'Game 131 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/132" underline="hover">{'Game 132 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/133" underline="hover">{'Game 133 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/134" underline="hover">{'Game 134 (Easy - 4x4)'}</MUILink><br/>
        <MUILink href="/games/135" underline="hover">{'Game 135 (Intermediate - 4x4)'}</MUILink><br/>
        <MUILink href="/games/136" underline="hover">{'Game 136 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/137" underline="hover">{'Game 137 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/138" underline="hover">{'Game 138 (Intermediate - 4x4)'}</MUILink><br/>
        <MUILink href="/games/139" underline="hover">{'Game 139 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/140" underline="hover">{'Game 140 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/141" underline="hover">{'Game 141 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/142" underline="hover">{'Game 142 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/143" underline="hover">{'Game 143 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/144" underline="hover">{'Game 144 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/145" underline="hover">{'Game 145 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/146" underline="hover">{'Game 146 (Intermediate - 4x4)'}</MUILink><br/>
        <MUILink href="/games/147" underline="hover">{'Game 147 (Hard - 4x4)'}</MUILink><br/>
        <MUILink href="/games/148" underline="hover">{'Game 148 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/149" underline="hover">{'Game 149 (Intermediate - 4x4)'}</MUILink><br/>
        <MUILink href="/games/150" underline="hover">{'Game 150 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/151" underline="hover">{'Game 151 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/152" underline="hover">{'Game 152 (Intermediate - 4x4)'}</MUILink><br/>
        <MUILink href="/games/153" underline="hover">{'Game 153 (Easy - 9x9)'}</MUILink><br/>
        <MUILink href="/games/154" underline="hover">{'Game 154 (Easy - 4x4)'}</MUILink><br/>
        <MUILink href="/games/155" underline="hover">{'Game 155 (Easy - 9x9)'}</MUILink><br/><br/>
        <Typography variant="caption">
          Please forgive the inconvenience!  Heroku Sudoku will be back up and running as soon as a new workable API can be integrated.
        </Typography><br/><br/>
      </Box>
      <br/><br/>
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
          disabled
          component={Link}
          to='/games/new'
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
    setDifficulty: (event) => dispatch(setDifficulty(event)),
    resetGame: () => dispatch(resetGame())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
