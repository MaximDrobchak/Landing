import React from 'react';

import imgAwelinkStudio from './img/portfolio-comp1111.png';
import imgInksy from './img/portfolio-comp222.png';
import DisplayStyle, { TeaxtContainer, NotebookImage } from './styles';

const Display1 = () => (
  <DisplayStyle>
    <TeaxtContainer align="right">
      <span>HintSystem</span>
      <span>Full-cycle project</span>
      <span>Mobile application - software designed to work on smartphones, tablets and other mobile devices.</span>
    </TeaxtContainer>
    <NotebookImage src={imgAwelinkStudio} alt="" />
    <NotebookImage src={imgInksy} alt="" />
    <TeaxtContainer align="left">
      <span>Inksy</span>
      <span>Full-cycle project </span>
      <span>
        INKSY - CRM system for printing and advertising agencies. State-of-the-art developments help INKSY to quickly
        manage all work processes. The system allows you to monitor the work of the enterprise from anywhere in the
        world.
      </span>
    </TeaxtContainer>
  </DisplayStyle>
);

export default Display1;
