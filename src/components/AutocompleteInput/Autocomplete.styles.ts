import styled from 'styled-components';

export const SearchInput = styled.div<{
  hasFocus: boolean;
}>`
  display: flex;
  align-items: center;
  background-color: white;
  border: ${({ hasFocus }) => (hasFocus ? '2px solid #2974b0' : '1px solid #c2c2c2')};
  border-radius: 4px;
  width: 660px;
  height: 50px;
  gap: 20px;
  font-family: 'DM Sans', sans-serif;
  padding: 0 20px 0 8px;

  input {
    border: none;
    outline: 0;
    font-size: 14px;
    width: 90%;
    padding: 5px;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #c2c2c2;
      font-size: 12px;
      position: absolute;
      top: 2px;

    }
    :-ms-input-placeholder {
      color: #c2c2c2;
      font-size: 12px;
    }
  }

  .icon {
    color: #c2c2c2;
  }
`;

export const DataResult = styled.div<{
  teste: boolean;
}>`
  background-color: white;
  border: ${({ teste }) => (teste ? '1px solid #c2c2c2' : 'none')};
  border-radius: 5px;
  max-height: 250px;
  overflow: hidden;
  overflow-y: auto;
  width: 655px;
  border-radius: 5px;
  position: absolute;
  z-index: 99999;
  margin-top: 51px;
  font-size: 14px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DataItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px 5px 5px;
  gap: 16px;
  cursor: pointer;
  width: 660px;

  &:hover {
    background-color: #e9e9e9;
  }
`;
