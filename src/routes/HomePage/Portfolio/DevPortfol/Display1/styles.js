import styled from 'styled-components';

import { DisplayStyle } from '../styles';

export default styled(DisplayStyle)`
  & :nth-child(1) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    width: 100%;
    height: 50%;
    z-index: 10;
    margin-bottom: 16%;

    @media (max-width: 1100px) {
      margin-bottom: 26%;
      margin-right: 15%;
    }
  }
  & :nth-child(2) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    width: 100%;
    height: 100%;
    z-index: 2;
    margin-top: 10%;
    margin-left: -7%;
    @media (max-width: 1100px) {
      max-width: 100%;
      max-height: 80%;
      margin-top: 15%;
      margin-left: -12%;
    }
  }
  & :nth-child(3) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    width: 100%;
    height: 100%;
    z-index: 3;
    margin-top: -10%;
    margin-left: 7%;
    @media (max-width: 1100px) {
      max-width: 100%;
      max-height: 80%;
      margin-top: -15%;
      margin-left: 12%;
    }
  }
  & :nth-child(4) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    width: 80%;
    height: 50%;
    z-index: 1;
    margin-bottom: 8%;
    margin-left: -9%;
    margin-left: -9%;
    @media (max-width: 1100px) {
      margin-bottom: 0%;
      margin-left: 0%;
    }
  }
`;

export const TeaxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-family: Roboto;
  line-height: 1.2;
  letter-spacing: 0.4px;
  color: #666b70;
  text-align: ${props => props.align};
  padding-block-start: 100px;

  padding-inline-start: 100px;
  poition: absolute;
  > * {
    margin: 0;
    padding: 0;
  }

  & :nth-child(1) {
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: #189af1;
  }
  & :nth-child(2) {
    margin: 0;
    padding: 0;
  }
  & :nth-child(3) {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.3px;
    margin: 0;
    padding: 0;
  }
`;

export const NotebookImage = styled.div`
  background: url('${props => props.src}') no-repeat center;
  background-size: cover;


`;
