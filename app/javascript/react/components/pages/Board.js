import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getGame, updateBoard } from '../../modules/game'
import conflictChecker from '../../functions/conflictChecker'
import useStyles from '../../styles/boardStyles'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  Grid,
  Card,
  Typography,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import LoadingCard from '../ui/LoadingCard'
import MenuModeToggle from '../ui/MenuModeToggle'
import StatsTracker from '../ui/StatsTracker'

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
    '& .MuiListItemText-primary': {
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

  useEffect(() => { props.getGame(props.match.params.id) }, [])

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [conflicts, setConflicts] = useState([])

  const handleClick = (event) => {
    const x = parseInt(event.currentTarget.id.charAt(0))
    const y = parseInt(event.currentTarget.id.charAt(1))
    setAnchorEl(event.currentTarget);
    setSelectedSquare({ x: x, y: y })
    setConflicts(conflictChecker(props.gameBody, x, y))
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

  let  paperClass = classes.paper4x4
  let  vertDivThinClass = classes.vertDivThin4x4
  let  vertDivThickClass = classes.vertDivThick4x4
  let  horzDivThinClass = classes.horzDivThin4x4
  let  horzDivThickClass = classes.horzDivThick4x4
  let  selectedClass = classes.selected4x4
  let  menuGrid = classes.menuGrid4x4
  let  fontSize = 'h2'
  let  menuGridXs = 6
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
  }

  const reverseDividerRange = Array.from({length: props.boardSize - 1}, (_, i) => i + 1).reverse()

  let boardMap = props.gameBody.rows.map(row => {

    let formRow = row.squares.map(square => {

      const range = Array.from({length: props.boardSize}, (_, i) => i + 1)

      const menuGridOptions = range.map((num) => {
        if (props.easyMenuMode && conflicts.includes(num)) {
          return (
            <Grid item xs={4}>
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

      if (square.given) {
        return (
          <Grid item xs={2.999}>
            <Paper className={paperClass}>
              <Typography variant={fontSize} className={classes.text}>
                <Box fontWeight="fontWeightBold">{square.value}</Box>
              </Typography>
            </Paper>
          </Grid>
        )
      } else {
        return (
          <Grid item xs={2.999}>
            <Paper
              className={paperClass}
              aria-controls="customized-menu"
              aria-haspopup="true"
              color="primary"
              onClick={handleClick}
              id={`${square.x}${square.y}`}
            >
              <Typography variant={fontSize} className={classes.text}>
                <Box fontWeight="fontWeightLight">{square.value}</Box>
              </Typography>
            </Paper>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Grid container spacing={0} className={menuGrid}>
                <Grid item xs={12}>
                  <StyledMenuItem id=' ' onClick={handlePickValue}>
                    <ListItemText primary='?' />
                  </StyledMenuItem>
                </Grid>
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

    return (
      <Grid container item xs={12} spacing={0}>
        {formRow}
      </Grid>
    )
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

  if (anchorEl !== null) {
    anchorEl.className = selectedClass
  }

  let display = <LoadingCard />
  if (props.gameBody.rows.length !== 0) {
    display = boardMap
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.box}>
        <Card className={classes.card}>
          <Grid container spacing={0} className={classes.gridContainer}>
            {display}
          </Grid>
          <StatsTracker />
          <MenuModeToggle />
        </Card>
      </Box>
    </Box>
  )
}

const mapStateToProps = state => {
  return {
    gameBody: state.game.gameBody,
    boardSize: state.game.boardSize,
    isFetching: state.game.isFetching,
    easyMenuMode: state.game.easyMenuMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGame: (gameId) => dispatch(getGame(gameId)),
    updateBoard: (gameData) => dispatch(updateBoard(gameData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
