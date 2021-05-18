import React from 'react';
import Lottie from 'react-lottie';
import loading from './animation/loading.json';
import { Container } from './styles';

const LoadAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Container>
  );
};

export default LoadAnimation;
