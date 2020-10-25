import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 20,
  },
  box: {
    height: 340,
    width: 340,
    margin: 'auto',
  },
  card: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: theme.palette.tertiary.main,
  },
  paper4x4: {
    height: 77,
    width: 77,
    textAlign: 'center',
    paddingTop: 5,
    backgroundColor: theme.palette.quaternary.main,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  paper9x9: {
    height: 34,
    width: 34,
    textAlign: 'center',
    paddingTop: 2,
    backgroundColor: theme.palette.quaternary.main,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  gridContainer: {
    height: 320,
    width: 320,
    margin: 'auto',
  },
  text: {
    color: 'white',
  },
  vertDivThick4x4: {
    backgroundColor: theme.palette.tertiary.main,
    width: 6,
  },
  vertDivThin4x4: {
    backgroundColor: theme.palette.tertiary.main,
    width: 3,
  },
  horzDivThick4x4: {
    backgroundColor: theme.palette.tertiary.main,
    height: 6,
  },
  horzDivThin4x4: {
    backgroundColor: theme.palette.tertiary.main,
    height: 3,
  },
  vertDivThick9x9: {
    backgroundColor: theme.palette.tertiary.main,
    width: 4,
  },
  vertDivThin9x9: {
    backgroundColor: theme.palette.tertiary.main,
    width: 1,
  },
  horzDivThick9x9: {
    backgroundColor: theme.palette.tertiary.main,
    height: 4,
  },
  horzDivThin9x9: {
    backgroundColor: theme.palette.tertiary.main,
    height: 1,
  },
  grid4x4: {
    width: 84,
  },
  grid9x9: {
    width: 126,
  },
  selected4x4: {
    height: 77,
    width: 77,
    textAlign: 'center',
    backgroundColor: theme.palette.quinary.main,
    paddingTop: 5,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  selected9x9: {
    height: 34,
    width: 34,
    textAlign: 'center',
    paddingTop: 2,
    backgroundColor: theme.palette.quinary.main,
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  emptyOption: {
    height: 42,
    width: 42,
  }
}))

export default useStyles
