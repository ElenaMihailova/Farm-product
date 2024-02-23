import AdvantageCard from '../../ui/advantage-card/advantage-card';
import {TitleSize} from '../../ui/title/title';

import {StyledSection, StyledTitle, StyledButton} from './styles';
import {Ul, Li} from '../../styled';
import {AppRoute} from '../../../const';

function AdvantageList({features}) {
  return features && features.length ? (
    <StyledSection>
      <StyledTitle size={TitleSize.MEDIUM}>
        Why are farm products better?
      </StyledTitle>
      <Ul isGridList>
        {features.map((feature) => (
          <Li className='features__item' key={feature.id}>
            <AdvantageCard {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton link={AppRoute.CATALOG}>
        Cart
      </StyledButton>
    </StyledSection>
  ) : null;
}

export default AdvantageList;
