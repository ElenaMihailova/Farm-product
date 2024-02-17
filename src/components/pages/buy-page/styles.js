import styled, {css} from 'styled-components';
import {Swiper} from 'swiper/react';
import checkboxSelect from '../../../assets/checkbox.svg';
import 'swiper/css';
import Panel from '../../ui/panel/panel';
import {Section} from '../../styled';

export const BuySection = styled(Section)`
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  max-width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-left: 0;
  padding-right: 0;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 30%;
  padding-right: ${(props) => props.theme.indent};
  overflow-y: overlay;
  max-height: 100%;
`;

export const ProductSwiper = styled(Swiper)`
  width: 65%;
  max-height: ${(props) => `calc(100vh - ${props.theme.headerHeight + props.theme.footerHeight}px)`};

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: '';
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const PanelWrapper = styled(Panel)`
  flex-direction: column;
`;
