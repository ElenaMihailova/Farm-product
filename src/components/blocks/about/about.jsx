import Title from '../../ui/title/title';

import './style.css';

function About() {
  return (
    <section className='about'>
      <Title size='BIG'>Buy farm produce with delivery</Title>
      <p className='about__text'>
        All products are made to order. The farmers start preparing the products
        the day before the order is sent to the customer. This is why we take
        orders in advance and deliver the products as fresh as possible.
      </p>
    </section>
  );
}

export default About;
