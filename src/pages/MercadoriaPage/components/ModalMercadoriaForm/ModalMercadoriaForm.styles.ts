import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
    width: 1100,
    backgroundColor: theme.palette.background.paper,
    verticalAlign: 'middle',
    animation: `$myEffect 600ms ${theme.transitions.easing.easeInOut}`,
    left: '50%',
    marginLeft: -550,
    display: 'inline-block',
    height: 700,
    justifyContent: 'center',
    borderRadius: '10px',
    boxShadow: '2px 3px 4px #c2c2c2'
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
    alignItems: 'center',
    borderBottom: '1px solid #c2c2c2',
    height: '50px',
    color: '#1976D2'
  },
  buttonClose: {
    color: '#d10d0d',
    margin: '0',
    padding: '10px 16px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '18px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#F5F5F5'
    }
  }

}));

export default useStyles;
