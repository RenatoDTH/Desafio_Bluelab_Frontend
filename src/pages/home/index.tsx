import React from 'react';
import { Button, ContainerContent, Header } from '../../components';

import {
  Container,
  TopContent,
  Input,
  InputContainer,
  InputButton,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <TopContent>
            <Button>Todos</Button>
            <InputContainer>
              <Input placeholder="Pesquise por CPF" />
              <InputButton>OK</InputButton>
            </InputContainer>
          </TopContent>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Home;
