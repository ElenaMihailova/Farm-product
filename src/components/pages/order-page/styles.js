import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

export const Section = styled.section`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;

export const Wrapper = styled.div`
  width: 30%;
  padding-right: ${(props) => props.theme.indent};
  overflow-y: overlay;
  max-height: 100%;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;
  max-height: 80vh;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
