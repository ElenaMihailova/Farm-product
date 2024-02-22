import logo from "../../../assets/logo.svg";

import * as Styled from './styles';

export default function Logo() {
  return (
    <Styled.Logo to="/" >
      <Styled.LogoImg src={logo} alt="Logo farm product"></Styled.LogoImg>
      <Styled.Text className="logo__text">Farm product</Styled.Text>
    </Styled.Logo>
  );
}
