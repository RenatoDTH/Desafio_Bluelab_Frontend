import styled from 'styled-components';

export const Container = styled.button`
  background: #f5f5f5;
  height: 56px;
  border-radius: 10px;
  border: 2px solid #00a0ef;
  padding: 0 16px;
  width: 180px;
  font-weight: 500;
  margin: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background: #00a0ef;
    color: #f5f5f5;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 400;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
    font-weight: 400;
    margin: 2px;
  }
`;
