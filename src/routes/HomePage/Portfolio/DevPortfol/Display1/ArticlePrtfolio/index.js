import React from 'react';
import { ArticleStyle } from './styles';
const ArticlePrtfolio = ({ children, column, row }) => (
  <ArticleStyle row={row} column={column}>
    {children}
  </ArticleStyle>
);

export default ArticlePrtfolio;
