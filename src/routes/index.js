import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Menu from './HomePage/Menu';
import About from './HomePage/About';
import Services from './HomePage/Services';
import Technologies from './HomePage/Technologies';
import Portfolio from './HomePage/Portfolio';
import Hiring from './HomePage/Hiring/HiringDev';
import Contact from './HomePage/Contact';

import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import BackgroundLogo from '../components/BackgroundLogo';
// grid from dev
import DevGrid from '../components/DevGrid';

export { PageContainer, DevGrid, PageHeader, BackgroundLogo };

const Landing = () => (
  <HomePage className='home-page'>
    <Menu />
    <About />
    <Services />
    <Technologies />
    <Portfolio />
    <Hiring />
    <Contact />
  </HomePage>
);
export default () => (
  <Switch>
    <Route exact path='/' component={Landing} />
  </Switch>
);
