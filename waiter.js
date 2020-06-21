const chef = require('./chef.js');
const customer = require('./customer.js');

var c1 = new customer();
var c2 = new customer();
var c3 = new customer();
var c4 = new customer();
var c5 = new customer();

var cook = new chef();

let menu = [1000, 2000, 3000, 4000, 5000];//menu is just the cook times
let customers = [c1,c2,c3,c4,c5];


async function serveCustomer(customer) {
    console.log(`serving ${customer.id}`);
    let order = await customer.placeOrder(menu);
    console.log(`ordered ${customer.id}`);
    let food = await cook.preperFood(order);
    console.log(`cooked ${customer.id}`);
    let tip = await customer.eatAndPay(food);
    console.log(`${customer.id} paid ${tip}`);
}

function serverCustomers(customers) {
    customers.forEach(function(customer){
        serveCustomer(customer);
    })
}

serverCustomers(customers);
console.log('end of file');