import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantagesInfo from '../../mocks/advantageInfo';
import './style.css';

function App() {
  return <PageWrapper features={advantagesInfo} />;
}

export default App;
