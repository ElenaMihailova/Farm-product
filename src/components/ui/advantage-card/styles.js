import styled from 'styled-components';
import {Img, P} from '../../styled';

export const Advantage = styled.article`
  width: 540px;
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? '#f8ddd7' : '#e1edce')};
  box-sizing: border-box;
  border-radius: 30px;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: 20px;
  text-align: left;
`;

export const Image = styled(Img)`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: ${(props) => props.theme.indent};
`;

export const Owner = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  margin-left: ${(props) => props.indent};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.panelBackgroundColorDanger
      : props.theme.panelBackgroundColor};
`;

export const Text = styled(P)`
  text-align: left;
`;
