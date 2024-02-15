import {useState} from 'react';
import {Panel} from '../../ui/panel/panel';
import {Title, TitleSize} from '../../ui/title/title';
import Filter from '../../blocks/filter/filter';
import category from '../../../mocks/category';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import * as Styled from './styles';
import ProductCart from '../../ui/product-cart/product-cart';

function OrderPage({products}) {
  const [selectProductIds, setSelectProductIds] = useState([]);

  return (
    <Styled.Section as='form'>
      <Styled.Wrapper>
        <Styled.FilterWrapper marginBottom={20}>
          <Title as='h2' size={TitleSize.SMALL} marginBottom={12}>
            Choose products
          </Title>
          <Filter
            labelComponent={Styled.CheckboxLabel}
            name={'select-products'}
            isGridList={false}
            types={products.map((product) => ({
              value: product.id,
              title: product.name,
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
          />
        </Styled.FilterWrapper>
        <Panel>
          <Title as='h2' size={TitleSize.SMALL}>
            Make an order
          </Title>
        </Panel>
      </Styled.Wrapper>
      <Styled.ProductSwiper
        direction='vertical'
        loop={true}
        slidesPerView={'auto'}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </Styled.ProductSwiper>
    </Styled.Section>
  );
}

export default OrderPage;
