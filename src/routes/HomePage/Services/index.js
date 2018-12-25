import React from 'react';
import { PageContainer, PageHeader } from '../../';

import ServicesItem from './ServicesItem';
import { ITEMS } from './items';
import services2Min from './img/services.jpg';

import { HeadText, ItemImage, ServicesGrid, ServicesContainerPage } from './styles';

// grid for dev.
// import { DevGrid } from '../../';

const Services = () => (
  <ServicesContainerPage>
    <PageContainer id='services'>
      {/* <DevGrid /> */}

      <PageHeader text='Services' />
      <HeadText>Things that we work on </HeadText>
      <ServicesGrid>
        {ITEMS.map(item =>
          item.image ? (
            <img key={item.id} src={item.image} alt='' />
          ) : (
            <ServicesItem key={item.id} icon={item.icon} itemHeader={item.itemHeader} itemList={item.itemList} />
          ),
        )}
        <ItemImage src={services2Min} alt='' />
      </ServicesGrid>
    </PageContainer>
  </ServicesContainerPage>
);

export default Services;
