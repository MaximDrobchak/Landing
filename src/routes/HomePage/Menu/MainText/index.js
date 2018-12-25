import React from 'react';
import { StyleTextBlock, MarginSpan } from './styles';
import RedButton from '../../../../components/RedButton';

export default () => (
  <StyleTextBlock>
    <MarginSpan>Mobile application</MarginSpan>
    <br />
    <MarginSpan>DEVELOPMENT</MarginSpan>
    <br />
    <MarginSpan>Full-cycle website</MarginSpan>
    <br />

    <RedButton text='Learn more now' />
  </StyleTextBlock>
);
