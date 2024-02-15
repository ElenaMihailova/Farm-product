import styled from 'styled-components';
import {Img} from '../../styled/index';

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  margin-right: 20px;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  position: relative;
  float: right;
  width: 417px;
  min-height: 248px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

export const Price = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  background-color: ${(props) => props.theme.backgroundColorBlue};
`;

export const ImageWrapper=styled.div`
  width: 248px;
  height: auto;
  aspect-ratio: 1/1;
  margin-right: 20px;
`