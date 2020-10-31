import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Card, Box, CircularProgress } from '@material-ui/core'

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
