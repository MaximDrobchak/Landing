import styled from 'styled-components';

export const PortfolioBackground = styled.div`
  background: rgba(0, 0, 0, 0.001);
  border: 2px solid black;
  min-height: 700px;
`;

export const DisplayStyle = styled.div`
  position: relative;
  display: grid;
  grid: repeat(2, 1fr) / repeat(2, 1fr);
  width: 100%;
  max-height: 670px;
  min-height: 620px;
`;

export const Slider = styled.div`
  position: absolute;
  width: 3000px;
  display: inline-flex;
  z-index: -10;
`;
