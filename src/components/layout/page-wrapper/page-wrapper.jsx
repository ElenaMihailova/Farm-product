import Footer from '../footer/footer';
import Header from '../header/header';

import {Main} from './styles';
import {Outlet} from 'react-router-dom';

function PageWrapper({products}) {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
