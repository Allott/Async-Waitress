var count = 0;
class Customer {
    constructor() {
        this.id = ++count;
     }

    placeOrder(menu) {
        return new Promise(order => {

            setTimeout(function(){

                //order random item from the menu
                order(menu[Math.floor(Math.random() * menu.length)]);

            }, Math.floor(Math.random() * 4000));//random amount of time to order
        });
    }

    eatAndPay(food) {
        return new Promise(tip => {

            setTimeout(function(){

                //order random item from the menu
                tip(2*food);

            }, Math.floor(Math.random() * 4000));//random amount of time to order
            
        });
    }
}

module.exports = Customer;