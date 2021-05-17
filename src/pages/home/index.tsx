import React, { useState } from 'react';
import {
  Button,
  ContainerContent,
  Header,
  ContentWrap,
  UserItem,
} from '../../components';
import { User } from '../../models';

import {
  Container,
  TopContent,
  Input,
  InputContainer,
  InputButton,
} from './styles';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

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
          <ContentWrap>
            {users.map((user) => (
              <UserItem user={user} />
            ))}
          </ContentWrap>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Home;
