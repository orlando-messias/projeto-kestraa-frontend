import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F2F2F7;
  width: 320px;
  height: 100vh;
  padding: 10px;
  border-right: 3px solid #FFFFFF;
`;

export const useStyles = makeStyles(() => ({
  item: {
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    color: '#1976D2',

    '&:hover': {
      backgroundColor: '#AFD7FF',
    },
  },
  itemIcon: {
    color: '#1976D2',

  },
  itemText: {
    marginLeft: '-12px',
  },
  subItem: {
    margin: '0 0 5px 30px',
    padding: '3px 0 0 10px',
    width: '220px',
    borderRadius: '5px',

    '&:hover': {
      backgroundColor: '#AFD7FF',
    },
  },
  subItemText: {
    marginLeft: '-20px',
    fontSize: '14px',
  },
  subItemIcon: {
    fontSize: '10px'
  },
  divider: {
    border: '1px solid #E7F3FF',
    margin: '5px 0'
  }
}));
