import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalContent: {
    padding: '10px 30px 10px 30px',
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    verticalAlign: 'middle',
    animation: `$myEffect 600ms ${theme.transitions.easing.easeInOut}`,
    left: '50%',
    marginLeft: -400,
    // overflowY: 'scroll',
    display: 'inline-block',
    height: 600,
  },
  '@keyframes myEffect': {
    '0%': {
      transform: 'scaleY(.005) scaleX(0)',
    },
    '50%': {
      transform: 'scaleY(.005) scaleX(1)',
    },
    '100%': {
      transform: 'scaleY(1) scaleX(1)',
    }
  },
  modalTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #c2c2c2',
    paddingBottom: '10px'
  },
  buttonClose: {
    color: '#d10d0d',
    margin: '0',
    padding: '0',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '#fdefef'
    }
  }

}));

export default useStyles;
