import React from 'react';

import { PageContainer, PageHeader, BackgroundLogo } from '../../';
import Article from './Article';

import { Group52, Group53, Group54, ArticleImage } from './img';
import { AboutGrid, ArticleDevelopen, ArticleStrategy, ArticleConsulting } from './styles';

const About = () => (
  <PageContainer id="about">
    <BackgroundLogo />

    <PageHeader text="ABOUT US" pageMainHeader />

    <AboutGrid>
      <ArticleDevelopen>
        <Article textColor="#707070" icon={Group53} headline="Developmen" picture={ArticleImage}>
          We transform your ideas into a perfect product and deliver it on time. Full software development cycle for all
          platforms..
        </Article>
      </ArticleDevelopen>
      <ArticleStrategy>
        <Article textColor="white" icon={Group52} headline="Strategy">
          Understanding who a company, brand or product is, where they came from and how they got here is integral in
          understanding where to go next.
        </Article>
      </ArticleStrategy>
      <ArticleConsulting>
        <Article textColor="#707070" icon={Group54} headline="Consulting">
          Fix, improve, or get insights on your website without adding headcount to your team. Put our expertise to
          work.
        </Article>
      </ArticleConsulting>
    </AboutGrid>
  </PageContainer>
);
export default About;
