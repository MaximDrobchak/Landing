import React from 'react';
import { PageContainer, PageHeader } from '../../';

import { ITEMS } from './items';
import Item from './Item';

import { TechnologiesGrid, HeadText } from './styles';

import { BackgroundLogo } from '../../';

// grid for dev.
// import { DevGrid } from '../../';

const Technologies = () => (
  <PageContainer id='technologies'>
    {/* <DevGrid /> */}
    <BackgroundLogo />
    <main>
      <PageHeader text='Technologies' />
      <HeadText>We ar best at</HeadText>
      <TechnologiesGrid>
        {ITEMS.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </TechnologiesGrid>
    </main>
  </PageContainer>
);

export default Technologies;
