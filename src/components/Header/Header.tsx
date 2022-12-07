import React from 'react';
import { IHeaderProps } from './Header.types';

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { title } = props;
  return (
    <h1 className='header'>{title}</h1>
  );
};

export default Header;