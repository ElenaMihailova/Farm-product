import logo from "../../../assets/logo.svg";

import {StyledLogo, Text} from './styles';

export default function Logo() {
  return (
    <StyledLogo href="/" >
      <img src={logo} alt="Logo farm product" />
      <Text className="logo__text">Farm product</Text>
    </StyledLogo>
  );
}
