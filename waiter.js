const chef = require('./chef.js');
const customer = require('./customer.js');

var c1 = new customer();
var c2 = new customer();
var c3 = new customer();
var c4 = new customer();
var c5 = new customer();

var cook = new chef();

let menu = [1000, 2000, 3000, 4000, 5000];
let customers = [c1,c2,c3,c4,c5];


function serveCustomer(customer) {
    console.log(`serving ${customer.id}`);
    return customer.placeOrder(menu)
        .then(order => {
            console.log(`order ${customer.id}`);
            return cook.preperFood(order)
        })
        .then(food => {
            console.log(`eat ${customer.id}`);
            return customer.eatAndPay(food)
        });
}

function serverCustomers(customers) {
    customers.forEach(function(customer){
        serveCustomer(customer);
    })
}

serverCustomers(customers);
console.log('end of file');