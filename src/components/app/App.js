import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantagesInfo from '../../mocks/advantageInfo';

import {GlobalStyle} from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={advantagesInfo} />;
    </>
  );
}

export default App;
