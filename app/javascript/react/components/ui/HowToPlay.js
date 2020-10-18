import React from 'react'

import rcb from '../../../../assets/images/RCB.png';
import example from '../../../../assets/images/Completed.png';
import select from '../../../../assets/images/Select.png';

import { makeStyles } from '@material-ui/core/styles'

import { Typography, Container, Box, Card, CardMedia } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 80,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  body: {
    textIndent: 30,
  },
  span: {
    color: theme.palette.primary.main,
  },
  imgBox: {
    display:'flex',
    justifyContent:'center',
    margin: 40,
  },
  imgCard: {
    height: 340,
    width: 340,
    minWidth: 340,
  },
  img: {
    height: 340,
  },
  body3: {
    textIndent: 30,
    marginBottom: 60,
  },
}));

const HowToPlay = props => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Typography variant='h4' className={classes.title}>
        How to play Heroku Sudoku
      </Typography>
      <Typography variant='h6' className={classes.body}>
        The object of Sudoku is to complete the puzzle by filling in every
        tile on the board according to the rules which require that each
        number in a range (1-9 or 1-4, depending on the
        size of the board) must appear once, and only once, in
        every <span className={classes.span}>Row</span>,
        every <span className={classes.span}>Column</span>, and
        every <span className={classes.span}>Box</span>.
      </Typography>
      <Box className={classes.imgBox}>
        <Card className={classes.imgCard}>
          <CardMedia image={rcb} className={classes.img} ></CardMedia>
        </Card>
      </Box>
      <Typography variant='h6' className={classes.body}>
        Once completed, the puzzle may look like the example below where all
        the tiles have been filled according to the rules of the game.
      </Typography>
      <Box className={classes.imgBox}>
        <Card className={classes.imgCard}>
          <CardMedia image={example} className={classes.img} ></CardMedia>
        </Card>
      </Box>
      <Typography variant='h6' className={classes.body}>
        Change the value of a tile by simply clicking on it and selecting a new
        value.  Try to employ processes of elimination in order to determine the
        values of the blank tiles.
      </Typography>
      <Box className={classes.imgBox}>
        <Card className={classes.imgCard}>
          <CardMedia image={select} className={classes.img} ></CardMedia>
        </Card>
      </Box>
      <Typography variant='h6' className={classes.body3}>
        If you are having trouble you can always
        begin a new game by returning to the home page. To do so, click on
        "Heroku Sudoku" in the top left corner.  If you would like to restart
        the puzzle you have begun simply refresh the page.  Good luck and enjoy!
      </Typography>
    </Container>
  )
}

export default HowToPlay
