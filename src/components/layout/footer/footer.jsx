import Logo from '../../ui/logo/logo';
import {StyledFooter, StyledCopyright} from './styles';

function Footer() {
  return (
    <StyledFooter as='footer'>
      <Logo />
      <StyledCopyright>Created 2023</StyledCopyright>
    </StyledFooter>
  );
}

export default Footer;
