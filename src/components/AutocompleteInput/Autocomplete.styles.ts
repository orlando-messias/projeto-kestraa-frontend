import styled from 'styled-components';

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  width: 660px;
  height: 50px;
  gap: 20px;
  font-family: 'DM Sans', sans-serif;
  padding: 0 20px;

  input {
    border: none;
    outline: 0;
    font-size: 16px;
    width: 90%;
  }

  .icon {
    color: #c2c2c2
  }
`;

export const DataResult = styled.div`
  background-color: white;
  border-radius: 5px;
  max-height: 300px;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DataItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;
