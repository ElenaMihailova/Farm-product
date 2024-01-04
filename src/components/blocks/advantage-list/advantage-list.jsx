import AdvantageCard from '../../ui/advantage-card/advantage-card';
import Button from '../../ui/button/button';
import {Title, TitleSize} from '../../ui/title/title';
import CartIcon from '../../../assets/cart.png';
import {Section, P} from '../../styled/index';

import './style.css';

function AdvantageList({features}) {
  return features && features.length ? (
    <Section className='features'>
      <Title size={TitleSize.MEDIUM}>Why are farm products better?</Title>
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
    </Section>
  ) : null;
}

export default AdvantageList;
