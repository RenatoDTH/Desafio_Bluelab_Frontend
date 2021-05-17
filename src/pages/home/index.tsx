import React from 'react';
import { ContainerContent, Header } from '../../components';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ContainerContent />
      </Container>
    </>
  );
};

export default Home;
