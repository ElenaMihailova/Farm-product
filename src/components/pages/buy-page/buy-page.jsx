import {useState} from 'react';
import {Title, TitleSize} from '../../ui/title/title';
import Filter from '../../blocks/filter/filter';
import {SwiperSlide} from 'swiper/react';
import Order from '../../ui/order/order';
import 'swiper/css';

import * as Styled from './styles';
import ProductCart from '../../ui/product-cart/product-cart';

function BuyPage({products}) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Thank you for your order, you have purchased:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Total amount: ${fullPrice} руб.
    Delivery to address: ${address}.`);
  };

  const [address, setAddress] = useState('');

  const fullPrice = selectProducts.reduce(
    (summ, product) => (summ += product.price),
    0
  );

  return (
    <Styled.Section as='form'>
      <Styled.Wrapper>
        <Styled.PanelWrapper marginBottom={20}>
          <Title as='h2' size={TitleSize.SMALL} marginBottom={12}>
            Choose products
          </Title>
          <Filter
            labelComponent={Styled.CheckboxLabel}
            name={'select-products'}
            types={products.map((product) => ({
              value: product.id,
              title: product.name,
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </Styled.PanelWrapper>

        <Styled.PanelWrapper>
          <Title as='h2' size={TitleSize.SMALL}>
            Make an order
          </Title>
          <Order
            address={address}
            onChange={(e) => setAddress(e.target.value)}
            value={fullPrice}
            onClick={handleBuyClick}
          />
        </Styled.PanelWrapper>
      </Styled.Wrapper>
      <Styled.ProductSwiper
        onSwiper={setSwiperRef}
        direction='vertical'
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={12}
        scrollbar={{draggable: true}}
        mousewheel
        pagination={{
          type: 'fanction',
        }}
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

export default BuyPage;
