import styled from 'styled-components';
import TextInput from '../../styled/text-input/text-input';

export const AddressInput = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.indent};
  margin-top: ${(props) => props.theme.indent};
`;

export const PriceLabel = styled.span`
  font-size: 14px;
  margin-bottom: 6px;
`;
