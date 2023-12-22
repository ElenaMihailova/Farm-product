import Logo from '../../ui/logo/logo';
import Button from '../../ui/button/button';
import CartIcon from '../../../assets/cart.png';

import './style.css';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <Button>
        <img src={CartIcon} alt='/' className='header__icon' />
        <span>Cart</span>
      </Button>
    </header>
  );
}

export default Header;
