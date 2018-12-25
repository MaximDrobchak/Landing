import styled from 'styled-components';

export const HeadLine = styled.span`
  margin-left: 10px;
  color: #189af1;
  font-size: 20px;
  font-weight: bold;
`;

export const TextArticle = styled.p`
  font-family: Roboto;
  font-size: 1em;
  line-height: 1.5;
  letter-spacing: 0.3px;
  text-align: left;
  width: 304px;
  height: 92px;
  text-align: left;
  color: ${props => props.textColor};

  @media (max-width: 1100px) {
    width: 250px;
  }
`;

export const Icon = styled.img`
  height: 56px;
`;
export const Image = styled.img`
  width: 100%;
`;
export const ContainerArticle = styled.div`
  margin: auto;
`;
