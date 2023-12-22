import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';
import Header from '../header/header';

import "./style.css";

function PageWrapper({features}) {
  return (
    <>
      <Header />
      <main className='page-wrapper__main'>
        <MainPage features={features} />
      </main>

      <Footer />
    </>
  );
}

export default PageWrapper;
