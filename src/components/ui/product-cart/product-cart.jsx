import Panel from '../panel/panel';
import {Title, TitleSize} from '../title/title';

import * as Styled from './styles';

function ProductCart({product}) {
  return (
    <Panel>
      <Styled.Image src={product.image} alt={product.name}></Styled.Image>
      <Styled.Wrapper>
        <Title size={TitleSize.SMALL}>{product.name}</Title>
        <Styled.Price>
          {product.price} € /{product.weight} g.
        </Styled.Price>
      </Styled.Wrapper>
    </Panel>
  );
}

export default ProductCart;
