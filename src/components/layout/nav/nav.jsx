import Button from '../../ui/button/button';
import {AppRoute} from '../../../const';
import {useLocation} from 'react-router-dom';

const buttons = [
  {
    to: AppRoute.MAIN,
    button: <span></span>,
  },
  {
    to: AppRoute.CATALOG,
    button: <Button link={AppRoute.CATALOG}>Cart</Button>,
  },
];
function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      {buttons.flatMap((button) =>
        button.to !== pageUrl ? button.button : []
      )}
    </nav>
  );
}

export default Nav;
