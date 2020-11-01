import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper4x4: {
    height: 90,
    width: 90,
    textAlign: 'center',
    backgroundColor: theme.palette.quaternary.main,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  paper9x9: {
    height: 40,
    width: 40,
    textAlign: 'center',
    backgroundColor: theme.palette.quaternary.main,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  gridContainer: {
    height: 380,
    width: 380,
    margin: 'auto',
  },
  text4x4: {
    color: 'white',
    paddingTop: 10,
  },
  text9x9: {
    color: 'white',
    paddingTop: 5,
  },
  vertDivThick4x4: {
    backgroundColor: theme.palette.tertiary.main,
    width: 10,
  },
  vertDivThin4x4: {
    backgroundColor: theme.palette.tertiary.main,
    width: 5,
  },
  horzDivThick4x4: {
    backgroundColor: theme.palette.tertiary.main,
    height: 10,
  },
  horzDivThin4x4: {
    backgroundColor: theme.palette.tertiary.main,
    height: 5,
  },
  vertDivThick9x9: {
    backgroundColor: theme.palette.tertiary.main,
    width: 4,
  },
  vertDivThin9x9: {
    backgroundColor: theme.palette.tertiary.main,
    width: 2,
  },
  horzDivThick9x9: {
    backgroundColor: theme.palette.tertiary.main,
    height: 4,
  },
  horzDivThin9x9: {
    backgroundColor: theme.palette.tertiary.main,
    height: 2,
  },
  menuGrid4x4: {
    width: 84,
  },
  menuGrid9x9: {
    width: 126,
  },
  selected4x4: {
    height: 90,
    width: 90,
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    '& .MuiTypography-root': {
      color: theme.palette.primary.main,
    }
  },
  selected9x9: {
    height: 40,
    width: 40,
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    '& .MuiTypography-root': {
      color: theme.palette.primary.main,
    }
  },
  emptyOption: {
    width: 42,
    height: 44,
  },
  note4x4: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bolder',
  },
  note9x9: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bolder',
  },
  noteBox4x4: {
    height: 45,
    width: 45,
    margin: 'auto'
  },
  noteBox9x9: {
    height: 13.3,
    width: 13.3,
    margin: 'auto'
  },
}))

export default useStyles
