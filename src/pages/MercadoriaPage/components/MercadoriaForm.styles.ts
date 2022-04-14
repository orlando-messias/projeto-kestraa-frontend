import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: #F2F2F7;
  `;

export const Header = styled.div`
  /* border-bottom: 1px solid #C0C0C0; */
  color: #1976D2;
  font-size: 30px;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  padding: 18px;
  width: 100%;

  span {
    padding-left: 10px;
  }
`;

export const Content = styled.div`
  /* margin-top: 20px; */
  padding: 5px 20px 26px 0px;
`;

export const Button01 = styled.div`
  background-color: '#1976D2';
  color: '#FFFFFF';
  width: '130px';
`;

export const useStyles = makeStyles((theme) => ({
  input: {
    padding: '0px',
    height: '50px'
  },
  inputMedium: {
    padding: '0px',
    height: '50px',
    width: '560px'
  },
  inputLabel: {
    fontSize: '12px',
    paddingTop: '3px',
    color: '#c2c2c2'
  },
  pageContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    width: '80%'
  },
  pageContentButtons: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    width: '80%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button1: {
    backgroundColor: '#1368B4',
    color: '#FFFFFF',
    width: '120px',
    fontSize: '11px',

    '&:hover': {
      backgroundColor: '#4892db'
    }
  },
  button2: {
    backgroundColor: '#FF941D',
    color: '#FFFFFF',
    width: '120px',
    marginLeft: '10px',
    fontSize: '11px',

    '&:hover': {
      backgroundColor: '#f8a444'
    }
  }
}));
