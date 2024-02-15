import {Ul} from '../../styled';

import * as Styled from './styles';

export default function OptionsList({list = [], delimeter = ': '}) {
  return (
    <Ul>
      {list.map((option, index) => (
        <Styled.Option key={index}>
          <Styled.Property>
            {option.property}
            {delimeter}
          </Styled.Property>
          {option.value}
        </Styled.Option>
      ))}
    </Ul>
  );
}
