import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  padding-top: ${(props) => props.theme.headerHeight};
  padding-bottom: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.backgroundColorGray};
`;
