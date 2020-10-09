import React from 'react';
import { connect } from 'react-redux'
import { switchLighting } from '../../modules/app'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Brightness2Icon from "@material-ui/icons/Brightness2";
import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


const TopBar = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <ElevationScroll {...props}>
          <AppBar>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Heroku Sudoku
              </Typography>
              <Switch
                checked={props.darkMode}
                onChange={props.switchLighting}
                color="secondary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              {props.mode ? <Brightness2Icon /> : <BrightnessMediumIcon />}
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </div>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.app.darkMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchLighting: () => dispatch(switchLighting())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)
