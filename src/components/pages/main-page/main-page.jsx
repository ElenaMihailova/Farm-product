import About from '../../blocks/about/about';
import AdvantageList from '../../blocks/advantage-list/advantage-list';

function MainPage({features}) {
  return (
    <>
      <About />
      <AdvantageList features={features} />
    </>
  );
}

export default MainPage;
