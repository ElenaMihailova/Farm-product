import Logo from '../../ui/logo/logo';
import Button from '../../ui/button/button';
import CartIcon from '../../../assets/cart.png';

import {StyledHeader} from './styles';

function Header() {
  return (
    <StyledHeader as='header'>
      <Logo />
      <Button>
        <img src={CartIcon} alt='/' />
        <span>Cart</span>
      </Button>
    </StyledHeader>
  );
}

export default Header;
