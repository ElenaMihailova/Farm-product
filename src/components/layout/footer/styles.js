import styled from 'styled-components';

import {Section} from '../../styled';

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.04);
`;

export const Wrapper = styled(Section)`
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
`;

export const Copyright = styled.span`
  min-width: 148px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  vertical-align: middle;
  text-align: right;
`;
