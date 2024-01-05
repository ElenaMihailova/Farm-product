import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';
import Header from '../header/header';

import {Main} from './styles';

function PageWrapper({features}) {
  return (
    <>
      <Header />
      <Main>
        <MainPage features={features} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
