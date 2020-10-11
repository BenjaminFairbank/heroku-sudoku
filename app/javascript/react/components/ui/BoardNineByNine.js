import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Card, Typography } from '@material-ui/core';

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
    backgroundColor: theme.palette.quaternary.main,
    paddingTop: 2,
  },
  rowGrid: {
    margin: 'auto',
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
}));

const BoardNineByNine = props => {
  const classes = useStyles();

  const FormRow = () => {
    return (
      <>
        <Grid item xs={(4/3)}>
          <Paper className={classes.paper}><Typography variant="h6" className={classes.text}>8</Typography></Paper>
        </Grid>
        <div className={classes.vertDivThin}></div>
        <Grid item xs={(4/3)}>
          <Paper className={classes.paper}><Typography variant="h6" className={classes.text}>8</Typography></Paper>
        </Grid>
        <div className={classes.vertDivThin}></div>
        <Grid item xs={(4/3)}>
          <Paper className={classes.paper}><Typography variant="h6" className={classes.text}>8</Typography></Paper>
        </Grid>
        <div className={classes.vertDivThick}></div>
        <Grid item xs={(4/3)}>
          <Paper className={classes.paper}><Typography variant="h6" className={classes.text}>8</Typography></Paper>
        </Grid>
        <div className={classes.vertDivThin}></div>
        <Grid item xs={(4/3)}>
          <Paper className={classes.paper}><Typography variant="h6" className={classes.text}>8</Typography></Paper>
        </Grid>
        <div className={classes.vertDivThin}></div>
        <Grid item xs={(4/3)}>
          <Paper className={classes.paper}><Typography variant="h6" className={classes.text}>8</Typography></Paper>
        </Grid>
        <div className={classes.vertDivThick}></div>
        <Grid item xs={(4/3)}>
          <Paper className={classes.paper}><Typography variant="h6" className={classes.text}>8</Typography></Paper>
        </Grid>
        <div className={classes.vertDivThin}></div>
        <Grid item xs={(4/3)}>
          <Paper className={classes.paper}><Typography variant="h6" className={classes.text}>8</Typography></Paper>
        </Grid>
        <div className={classes.vertDivThin}></div>
        <Grid item xs={(4/3)}>
          <Paper className={classes.paper}><Typography variant="h6" className={classes.text}>8</Typography></Paper>
        </Grid>
      </>
    );
  }

  return (
    <Card className={classes.card}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid container item xs={12} spacing={0} className={classes.rowGrid}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <div className={classes.horzDivThin}></div>
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <div className={classes.horzDivThin}></div>
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <div className={classes.horzDivThick}></div>
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <div className={classes.horzDivThin}></div>
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <div className={classes.horzDivThin}></div>
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <div className={classes.horzDivThick}></div>
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <div className={classes.horzDivThin}></div>
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <div className={classes.horzDivThin}></div>
        </Grid>
        <Grid container item xs={12} spacing={0}>
          <FormRow />
        </Grid>
      </Grid>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    gameBody: state.game.gameBody,
    darkMode: state.app.darkMode
  }
}

export default connect(
  mapStateToProps,
  null
)(BoardNineByNine)
