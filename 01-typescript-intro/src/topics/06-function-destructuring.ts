
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const table: Product = {
    description: "iPad Air",
    price: 250.0
}

//The custom object is created to send the information to the function
interface TaxCalculationOption {
    tax: number;
    products: Product[];
}

//Is possible that the function receive more than three parameters, in that scenario, it is more clean to send an object.
//In the return type, if always return two values as number, it is possible to specify [number,number] rather than number[]
//function taxCalculation(options: TaxCalculationOption) : [number,number]{

//There is another option to send only some properties to not send the entire object
//function taxCalculation( {tax, products} : TaxCalculationOption) : [number,number]{

//And finally, we can send the entire object, and inside the function, access to only those attributes:
function taxCalculation(options: TaxCalculationOption): [number, number] {
    //The destructuring is used to obtain the information from the object, the total amount
    const { tax, products } = options;

    let total = 0;
    //Use only attribute price instead of use product.price:
    products.forEach(({ price }) => {
        total += price;
    });

    //The function returns the total amount and the total amount with the tax:
    return [total, total * tax];
}

//Create an array of products
const shoppingCart = [phone, table];
const tax = 0.15;
//Send the values to the function and return each value in a const instead of use result[0], result[1]
const [total, totalTax] = taxCalculation({ tax, products: shoppingCart });
//The function returns an array, so we don't use curly braces:
console.log("Total without tax: ", total);
console.log("Total with tax: ", totalTax);
export { };