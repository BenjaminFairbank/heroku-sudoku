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
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
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

  let boardMap = props.gameBody.rows.map(row => {
    
    let formRow = row.squares.map(square => {

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
              <StyledMenuItem id=' ' onClick={handlePickValue}>
                <ListItemText primary='&nbsp;' />
              </StyledMenuItem>
              <StyledMenuItem id='1' onClick={handlePickValue}>
                <ListItemText primary='1' />
              </StyledMenuItem>
              <StyledMenuItem id='2' onClick={handlePickValue}>
                <ListItemText primary='2' />
              </StyledMenuItem>
              <StyledMenuItem id='3' onClick={handlePickValue}>
                <ListItemText primary='3' />
              </StyledMenuItem>
              <StyledMenuItem id='4' onClick={handlePickValue}>
                <ListItemText primary='4' />
              </StyledMenuItem>
            </StyledMenu>
          </Grid>
        )
      }
    })

    const smallVerticalDivider = <div className={classes.vertDivThin}></div>
    const largeVerticalDivider = <div className={classes.vertDivThick}></div>

    formRow.splice(3, 0, smallVerticalDivider)
    formRow.splice(2, 0, largeVerticalDivider)
    formRow.splice(1, 0, smallVerticalDivider)

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

  boardMap.splice(3, 0, smallHorizontalDivider)
  boardMap.splice(2, 0, largeHorizontalDivider)
  boardMap.splice(1, 0, smallHorizontalDivider)

  let display
  if (props.isFetching) {
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
        {boardMap}
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
