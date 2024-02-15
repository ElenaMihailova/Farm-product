const products = [
  {
    id: 0,
    name: 'Haloumi Cheese',
    description:
      "This Greek cheese is made from cow's milk and has a strong yet salty flavour. The main feature of Haloumi is that it can be grilled or pan-fried, and the cheese retains its texture and does not spread. Toasted cheese should be served hot with a side of vegetables.",
    price: 10,
    weight: 300,
    image: 'https://images.pexels.com/photos/5836618/pexels-photo-5836618.jpeg',
    specifications: [
      {
        property: 'Weight',
        value: '0,3 kg.',
      },
      {
        property: 'Expiration date',
        value: '30 days',
      },
      {
        property: 'Fat content',
        value: '16%',
      },
      {
        property: 'Place of origin',
        value: 'Novi Sad',
      },
    ],
    structure: [
      {
        property: 'Energy value',
        value: '256 kcal / 1071 kJ',
      },
      {
        property: 'Nutritional value',
        value: 'proteins-25 g, fats - 16 g,  carbohydrates - 6 g; per 100 g.',
      },
    ],
  },
  {
    id: 1,
    name: 'Parmesan Cheese',
    description:
      'Parmesan cheese is a hard, granular cheese, aged for 12-36 months, with a sharp, nutty taste. It is produced in several provinces of Italy and is used in many Italian dishes, especially pasta and risotto.',
    price: 30,
    weight: 200,
    image:
      'https://images.pexels.com/photos/13728913/pexels-photo-13728913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specifications: [
      {
        property: 'Weight',
        value: '0,2 kg.',
      },
      {
        property: 'Expiration date',
        value: '90 days',
      },
      {
        property: 'Fat content',
        value: '32%',
      },
      {
        property: 'Place of origin',
        value: 'Italy',
      },
    ],
    structure: [
      {
        property: 'Energy value',
        value: '400 kcal / 1674 kJ',
      },
      {
        property: 'Nutritional value',
        value: 'proteins - 28 g, fats - 32 g, carbohydrates - 0 g; per 100 g.',
      },
    ],
  },
  {
    id: 2,
    name: 'Mozzarella Cheese',
    description:
      "Mozzarella is a fresh, soft cheese, traditionally made from Italian buffalo or cow's milk. It has a mild, milky flavour and a smooth texture, making it popular in salads, sandwiches, and pizzas.",
    price: 10,
    weight: 250,
    image:
      'https://images.pexels.com/photos/14587654/pexels-photo-14587654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specifications: [
      {
        property: 'Weight',
        value: '0,25 kg.',
      },
      {
        property: 'Expiration date',
        value: '14 days',
      },
      {
        property: 'Fat content',
        value: '22%',
      },
      {
        property: 'Place of origin',
        value: 'Italy',
      },
    ],
    structure: [
      {
        property: 'Energy value',
        value: '200 kcal / 837 kJ',
      },
      {
        property: 'Nutritional value',
        value: 'proteins - 18 g, fats - 22 g, carbohydrates - 2 g; per 100 g.',
      },
    ],
  },
  {
    id: 3,
    name: 'Gouda Cheese',
    description:
      "Gouda cheese is a mild, yellow cheese made from cow's milk. It has a smooth, creamy texture and a slightly sweet taste. Gouda is often used in sandwiches, salads, and as a snack.",
    price: 35,
    weight: 350,
    image:
      'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specifications: [
      {
        property: 'Weight',
        value: '0,35 kg.',
      },
      {
        property: 'Expiration date',
        value: '60 days',
      },
      {
        property: 'Fat content',
        value: '28%',
      },
      {
        property: 'Place of origin',
        value: 'Netherlands',
      },
    ],
    structure: [
      {
        property: 'Energy value',
        value: '300 kcal / 1255 kJ',
      },
      {
        property: 'Nutritional value',
        value: 'proteins - 24 g, fats - 28 g, carbohydrates - 2 g; per 100 g.',
      },
    ],
  },
  {
    id: 4,
    name: 'Cheddar Cheese',
    description:
      "Cheddar cheese is a hard, yellow cheese made from cow's milk. It has a sharp, tangy taste and a smooth, firm texture. Cheddar is often used in sandwiches, burgers, and as a topping for soups and salads.",
    price: 50,
    weight: 400,
    image: 'https://images.pexels.com/photos/543733/pexels-photo-543733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specifications: [
      {
        property: 'Weight',
        value: '0,4 kg.',
      },
      {
        property: 'Expiration date',
        value: '45 days',
      },
      {
        property: 'Fat content',
        value: '34%',
      },
      {
        property: 'Place of origin',
        value: 'United Kingdom',
      },
    ],
    structure: [
      {
        property: 'Energy value',
        value: '350 kcal / 1464 kJ',
      },
      {
        property: 'Nutritional value',
        value: 'proteins - 26 g, fats - 34 g, carbohydrates - 1 g; per 100 g.',
      },
    ],
  },
  {
    id: 5,
    name: 'Blue Cheese',
    description:
      "Blue cheese is a type of cheese made from cow's milk, with distinctive blue veins or spots of mold throughout. It has a strong, tangy taste and a crumbly texture. Blue cheese is often used in salads, dressings, and as a dessert cheese.",
    price: 45,
    weight: 300,
    image:
      'https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specifications: [
      {
        property: 'Weight',
        value: '0,3 kg.',
      },
      {
        property: 'Expiration date',
        value: '60 days',
      },
      {
        property: 'Fat content',
        value: '30%',
      },
      {
        property: 'Place of origin',
        value: 'France',
      },
    ],
    structure: [
      {
        property: 'Energy value',
        value: '320 kcal / 1340 kJ',
      },
      {
        property: 'Nutritional value',
        value: 'proteins - 22 g, fats - 30 g, carbohydrates - 4 g; per 100 g.',
      },
    ],
  },
  {
    id: 6,
    name: 'Feta Cheese',
    description:
      "Feta cheese is a crumbly, salty cheese made from sheep's milk or a combination of sheep's and goat's milk. It has a tangy flavour and is often used in Greek salads, pastries, and as a topping for grilled vegetables.",
    price: 35,
    weight: 250,
    image:
      'https://images.pexels.com/photos/1535418/pexels-photo-1535418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specifications: [
      {
        property: 'Weight',
        value: '0,25 kg.',
      },
      {
        property: 'Expiration date',
        value: '30 days',
      },
      {
        property: 'Fat content',
        value: '20%',
      },
      {
        property: 'Place of origin',
        value: 'Greece',
      },
    ],
    structure: [
      {
        property: 'Energy value',
        value: '280 kcal / 1171 kJ',
      },
      {
        property: 'Nutritional value',
        value: 'proteins - 22 g, fats - 20 g, carbohydrates - 2 g; per 100 g.',
      },
    ],
  },
  {
    id: 7,
    name: 'Camembert Cheese',
    description:
      "Camembert cheese is a soft, creamy cheese made from cow's milk. It has a rich, buttery flavour and a bloomy rind. Camembert is often served as a dessert cheese, paired with fruits, nuts, and bread.",
    price: 40,
    weight: 200,
    image:
      'https://images.pexels.com/photos/3522515/pexels-photo-3522515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specifications: [
      {
        property: 'Weight',
        value: '0,2 kg.',
      },
      {
        property: 'Expiration date',
        value: '14 days',
      },
      {
        property: 'Fat content',
        value: '22%',
      },
      {
        property: 'Place of origin',
        value: 'France',
      },
    ],
    structure: [
      {
        property: 'Energy value',
        value: '320 kcal / 1340 kJ',
      },
      {
        property: 'Nutritional value',
        value: 'proteins - 20 g, fats - 22 g, carbohydrates - 0 g; per 100 g.',
      },
    ],
  },
  {
    id: 8,
    name: 'Brie Cheese',
    description:
      "Brie cheese is a soft, creamy cheese made from cow's milk. It has a mild, buttery flavour and a velvety texture. Brie is often served as an appetizer or dessert cheese, paired with fruits, nuts, and crackers.",
    price: 45,
    weight: 250,
    image:
      'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specifications: [
      {
        property: 'Weight',
        value: '0,25 kg.',
      },
      {
        property: 'Expiration date',
        value: '14 days',
      },
      {
        property: 'Fat content',
        value: '25%',
      },
      {
        property: 'Place of origin',
        value: 'France',
      },
    ],
    structure: [
      {
        property: 'Energy value',
        value: '300 kcal / 1255 kJ',
      },
      {
        property: 'Nutritional value',
        value: 'proteins - 18 g, fats - 25 g, carbohydrates - 0 g; per 100 g.',
      },
    ],
  },
  {
    id: 9,
    name: 'Gorgonzola Cheese',
    description:
      "Gorgonzola cheese is a blue cheese made from cow's milk, with a creamy texture and a strong, tangy flavour. It is often used in salads, pasta dishes, and as a dessert cheese, paired with fruits and nuts.",
    price: 50,
    weight: 300,
    image:
      'https://images.pexels.com/photos/4109938/pexels-photo-4109938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    specifications: [
      {
        property: 'Weight',
        value: '0,3 kg.',
      },
      {
        property: 'Expiration date',
        value: '60 days',
      },
      {
        property: 'Fat content',
        value: '28%',
      },
      {
        property: 'Place of origin',
        value: 'Italy',
      },
    ],
    structure: [
      {
        property: 'Energy value',
        value: '320 kcal / 1340 kJ',
      },
      {
        property: 'Nutritional value',
        value: 'proteins - 24 g, fats - 28 g, carbohydrates - 2 g; per 100 g.',
      },
    ],
  },
];

export default products;
