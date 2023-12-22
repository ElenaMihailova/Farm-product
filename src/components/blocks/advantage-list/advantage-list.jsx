import AdvantageCard from '../../ui/advantage-card/advantage-card';
import Button from '../../ui/button/button';
import Title from '../../ui/title/title';
import CartIcon from '../../../assets/cart.png';

import './style.css';

function AdvantageList({features}) {
  return features && features.length ? (
    <section className='features'>
      <Title>Why are farm products better?</Title>
      <ul className='features__list'>
        {features.map((feature) => (
          <li  className="features__item" key={feature.id}>
            <AdvantageCard {...feature} />
          </li>
        ))}
      </ul>
      <Button>
        <img src={CartIcon} alt='/' />
        <span>Cart</span>
      </Button>
    </section>
  ) : null;
}

export default AdvantageList;
