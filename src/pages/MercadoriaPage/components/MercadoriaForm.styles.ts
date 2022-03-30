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

export const useStyles = makeStyles((theme) => ({
  input: {
    padding: '0px',
    height: '52px'
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
    justifyContent: 'flex-end'
  }
}));
