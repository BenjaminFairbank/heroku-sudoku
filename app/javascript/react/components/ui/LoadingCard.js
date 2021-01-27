import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  loading: {
    height: 380,
    width: 380,
    textAlign: 'center',
  },
  div: {
    marginTop: 100,
  },
}))

const LoadingCard = props => {
  const classes = useStyles()

  return (
    <Card className={classes.loading}>
      <Box className={classes.div}>
        <CircularProgress
          color='secondary'
          size={180}
          thickness={2}
        />
    </Box>
    </Card>
  )
}

export default LoadingCard
