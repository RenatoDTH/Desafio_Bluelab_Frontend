import React, { useState, FormEvent, useCallback, useEffect } from 'react';
import { validateCPF, validatePhone } from 'validations-br';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ContainerContent, Header, MainContainer } from '../../components';

import { FormCreateUser, Input, ButtonSubmit, Label } from './styles';
import { User } from '../../models';
import api from '../../services/api';

const UserCreation: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('users').then((response) => {
      setUsers(response.data);
    });
  }, [users]);

  const handleCreateUser = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const data = {
        firstname: firstName,
        lastname: lastName,
        phone,
        cpf,
      };

      const schema = Yup.object().shape({
        firstname: Yup.string().required('Nome obrigatório'),
        lastname: Yup.string().required('Sobreneme obrigatório'),
        cpf: Yup.string()
          .required('CPF obrigatório')
          .length(11, 'CPF só deve conter dígitos'),
        phone: Yup.string()
          .required('Telefone obrigatório!')
          .min(10, 'Telefone só deve conter dígitos')
          .max(11, 'Telefone só deve conter dígitos'),
      });

      try {
        await schema.validate(data, { abortEarly: false });

        if (!validateCPF(cpf)) {
          throw toast.error('CPF Inválido');
        }
        if (!validatePhone(phone)) {
          throw toast.error('Telefone Inválido');
        }

        const findUserByPhone = users.find((user) => user.phone === phone);
        if (findUserByPhone) {
          throw toast.error('Telefone já existente!');
        }

        const findUserByCpf = users.find((user) => user.cpf === cpf);
        if (findUserByCpf) {
          throw toast.error('CPF já existente!');
        }

        await api.post('users', data);

        toast.success(`Cadastro concluído com sucesso, ${firstName}!`, {
          autoClose: 3800,
        });
      } catch (err) {
        throw toast.error(err.message);
      }
      setFirstName('');
      setLastName('');
      setPhone('');
      setCpf('');
    },
    [firstName, lastName, phone, cpf, users],
  );
  return (
    <>
      <Header />
      <MainContainer>
        <ContainerContent>
          <FormCreateUser data-testid="createForm" onSubmit={handleCreateUser}>
            <Label htmlFor="firstname">Nome</Label>
            <Input
              data-testid="inputName"
              value={firstName}
              name="firstname"
              placeholder="Nome (ex: Renato)"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Label htmlFor="lastname">Sobrenome</Label>
            <Input
              data-testid="inputLastName"
              value={lastName}
              name="lastname"
              placeholder="Sobrenome (ex: Castro)"
              onChange={(e) => setLastName(e.target.value)}
            />
            <Label htmlFor="phone">Telefone</Label>
            <Input
              data-testid="inputPhone"
              value={phone}
              name="phone"
              placeholder="Telefone (ex: 11222223333)"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Label htmlFor="cpf">CPF</Label>
            <Input
              data-testid="inputCpf"
              value={cpf}
              name="cpf"
              placeholder="CPF (ex: 11122233344)"
              onChange={(e) => setCpf(e.target.value)}
            />
            <ButtonSubmit data-testid="createUser" type="submit">
              Cadastrar
            </ButtonSubmit>
          </FormCreateUser>
        </ContainerContent>
      </MainContainer>
    </>
  );
};

export default UserCreation;
