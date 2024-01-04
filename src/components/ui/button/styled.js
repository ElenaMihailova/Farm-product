import styled from 'styled-components';

export const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  width: fit-content;
  height: 60px;
  background: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.colorWhite};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 150%;
  border: none;
  gap: 3%;
  border-radius: 10px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonColorHoverActive};
  }
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};}
`;
