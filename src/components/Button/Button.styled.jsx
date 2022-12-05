import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 25px;
  font-weight: 500;
  font-size: 18px;
  color: #6a9bd8;
  background-color: transparent;
  border: 1px solid #6a9bd8;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: var(--main-shadow);
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