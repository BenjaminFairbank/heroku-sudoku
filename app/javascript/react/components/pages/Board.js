import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGame, updateBoard } from '../../modules/game'
import conflictChecker from '../../functions/conflictChecker'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Container,
  Paper,
  Grid,
  Card,
  Typography,
  CardMedia,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
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
));

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
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 100,
  },
  box: {
    height: 340,
    width: 340,
    margin: 'auto',
  },
  card: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: theme.palette.tertiary.main,
  },
  paper4x4: {
    height: 77,
    width: 77,
    textAlign: 'center',
    paddingTop: 5,
    backgroundColor: theme.palette.quaternary.main,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  paper9x9: {
    height: 34,
    width: 34,
    textAlign: 'center',
    paddingTop: 2,
    backgroundColor: theme.palette.quaternary.main,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  gridContainer: {
    height: 320,
    width: 320,
    margin: 'auto',
  },
  text: {
    color: 'white',
  },
  vertDivThick4x4: {
    backgroundColor: theme.palette.tertiary.main,
    width: 6,
  },
  vertDivThin4x4: {
    backgroundColor: theme.palette.tertiary.main,
    width: 3,
  },
  horzDivThick4x4: {
    backgroundColor: theme.palette.tertiary.main,
    height: 6,
  },
  horzDivThin4x4: {
    backgroundColor: theme.palette.tertiary.main,
    height: 3,
  },
  vertDivThick9x9: {
    backgroundColor: theme.palette.tertiary.main,
    width: 4,
  },
  vertDivThin9x9: {
    backgroundColor: theme.palette.tertiary.main,
    width: 1,
  },
  horzDivThick9x9: {
    backgroundColor: theme.palette.tertiary.main,
    height: 4,
  },
  horzDivThin9x9: {
    backgroundColor: theme.palette.tertiary.main,
    height: 1,
  },
  loading: {
    height: 320,
    width: 320,
  },
  grid: {
    width: 84,
  },
  selected4x4: {
    height: 77,
    width: 77,
    textAlign: 'center',
    backgroundColor: theme.palette.quinary.main,
    paddingTop: 5,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  selected9x9: {
    height: 34,
    width: 34,
    textAlign: 'center',
    paddingTop: 2,
    backgroundColor: theme.palette.quinary.main,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
}));

const Board = props => {
  const classes = useStyles()

  useEffect(() => { props.getGame(props.match.params.id) }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedSquare, setSelectedSquare] = React.useState(null);
  // const [conflicts, setConflicts] = React.useState([])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelectedSquare({ x: parseInt(event.currentTarget.id.charAt(0)), y: parseInt(event.currentTarget.id.charAt(1)) })
    // setConflicts(conflictChecker(props.gameBody, parseInt(event.currentTarget.id.charAt(0)), parseInt(event.currentTarget.id.charAt(1))))
  };

  const handleClose = () => {
    if (props.boardSize === 4) {
      anchorEl.className = classes.paper4x4
    } else {
      anchorEl.className = classes.paper9x9
    }
    setAnchorEl(null);
  };

  const handlePickValue = (event) => {
    event.preventDefault()
    props.updateBoard({
      x: selectedSquare.x,
      y: selectedSquare.y,
      value: event.currentTarget.id
    })
    handleClose()
  }

  let paperClass
  let vertDivThinClass
  let vertDivThickClass
  let horzDivThinClass
  let horzDivThickClass
  let selectedClass
  if (props.boardSize === 4) {
    paperClass = classes.paper4x4
    vertDivThinClass = classes.vertDivThin4x4
    vertDivThickClass = classes.vertDivThick4x4
    horzDivThinClass = classes.horzDivThin4x4
    horzDivThickClass = classes.horzDivThick4x4
    selectedClass = classes.selected4x4
  } else {
    paperClass = classes.paper9x9
    vertDivThinClass = classes.vertDivThin9x9
    vertDivThickClass = classes.vertDivThick9x9
    horzDivThinClass = classes.horzDivThin9x9
    horzDivThickClass = classes.horzDivThick9x9
    selectedClass = classes.selected9x9
  }

  const reverseDividerRange = Array.from({length: props.boardSize - 1}, (_, i) => i + 1).reverse()

  let boardMap = props.gameBody.rows.map(row => {

    let formRow = row.squares.map(square => {

      const range = Array.from({length: row.squares.length}, (_, i) => i + 1)

      const menuGridOptions = range.map((num) => {
        // if (conflicts.includes(num)) {
        //   return (
        //     <Grid item xs={4}>
        //       <StyledMenuItem id={num.toString()}>
        //         <ListItemText primary='&nbsp;' />
        //       </StyledMenuItem>
        //     </Grid>
        //   )
        // } else {
          return (
            <Grid item xs={4}>
              <StyledMenuItem id={num.toString()} onClick={handlePickValue}>
                <ListItemText primary={num.toString()} />
              </StyledMenuItem>
            </Grid>
          )
        // }
      })

      if (square.given) {
        return (
          <Grid item xs={2.999}>
            <Paper className={paperClass}>
              <Typography variant='h6' className={classes.text}>
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
              <Typography variant='h6' className={classes.text}>
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
              <Grid container spacing={0} className={classes.grid}>
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
      if (value%3 === 0) {
        formRow.splice(value, 0, largeVerticalDivider)
      } else {
        formRow.splice(value, 0, smallVerticalDivider)
      }
    });

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
    if (value%3 === 0) {
      boardMap.splice(value, 0, largeHorizontalDivider)
    } else {
      boardMap.splice(value, 0, smallHorizontalDivider)
    }
  });

  if (anchorEl !== null) {
    anchorEl.className = classes.selectedClass
  }

  let display
  if (props.gameBody.rows.length === 0) {
    display =
      <Card>
        <CardMedia
          image="https://s3.amazonaws.com/horizon-production/images/redux/loading-icon.gif"
          alt="loading-icon"
          className={classes.loading}
        ></CardMedia>
      </Card>
  } else {
    display = boardMap
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Card className={classes.card}>
          <Grid container spacing={0} className={classes.gridContainer}>
            {display}
          </Grid>
        </Card>
      </Box>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    gameBody: state.game.gameBody,
    boardSize: state.game.boardSize,
    isFetching: state.game.isFetching,
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
