import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Card, Typography, CardMedia } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: theme.palette.tertiary.main,
  },
  paper: {
    height: 34,
    width: 34,
    textAlign: 'center',
    paddingTop: 2,
    backgroundColor: theme.palette.quaternary.main,
  },
  gridContainer: {
    height: 320,
    width: 320,
    margin: 'auto',
  },
  text: {
    color: 'white'
  },
  vertDivThick: {
    backgroundColor: theme.palette.tertiary.main,
    width: 4,
  },
  vertDivThin: {
    backgroundColor: theme.palette.tertiary.main,
    width: 1,
  },
  horzDivThick: {
    backgroundColor: theme.palette.tertiary.main,
    height: 4,
  },
  horzDivThin: {
    backgroundColor: theme.palette.tertiary.main,
    height: 1,
  },
  loading: {
    height: 320,
    width: 320,
  },
}));

const BoardNineByNine = props => {
  const classes = useStyles()

  let boardMap = props.gameBody.map(row => {

    let formRow = row.map(square => {

      return (
        <Grid item xs={(4/3)}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.text}>
              {square.value}
            </Typography>
          </Paper>
        </Grid>
      )
    })

    const smallVerticalDivider = <div className={classes.vertDivThin}></div>
    const largeVerticalDivider = <div className={classes.vertDivThick}></div>

    formRow.splice(8, 0, smallVerticalDivider)
    formRow.splice(7, 0, smallVerticalDivider)
    formRow.splice(6, 0, largeVerticalDivider)
    formRow.splice(5, 0, smallVerticalDivider)
    formRow.splice(4, 0, smallVerticalDivider)
    formRow.splice(3, 0, largeVerticalDivider)
    formRow.splice(2, 0, smallVerticalDivider)
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

  boardMap.splice(8, 0, smallHorizontalDivider)
  boardMap.splice(7, 0, smallHorizontalDivider)
  boardMap.splice(6, 0, largeHorizontalDivider)
  boardMap.splice(5, 0, smallHorizontalDivider)
  boardMap.splice(4, 0, smallHorizontalDivider)
  boardMap.splice(3, 0, largeHorizontalDivider)
  boardMap.splice(2, 0, smallHorizontalDivider)
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

export default connect(
  mapStateToProps,
  null
)(BoardNineByNine)
