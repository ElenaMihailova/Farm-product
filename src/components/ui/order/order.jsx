import Button from '../button/button';
import Price from '../price/price';

import * as Styled from './styles';

export default function Order({value, className, address, onChange, onClick}) {
  return (
    <>
      <Styled.AddressInput
        value={address}
        onChange={onChange}
        placeholder='Enter shipping address'
      ></Styled.AddressInput>
      <Styled.PriceLabel>Total amount</Styled.PriceLabel>
      <Price className={className} value={value} />
      <Button onClick={onClick}>CHECKOUT</Button>
    </>
  );
}
