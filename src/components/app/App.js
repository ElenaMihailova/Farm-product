import PageWrapper from '../layout/page-wrapper/page-wrapper';
// import advantagesInfo from '../../mocks/advantageInfo';
import products from '../../mocks/products';

import {GlobalStyle} from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper products={products} />
    </>
  );
}

export default App;
