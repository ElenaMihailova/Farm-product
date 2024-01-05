import {Title, TitleSize} from '../../ui/title/title';
import {StyledAbout, Text} from './styles';

function About() {
  return (
    <StyledAbout>
      <Title size={TitleSize.BIG}>Buy farm produce with delivery</Title>
      <Text>
        All products are made to order. The farmers start preparing the products
        the day before the order is sent to the customer. This is why we take
        orders in advance and deliver the products as fresh as possible.
      </Text>
    </StyledAbout>
  );
}

export default About;
