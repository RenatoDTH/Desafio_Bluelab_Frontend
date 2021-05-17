import React from 'react';

import { Container } from './styles';

const ContentWrap: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContentWrap;
