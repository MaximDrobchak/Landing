import styled from 'styled-components';

export const ArticleStyle = styled.div`
  width: 55%;
  display: grid;
  grid: repeat(2, 1fr) / 1fr;
  grid-column: ${props => props.column};

  ${props => (props.column === '1/2' ? 'z-index: 2;' : 'z-index: 0;')}
`;
