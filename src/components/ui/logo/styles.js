import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled(Link)`
  display: flex;
  margin-left: -4px;
  height: 44px;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colorTitle};

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: ${(props) => props.theme.colorTitle};
  }
`;

export const Text = styled.span`
  display: flex;
  min-height: 44px;
  margin-left: 25px;
  font-weight: bold;
  font-size: 28px;
  line-height: 44px;
  color: ${(props) => props.theme.colorTitle};
`;

export const LogoImg = styled.img`
  height: 50px;
  width: 50px;
`;
