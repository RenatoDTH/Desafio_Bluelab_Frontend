import React from 'react';
import LogoImg from '../../assets/logo.png';
import { Image } from './styles';

const Logo: React.FC = () => {
  return <Image alt="Bluelab" src={LogoImg} />;
};

export default Logo;
