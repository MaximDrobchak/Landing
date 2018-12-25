import React from 'react';
import RedButton from './styles';

export default ({ props, text = '', type = 'button' }) => (
  <RedButton type={type} {...props}>
    {text}
  </RedButton>
);
