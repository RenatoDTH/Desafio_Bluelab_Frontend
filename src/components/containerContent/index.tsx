import React from 'react';

import { Container } from './styles';

const ContainerContent: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerContent;
