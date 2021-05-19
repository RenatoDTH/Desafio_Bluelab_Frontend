import styled from 'styled-components';
import { Button } from '../../components';

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    padding: 20px;
    min-height: 100vh;
  }
`;

export const FormCreateUser = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;

  @media screen and (max-width: 350px) {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
  }
`;

export const Input = styled.input`
  display: flex;
  background: #f5f5f5;
  height: 56px;
  border-radius: 10px;
  border: 2px solid #00a0ef;
  padding: 0 16px;
  font-weight: 500;
  margin: 16px;
  min-width: 100%;
`;

export const ButtonSubmit = styled(Button)`
  &:hover {
    background: #288a1d;
    color: #f5f5f5;
    border: none;
  }
`;

export const Label = styled.label`
  display: flex;
  align-self: flex-start;
  font-weight: 500;
`;
