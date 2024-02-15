import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';
import Header from '../header/header';
import OrderPage from '../../pages/order-page/order-page';

import {Main} from './styles';

function PageWrapper({products}) {
  return (
    <>
      <Header />
      <Main>
        {/* <MainPage features={features} /> */}
        <OrderPage products={products} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
