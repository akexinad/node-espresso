// adding a default value so JS doesn't return undefined.

const greeter = (name = 'Andrew', age) => {
  console.log('Hello ' + name);
};

// greeter('Andrew');

greeter();

//////////////////////////////////////////

const product = {
  label: 'Red Note Book',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// To set up a default param for destructured object variables, simply add = {}

const transaction = (type, { label = "Socks", stock = 0 } = {}) => {
  console.log(type, label, stock);
}

transaction('order', product);
transaction('order');
