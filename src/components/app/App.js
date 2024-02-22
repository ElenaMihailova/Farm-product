import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantagesInfo from '../../mocks/advantageInfo';
import products from '../../mocks/products';
import {AppRoute} from '../../const';
import MainPage from '../../components/pages/main-page/main-page';
import BuyPage from '../../components/pages/buy-page/buy-page';

import {GlobalStyle} from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={advantagesInfo} />} />
            <Route path={AppRoute.CATALOG} element={<BuyPage products={products}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
