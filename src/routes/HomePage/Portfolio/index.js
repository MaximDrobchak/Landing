import React from 'react';
import { PageContainer, DevGrid, PageHeader } from '../..';

import { PortfolioBackground } from './styles';

const Portfolio = () => {
  return (
    <PortfolioBackground>
      <PageContainer id='portfolio'>
        <DevGrid />

        <PageHeader text='Portfolio' pageMainHeader />
        <PageHeader text='Some of our recent projects' />
      </PageContainer>
    </PortfolioBackground>
  );
};
export default Portfolio;
