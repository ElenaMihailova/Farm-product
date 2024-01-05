import {Title, TitleSize} from '../title/title';

import {Advantage, Header, Image, Owner, Text} from './styles';

function AdvantageCard({title, owner, about, isNegative, image}) {
  return (
    <Advantage isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title size={TitleSize.EXTRA_SMALL}>{title}</Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{__html: about}}></Text>
    </Advantage>
  );
}

export default AdvantageCard;
