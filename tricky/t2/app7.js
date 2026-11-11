const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 15000 },
];
const withTax = products.map(function (product) {
  return {
    name: product.name,
    price: product.price * 1.18,
  };
});

console.log(withTax);
