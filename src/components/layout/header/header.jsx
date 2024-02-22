import Logo from '../../ui/logo/logo';
import Button from '../../ui/button/button';
import CartIcon from '../../../assets/cart.png';
import { AppRoute } from '../../../const';

import * as Styled from './styles';

function Header() {
  return (
    <Styled.Header as='header'>
      <Styled.Wrapper>
        <Logo />
        <Button link={AppRoute.CATALOG}>
          <img src={CartIcon} alt='/' />
          <span>Cart</span>
        </Button>
      </Styled.Wrapper>
    </Styled.Header>
  );
}

export default Header;
