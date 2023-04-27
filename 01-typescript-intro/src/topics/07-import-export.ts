import { Product, taxCalculation } from './06-function-destructuring'

//Import product interface and create an array

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'Iphone',
        price: 200
    },
];

const tax = 0.15;
const [total, totalTax] = taxCalculation({ tax, products: shoppingCart });

console.log('Total', total);
console.log('Tax', totalTax);