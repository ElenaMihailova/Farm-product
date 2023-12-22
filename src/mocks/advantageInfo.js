import eat from '../assets/eat.svg';
import plant from '../assets/plant.svg';
import garbage from '../assets/garbage.svg';
import nomeat from '../assets/nomeat.svg';

const advantagesInfo = [
  {
    id: 0,
    owner: "Farm Products",
    isNegative: false,
    title: "Fresh Vegetables and Fruits",
    image: eat,
    about: "Discover the freshest vegetables and fruits, grown with love and care for your health, in our selection of farm products.",
  },
  {
    id: 1,
    owner: 'Grocery Store Products',
    isNegative: true,
    title: 'Expired Goods',
    image: garbage,
    about:
      'Due to the large quantity of goods, store employees often fail to replace products on time, leading to the sale of expired items.',
  },
  {
    id: 2,
    owner: 'Farm Products',
    isNegative: false,
    title: 'Natural and Organic',
    image: plant,
    about:
      'We supply local organic products grown without pesticides and chemical fertilizers, ensuring the highest quality and nutritional value.',
  },
  {
    id: 3,
    owner: "Grocery Store Products",
    isNegative: true,
    title: "Poor Quality Meat",
    image: nomeat,
    about: "Homemade sausage made from meat, salt, and spices and store-bought sausage are two completely different products that aren't even related.",
  },

];

export default advantagesInfo;
