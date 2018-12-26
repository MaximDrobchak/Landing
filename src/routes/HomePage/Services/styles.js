import styled from 'styled-components';

export const ServicesGrid = styled.div`
  display: grid;
  grid: repeat(2, 1fr) / repeat(4, 1fr);
  grid-gap: 1.1em;
  padding-top: 20px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  grid-row: 2 / 3;
  grid-column: 3 / 5;
`;

export const HeadText = styled.h3`
  font-size: 100%;
  line-height: 1.2;
  letter-spacing: 0.4px;
  text-align: center;
  color: #189af1;

  @media (max-width: 1095px) {
    font-size: 1em;
  }
`;

export const ServicesContainerPage = styled.div`
  text-align: center;
  padding-bottom: 60px;
  background-color: #eaeaea;
`;
