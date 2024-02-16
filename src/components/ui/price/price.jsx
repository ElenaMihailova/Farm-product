import * as Styled from './styles';

// Takes a number, rounds it to an integer, converts it to a string and adds a space after each group of three digits
const formatPrice = (value) => {
  const roundedPrice = Math.round(value);
  return roundedPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, '$1 ');
};

export default function Price({value}) {
  return <Styled.Price>{formatPrice(value)}</Styled.Price>;
}
