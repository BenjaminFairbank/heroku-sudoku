import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateBoard } from '../../modules/game'
import conflictChecker from '../../functions/conflictChecker'
import useStyles from '../../styles/boardStyles'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  Grid,
  Typography,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import LoadingCard from '../ui/LoadingCard'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
  list: {
    padding: 0,
    '& .MuiGrid-container':{
      '&:focus': {
        outline: 'none',
      }
    },
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    padding: '0px 16px 0px 14px',
    '& .MuiListItemText-primary': {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    '&:focus': {
      backgroundColor: theme.palette.tertiary.main,
      '& .MuiListItemText-primary': {
        color: theme.palette.common.white,
        fontWeight: 'bold',
      },
    },
  },
}))(MenuItem)

const Board = props => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [conflicts, setConflicts] = useState([])

  const handleClick = (event) => {
    const x = parseInt(event.currentTarget.id.charAt(0))
    const y = parseInt(event.currentTarget.id.charAt(1))
    setAnchorEl(event.currentTarget);
    setSelectedSquare({ x: x, y: y })
    setConflicts(conflictChecker(props.gameBody, props.boardSize, x, y))
  }

  const handleClose = () => {
    if (props.boardSize === 4) {
      anchorEl.className = classes.paper4x4
    } else {
      anchorEl.className = classes.paper9x9
    }
    setAnchorEl(null);
  }

  const handlePickValue = (event) => {
    event.preventDefault()
    props.updateBoard({
      x: selectedSquare.x,
      y: selectedSquare.y,
      value: event.currentTarget.id
    })
    handleClose()
  }

  let paperClass = classes.paper4x4
  let vertDivThinClass = classes.vertDivThin4x4
  let vertDivThickClass = classes.vertDivThick4x4
  let horzDivThinClass = classes.horzDivThin4x4
  let horzDivThickClass = classes.horzDivThick4x4
  let selectedClass = classes.selected4x4
  let menuGrid = classes.menuGrid4x4
  let fontSize = 'h2'
  let menuGridXs = 6
  let noteClass = classes.note4x4
  let noteBox = classes.noteBox4x4
  let textClass = classes.text4x4
  if (props.boardSize === 9) {
    paperClass = classes.paper9x9
    vertDivThinClass = classes.vertDivThin9x9
    vertDivThickClass = classes.vertDivThick9x9
    horzDivThinClass = classes.horzDivThin9x9
    horzDivThickClass = classes.horzDivThick9x9
    selectedClass = classes.selected9x9
    menuGrid = classes.menuGrid9x9
    fontSize = 'h5'
    menuGridXs = 4
    noteBox = classes.noteBox9x9
    noteClass = classes.note9x9
    textClass = classes.text9x9
  }

  const divRange = Array.from({length: props.boardSize - 1}, (_, i) => i + 1)
  const reverseDividerRange = divRange.reverse()

  let boardMap = props.gameBody.rows.map(row => {

    let formRow = row.squares.map(square => {

      const range = Array.from({length: props.boardSize}, (_, i) => i + 1)

      const menuGridOptions = range.map((num) => {
        if (conflicts.includes(num) && (props.easyMenuMode || (props.noteTakingMode && props.autoUpdateNotesMode))) {
          return (
            <Grid item xs={menuGridXs}>
              <Box className={classes.emptyOption}></Box>
            </Grid>
          )
        } else {
          return (
            <Grid item xs={menuGridXs}>
              <StyledMenuItem id={num.toString()} onClick={handlePickValue}>
                <ListItemText primary={num.toString()} />
              </StyledMenuItem>
            </Grid>
          )
        }
      })

      let chooseBlank =
        <Grid item xs={12}>
          <StyledMenuItem id=' ' onClick={handlePickValue}>
            <ListItemText primary='?' />
          </StyledMenuItem>
        </Grid>
      if (props.noteTakingMode) { chooseBlank = ''}

      const notesArray = square.notes.split('').map((note) => {
        if (note === '.') { return ' ' } else { return note }
      })

      const notesGridItems = notesArray.map((note) => {
        return (
          <Grid item xs={menuGridXs}>
            <Box className={noteBox}>
              <Typography className={noteClass}>{note}</Typography>
            </Box>
          </Grid>
        )
      })

      let innerSquare =
        <Typography variant={fontSize} className={textClass}>
          <Box fontWeight="fontWeightLight">{square.value}</Box>
        </Typography>
      if (square.value === ' ') {
        innerSquare = <Grid container>{notesGridItems}</Grid>
      }

      if (square.given) {
        return (
          <Grid item>
            <Paper className={paperClass}>
              <Typography variant={fontSize} className={textClass}>
                <Box fontWeight="fontWeightBold">{square.value}</Box>
              </Typography>
            </Paper>
          </Grid>
        )
      } else {
        let clickFunction = handleClick
        if (props.noteTakingMode && square.value !== ' ') {
          clickFunction = (()=>{})
        }
        return (
          <Grid item>
            <Paper
              className={paperClass}
              aria-controls="customized-menu"
              aria-haspopup="true"
              color="primary"
              onClick={clickFunction}
              id={`${square.x}${square.y}`}
            >
              {innerSquare}
            </Paper>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Grid container spacing={0} className={menuGrid}>
                {chooseBlank}
                {menuGridOptions}
              </Grid>
            </StyledMenu>
          </Grid>
        )
      }
    })

    const smallVerticalDivider = <div className={vertDivThinClass}></div>
    const largeVerticalDivider = <div className={vertDivThickClass}></div>

    reverseDividerRange.forEach((value) => {
      if (value%Math.sqrt(props.boardSize) === 0) {
        formRow.splice(value, 0, largeVerticalDivider)
      } else {
        formRow.splice(value, 0, smallVerticalDivider)
      }
    })

    return <Grid container item xs={12} spacing={0}>{formRow}</Grid>
  })

  const smallHorizontalDivider =
    <Grid container item xs={12} spacing={0}>
      <div className={horzDivThinClass}></div>
    </Grid>

  const largeHorizontalDivider =
    <Grid container item xs={12} spacing={0}>
      <div className={horzDivThickClass}></div>
    </Grid>

  reverseDividerRange.forEach((value) => {
    if (value%Math.sqrt(props.boardSize) === 0) {
      boardMap.splice(value, 0, largeHorizontalDivider)
    } else {
      boardMap.splice(value, 0, smallHorizontalDivider)
    }
  })

  if (anchorEl !== null) { anchorEl.className = selectedClass }

  let display = <LoadingCard />
  if (props.gameBody.rows.length !== 0) { display = boardMap }

  return <Grid container className={classes.gridContainer}>{display}</Grid>
}

const mapStateToProps = state => {
  return {
    gameBody: state.game.gameBody,
    boardSize: state.game.boardSize,
    isFetching: state.game.isFetching,
    easyMenuMode: state.game.easyMenuMode,
    completionData: state.game.completionData,
    noteTakingMode: state.game.noteTakingMode,
    autoUpdateNotesMode: state.game.autoUpdateNotesMode
  }
}

const mapDispatchToProps = dispatch => {
  return { updateBoard: (gameData) => dispatch(updateBoard(gameData)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
