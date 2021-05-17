import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  padding: 24px 24px 0 24px;
  margin: 24px;
  justify-content: space-between;
  align-items: center;
  background-color: #00a0ef;
  border-radius: 12px;
  box-shadow: 0px 1px 3px -1px #000;
  button {
    width: 200px;
    border-radius: 0 0 12px 12px;
    outline: 0;
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
    color: #00a0ef;
    font-weight: 500;
  }
  h2 {
    color: #00a0ef;
    font-weight: 700;
  }
`;
