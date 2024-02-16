// import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';
import Header from '../header/header';
import BuyPage from '../../pages/buy-page/buy-page';

import {Main} from './styles';

function PageWrapper({products}) {
  return (
    <>
      <Header />
      <Main>
        {/* <MainPage features={features} /> */}
        <BuyPage products={products} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
