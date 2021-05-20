import React, { FormEvent, useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { toast } from 'react-toastify';
import { validatePhone } from 'validations-br';
import * as Yup from 'yup';
import { User } from '../../models';
import 'react-responsive-modal/styles.css';

import {
  Container,
  ModalContent,
  EditButton,
  DeleteButton,
  FormPhone,
  InputPhone,
  ButtonPhone,
  Label,
  ButtonContainer,
} from './styles';
import api from '../../services/api';

export interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [newPhone, setNewPhone] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const handleOpenEditModal = () => setOpenEdit(true);
  const handleCloseEditModal = () => setOpenEdit(false);

  useEffect(() => {
    api.get('users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const deleteItem = async (): Promise<void> => {
    try {
      await api.delete(`users/${user.id}`);
      toast.success('Usuário deletado com sucesso!');
    } catch (err) {
      throw toast.error('Erro ao tentar deletar o usuário!');
    }
    setOpen(false);
  };

  const handleChangePhone = async (e: FormEvent) => {
    e.preventDefault();

    const schema = Yup.object().shape({
      newPhone: Yup.string()
        .min(10, 'Telefone só deve conter dígitos')
        .max(11, 'Telefone só deve conter dígitos'),
    });

    try {
      const isValid = validatePhone(newPhone);

      if (!isValid) {
        throw toast.error('Telefone Inválido');
      }

      await schema.validate({ newPhone }, { abortEarly: false });

      const findUserByPhone = users.find((user) => user.phone === newPhone);
      if (findUserByPhone) {
        throw toast.error('Telefone já existente!');
      }

      await api.put(`users/${user.id}`, {
        phone: newPhone,
      });
      toast.success('Telefone alterado com sucesso!');

      setNewPhone('');
      setOpenEdit(false);
    } catch (err) {
      setNewPhone('');
      throw toast.error(err.message);
    }
  };

  return (
    <>
      <Container>
        <strong>
          {user.firstname} {user.lastname}
        </strong>
        <p>Telefone: {user.phoneFormatted}</p>
        <p>CPF: {user.cpfFormatted}</p>
        <button
          data-testid={`moreInfo-${user.id}`}
          type="button"
          onClick={handleOpenModal}
        >
          Mais informações
        </button>
        <Modal
          open={open}
          onClose={handleCloseModal}
          center
          styles={{ modal: { borderRadius: '12px' } }}
        >
          <ModalContent>
            <h2>{user.id}</h2>
            <p>
              {user.firstname} {user.lastname}
            </p>
            <p>Telefone: {user.phoneFormatted}</p>
            <p>CPF: {user.cpfFormatted}</p>
            <p>Criado em: {user.created_atFormatted}</p>
            <p>Editado em: {user.updated_atFormatted}</p>
            <ButtonContainer>
              <EditButton
                data-testid={`edit-${user.id}`}
                onClick={handleOpenEditModal}
              >
                Editar
              </EditButton>
              <DeleteButton
                data-testid={`delete-${user.id}`}
                onClick={deleteItem}
              >
                Excluir
              </DeleteButton>
            </ButtonContainer>
          </ModalContent>
        </Modal>

        <Modal
          open={openEdit}
          onClose={handleCloseEditModal}
          center
          styles={{ modal: { borderRadius: '12px' } }}
        >
          <ModalContent>
            <h2>{user.id}</h2>
            <p>
              {user.firstname} {user.lastname}
            </p>
            <FormPhone onSubmit={handleChangePhone}>
              <Label htmlFor="phone">Telefone Novo</Label>
              <InputPhone
                name="phone"
                placeholder="Ex: 11222224444"
                onChange={(e) => setNewPhone(e.target.value)}
              />
              <ButtonPhone data-testid={`editButton-${user.id}`} type="submit">
                Alterar
              </ButtonPhone>
            </FormPhone>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default UserItem;
