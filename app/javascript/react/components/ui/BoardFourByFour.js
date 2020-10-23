import React from 'react'
import { connect } from 'react-redux'
import { updateBoard } from '../../modules/game'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
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
  card: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: theme.palette.tertiary.main,
  },
  paper: {
    height: 77,
    width: 77,
    textAlign: 'center',
    backgroundColor: theme.palette.quaternary.main,
    paddingTop: 5,
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
  vertDivThick: {
    backgroundColor: theme.palette.tertiary.main,
    width: 6,
  },
  vertDivThin: {
    backgroundColor: theme.palette.tertiary.main,
    width: 3,
  },
  horzDivThick: {
    backgroundColor: theme.palette.tertiary.main,
    height: 6,
  },
  horzDivThin: {
    backgroundColor: theme.palette.tertiary.main,
    height: 3,
  },
  loading: {
    height: 320,
    width: 320,
  },
  grid: {
    width: 84,
  },
  selected: {
    height: 77,
    width: 77,
    textAlign: 'center',
    backgroundColor: theme.palette.quinary.main,
    paddingTop: 5,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
}));

const BoardFourByFour = props => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedSquare, setSelectedSquare] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelectedSquare({ x: parseInt(event.currentTarget.id.charAt(0)), y: parseInt(event.currentTarget.id.charAt(1)) })
  };

  const handleClose = () => {
    anchorEl.className = classes.paper
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

  const reverseDividerRange = Array.from({length: props.gameBody.rows.length - 1}, (_, i) => i + 1).reverse()

  let boardMap = props.gameBody.rows.map(row => {

    let formRow = row.squares.map(square => {

      const range = Array.from({length: row.squares.length}, (_, i) => i + 1)
      const menuGridOptions = range.map((num) => {
        return (
          <Grid item xs={6}>
            <StyledMenuItem id={num.toString()} onClick={handlePickValue}>
              <ListItemText primary={num.toString()} />
            </StyledMenuItem>
          </Grid>
        )
      })

      if (square.given) {
        return (
          <Grid item xs={2.999}>
            <Paper className={classes.paper}>
              <Typography variant='h2' className={classes.text}>
                <Box fontWeight="fontWeightBold">{square.value}</Box>
              </Typography>
            </Paper>
          </Grid>
        )
      } else {
        return (
          <Grid item xs={2.999}>
            <Paper
              className={classes.paper}
              aria-controls="customized-menu"
              aria-haspopup="true"
              color="primary"
              onClick={handleClick}
              id={`${square.x}${square.y}`}
            >
              <Typography variant='h2' className={classes.text}>
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
                    <ListItemText primary='&nbsp;' />
                  </StyledMenuItem>
                </Grid>
                {menuGridOptions}
              </Grid>
            </StyledMenu>
          </Grid>
        )
      }
    })

    const smallVerticalDivider = <div className={classes.vertDivThin}></div>
    const largeVerticalDivider = <div className={classes.vertDivThick}></div>

    reverseDividerRange.forEach((value) => {
      if (value%2 === 0) {
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
      <div className={classes.horzDivThin}></div>
    </Grid>

  const largeHorizontalDivider =
    <Grid container item xs={12} spacing={0}>
      <div className={classes.horzDivThick}></div>
    </Grid>

  reverseDividerRange.forEach((value) => {
    if (value%2 === 0) {
      boardMap.splice(value, 0, largeHorizontalDivider)
    } else {
      boardMap.splice(value, 0, smallHorizontalDivider)
    }
  });

  if (anchorEl !== null) {
    anchorEl.className = classes.selected
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
    <Card className={classes.card}>
      <Grid container spacing={0} className={classes.gridContainer}>
        {display}
      </Grid>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    gameBody: state.game.gameBody,
    isFetching: state.game.isFetching,
    darkMode: state.app.darkMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBoard: (gameData) => dispatch(updateBoard(gameData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardFourByFour)
