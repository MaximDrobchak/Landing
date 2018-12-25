import styled from 'styled-components';

export default styled.div`
  position: relative;
  max-width: 1200px;
  min-width: 992px;
  margin: 0 auto;
  min-height: 613px;
  max-height: 700px;
  overflow: hidden;
  white-space: nowrap;
`;

export const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transform: translateX(${props => props.translateValue}px),
  transition: 'transform ease-out 0.45s',
`;
