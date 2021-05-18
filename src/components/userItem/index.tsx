import React, { FormEvent, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { toast } from 'react-toastify';
import { validatePhone } from 'validations-br';
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
} from './styles';
import api from '../../services/api';

export interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [newPhone, setNewPhone] = useState<string>('');

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const handleOpenEditModal = () => setOpenEdit(true);
  const handleCloseEditModal = () => setOpenEdit(false);

  const deleteItem = async (): Promise<void> => {
    try {
      await api.delete(`users/${user.id}`);
    } catch (err) {
      throw toast.error('Erro ao tentar deletar o usuário!');
    }
    document.location.reload(true);
  };

  const handleChangePhone = async (e: FormEvent) => {
    e.preventDefault();
    const isValid = validatePhone(newPhone);

    if (!isValid) {
      throw toast.error('Telefone Inválido');
    } else {
      await api.put(`users/${user.id}`, {
        phone: newPhone,
      });
      toast.success('Telefone alterado com sucesso!');
    }

    document.location.reload(true);
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
            <EditButton onClick={handleOpenEditModal}>Editar</EditButton>
            <DeleteButton
              data-testid={`delete-${user.id}`}
              onClick={deleteItem}
            >
              Excluir
            </DeleteButton>
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
              <ButtonPhone type="submit">Alterar</ButtonPhone>
            </FormPhone>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default UserItem;
