import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 25px;
  padding: 20px;
  min-width: 100%;
  background-color: #ebf5fc;
  
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 11px 25px;
  width: 400px;
  font-size: 18px;
  color: #858585;
  border: none;
  border-radius: 5px;
  
  transition: all 300ms ease-in-out;
  :focus {
    outline: 3px solid #ebf5fc;
    box-shadow: 0px 0px 0px 6px #6a9bd8;
  }
`;

export const ButtonSubmit = styled.button`
  padding: 10px 25px;
  font-weight: 500;
  font-size: 18px;
  color: #6a9bd8;
  background-color: transparent;
  border: 1px solid #6a9bd8;
  border-radius: 5px;
  cursor: pointer;
  
  transition: all 300ms ease-in-out;
  :hover {
    color: #ebf5fc;
    background-color: #6a9bd8;
  }
  :focus {
    color: #ebf5fc;
    background-color: #6a9bd8;
    outline: 3px solid #ebf5fc;
    box-shadow: 0px 0px 0px 6px #6a9bd8;
  }
`;