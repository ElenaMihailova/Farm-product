import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';

import * as Styled from './styles';

function Header() {
  return (
    <Styled.Header as='header'>
      <Styled.Wrapper>
        <Logo />
        <Nav/>
      </Styled.Wrapper>
    </Styled.Header>
  );
}

export default Header;
