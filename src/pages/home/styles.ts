import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    padding: 20px;
    min-height: 100vh;
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;

  @media screen and (max-width: 530px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.form``;

export const Input = styled.input`
  background: #f5f5f5;
  height: 56px;
  border-radius: 10px 0 0 10px;
  border-top: 2px solid #00a0ef;
  border-left: 2px solid #00a0ef;
  border-bottom: 2px solid #00a0ef;
  border-right: none;
  padding: 0 10px;
  width: 150px;
  font-weight: 500;
  margin: 16px 0 16px 16px;
  transition: background-color 0.3s;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 400;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
    font-weight: 400;
    margin: 2px 0 2px 2px;
  }
`;

export const InputButton = styled.button`
  background: #00a0ef;
  height: 56px;
  border-radius: 0 10px 10px 0;
  border-top: 2px solid #00a0ef;
  border-right: 2px solid #00a0ef;
  border-bottom: 2px solid #00a0ef;
  border-left: none;
  width: 30px;
  cursor: pointer;
  font-weight: 500;
  margin: 16px 16px 16px 0;
  transition: background-color 0.3s;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 400;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
    font-weight: 400;
    margin: 2px 2px 2px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 48px;
  p {
    font-size: 28px;
    line-height: 48px;
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;
