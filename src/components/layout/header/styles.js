import styled from 'styled-components';
import {Section} from '../../styled';

export const Header = styled.div`
  width: 100%;
  height: ${(props) => props.theme.headerHeight};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  position: relative;
  background-color: ${(props) => props.theme.colorWhite};
  z-index: 5;
`;

export const Wrapper = styled(Section)`
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
`;
