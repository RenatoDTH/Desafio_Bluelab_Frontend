import React, { useEffect, useState } from 'react';
import { Button, ContainerContent, Header, UserItem } from '../../components';
import { User } from '../../models';
import api from '../../services/api';

import {
  Container,
  TopContent,
  Input,
  InputContainer,
  InputButton,
  ContentWrap,
} from './styles';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setTimeout(() => {
      api.get('users').then((response) => {
        setUsers(response.data);
      });
    }, 1 * 500);
  }, []);

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
            {users.map((user: User) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ContentWrap>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Home;
