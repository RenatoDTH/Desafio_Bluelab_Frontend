import React, { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
  const [searchValue, setSearchValue] = useState<string>('');
  const [allUsers, setAllUsers] = useState<boolean>(true);
  const [oneUser, setOneUser] = useState<User[]>([]);

  useEffect(() => {
    setTimeout(() => {
      api.get('users').then((response) => {
        setUsers(response.data);
      });
    }, 1 * 500);
  }, [users]);

  const handleSearchUser = (e: FormEvent) => {
    e.preventDefault();
    setAllUsers(false);

    const userFound = users.filter((user) => user.cpf === searchValue);

    if (userFound.length === 0) {
      throw toast.error('Informações de CPF não armazenadas.');
    }
    setOneUser(userFound);
  };

  const handleAllUsers = (e: FormEvent) => {
    e.preventDefault();
    setAllUsers(true);
  };

  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <TopContent onSubmit={handleSearchUser}>
            <Button onClick={handleAllUsers}>Todos</Button>
            <InputContainer>
              <Input
                placeholder="Pesquise por CPF"
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <InputButton type="submit">OK</InputButton>
            </InputContainer>
          </TopContent>

          <ContentWrap>
            {allUsers
              ? users.map((user: User) => (
                  <UserItem key={user.id} user={user} />
                ))
              : oneUser.map((user: User) => (
                  <UserItem key={user.id} user={user} />
                ))}
          </ContentWrap>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Home;
