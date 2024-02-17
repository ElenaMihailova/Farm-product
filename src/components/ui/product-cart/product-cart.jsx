import Panel from '../panel/panel';
import {Title, TitleSize} from '../title/title';
import Tabs from '../tabs/tabs';
import OptionsList from '../options-list/options-list';

import * as Styled from './styles';

function ProductCart({product}) {
  const tabsList = [
    {
      title: 'Oписание',
      content: product.description,
    },
    {
      title: 'Характеристики',
      content: <OptionsList list={product.specifications} />,
    },
    {
      title: 'Свойства',
      content: <OptionsList list={product.structure} />,
    },
  ];
  return (
    <Panel>
      <Styled.ImageWrapper>
        <Styled.Image src={product.image} alt={product.name}></Styled.Image>
      </Styled.ImageWrapper>
      <Styled.Wrapper>
        <Title size={TitleSize.SMALL}>{product.name}</Title>
        <Tabs tabsList={tabsList} maxContentHeiht='150px'  />
        <Styled.Price>
          {product.price} € /{product.weight} g.
        </Styled.Price>
      </Styled.Wrapper>
    </Panel>
  );
}

export default ProductCart;
