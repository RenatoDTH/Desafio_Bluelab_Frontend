import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 240px;
  padding: 24px 24px 0 24px;
  margin: 24px;
  justify-content: space-between;
  align-items: center;
  background-color: #00a0ef;
  color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0px 1px 3px -1px #000;
  button {
    width: 240px;
    border-radius: 0 0 12px 12px;
    outline: 0;
    border: none;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const ModalContent = styled.div`
  p {
    margin-top: 10px;
    color: #00a0ef;
    font-weight: 500;
  }
  h2 {
    margin-top: 20px;
    color: #00a0ef;
    font-weight: 500;
  }
`;
