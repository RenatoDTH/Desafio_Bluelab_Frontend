import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import {
  ContainerContent,
  Header,
  UserItem,
  LoadAnimation,
  MainContainer,
} from '../../components';
import { User } from '../../models';
import api from '../../services/api';
import { formatCpf, formatDate, formatPhone } from '../../utils';

import {
  TopContent,
  Input,
  InputContainer,
  InputButton,
  ContentWrap,
  SearchIcon,
  HomeButton,
} from './styles';

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [allUsers, setAllUsers] = useState<boolean>(true);
  const [oneUser, setOneUser] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(async () => {
      const response = await api.get<User[]>('users');

      const responseFormatted = response.data.map((user) => {
        return {
          ...user,
          cpfFormatted: formatCpf(user.cpf),
          phoneFormatted: formatPhone(user.phone),
          created_atFormatted: formatDate(user.created_at),
          updated_atFormatted: formatDate(user.updated_at),
        };
      });
      setUsers(responseFormatted);
      setIsLoading(false);
    }, 1 * 2500);
  }, [users]);

  const handleSearchUser = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setAllUsers(false);

      const schema = Yup.object().shape({
        searchValue: Yup.string().length(11, 'CPF só deve conter dígitos'),
      });

      try {
        await schema.validate({ searchValue }, { abortEarly: false });

        const userFound = await users.filter(
          (user) => user.cpf === searchValue,
        );

        if (userFound.length === 0) {
          throw toast.error('Informações de CPF não armazenadas.');
        }

        setOneUser(userFound);
        setSearchValue('');
      } catch (err) {
        setOneUser([]);
        throw toast.error(err.message);
      }
    },
    [searchValue, users],
  );

  const handleAllUsers = (e: FormEvent) => {
    e.preventDefault();
    setAllUsers(true);
  };

  return (
    <>
      <Header />
      <MainContainer>
        <ContainerContent>
          <TopContent onSubmit={handleSearchUser} data-testid="topContent">
            <HomeButton onClick={handleAllUsers}>Todos</HomeButton>
            <InputContainer>
              <Input
                data-testid="searchInput"
                value={searchValue}
                placeholder="CPF (ex: 11122233344)"
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <InputButton data-testid="searchButton" type="submit">
                <SearchIcon />
              </InputButton>
            </InputContainer>
          </TopContent>

          {isLoading ? (
            <LoadAnimation />
          ) : (
            <ContentWrap data-testid="userList">
              {allUsers
                ? users.map((user: User) => (
                    <UserItem key={user.id} user={user} />
                  ))
                : oneUser.map((user: User) => (
                    <UserItem key={user.id} user={user} />
                  ))}
            </ContentWrap>
          )}
        </ContainerContent>
      </MainContainer>
    </>
  );
};

export default Home;
