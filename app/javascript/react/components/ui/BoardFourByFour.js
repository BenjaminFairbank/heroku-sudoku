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
    color: 'white'
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

  let boardMap = props.gameBody.map(row => {

    let formRow = row.map(value => {

      return (
        <Grid item xs={2.999}>
          <Paper className={classes.paper}>
            <Typography variant="h2" className={classes.text}>
              {value}
            </Typography>
          </Paper>
        </Grid>
      )
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
)(BoardFourByFour)
