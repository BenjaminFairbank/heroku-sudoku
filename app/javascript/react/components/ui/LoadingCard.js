import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  loading: {
    height: 320,
    width: 320,
  },
}))

const LoadingCard = props => {
  const classes = useStyles()

  return (
    <Card>
      <CardMedia
        image="https://s3.amazonaws.com/horizon-production/images/redux/loading-icon.gif"
        alt="loading-icon"
        className={classes.loading}
      ></CardMedia>
    </Card>
  )
}

export default LoadingCard
