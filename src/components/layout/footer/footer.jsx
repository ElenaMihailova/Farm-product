import Logo from '../../ui/logo/logo';

import * as Styled from './styles';

function Footer() {
  return (
    <Styled.Footer as='footer'>
      <Styled.Wrapper>
        <Logo />
        <Styled.Copyright>Created 2023</Styled.Copyright>
      </Styled.Wrapper>
    </Styled.Footer>
  );
}

export default Footer;
