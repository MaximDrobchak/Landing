import React from 'react';

import { HeadLine, Image, Icon, TextArticle, ContainerArticle } from './styles';

const Article = ({ icon, headline, children, picture, textColor }) => (
  <ContainerArticle>
    <span>
      <Icon src={icon} alt='' />
      <HeadLine>{headline}</HeadLine>
      <TextArticle textColor={textColor}>{children}</TextArticle>
    </span>
    {picture && <Image src={picture} alt='' />}
  </ContainerArticle>
);

export default Article;
