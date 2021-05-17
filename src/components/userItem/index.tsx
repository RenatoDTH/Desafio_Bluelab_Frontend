import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { User } from '../../models';
import 'react-responsive-modal/styles.css';

import { Container, ModalContent } from './styles';

export interface IUserItemProps {
  user: User;
}

const UserItem: React.FC<IUserItemProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <>
      <Container>
        <strong>
          {user.firstname} {user.lastname}
        </strong>
        <strong>{user.phone}</strong>
        <strong>{user.cpf}</strong>
        <button type="button" onClick={handleOpenModal}>
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
            <p>Telefone: {user.phone}</p>
            <p>CPF: {user.cpf}</p>
            <p>Criado em: {user.created_at}</p>
            <p>CPF: {user.updated_at}</p>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default UserItem;
