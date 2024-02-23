import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  width: fit-content;
  background-color: ${(props) =>props.theme.panelBackgroundColor};
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colorWhite};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 150%;
  gap: 3%;
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonColorHoverActive};
  }
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
