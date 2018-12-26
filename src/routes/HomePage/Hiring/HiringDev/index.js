import React from 'react';
import HiringStyle from './styles';
import Select from './Select';
import { PageContainer, PageHeader, DevGrid } from '../../../';

const Hiring = () => (
  <PageContainer>
    {/* <DevGrid /> */}
    <PageHeader text='HIRING' pageMainHeader />
    <PageHeader
      text='We are constantly on the lookout for a variety of experts to complement our team.
What we are looking for in:'
    />

    <Select />
  </PageContainer>
);

export default Hiring;
