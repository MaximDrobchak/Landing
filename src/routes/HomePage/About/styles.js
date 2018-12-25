import styled from 'styled-components';

export const AboutGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid: 1fr / repeat(5, 1fr);
`;

export const ArticleDevelopen = styled.div`
  text-align: left;
  z-index: 1;
  grid-row: 1 / 5;
  grid-column: 1 / 4;
`;
export const ArticleStrategy = styled.div`
  background: #3d577c;
  z-index: 2;
  text-align: left;
  display: flex;
  max-height: 300px;
  grid-row: 1 / 3;
  grid-column: 3 / 7;
`;

export const ArticleConsulting = styled.div`
  padding: 3em 0 0 4em;
  position: relative;
  text-align: left;
  grid-row: 3 / 5;
  z-index: 2;
  grid-column: 4 / 6;
`;
