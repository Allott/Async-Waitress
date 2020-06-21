var count = 0;
class Customer {
    constructor() {
        this.id = ++count;
     }

     async placeOrder (menu) {

        let promise = new Promise(order => {

            setTimeout(function(){

                //order random item from the menu
                order(menu[Math.floor(Math.random() * menu.length)]);

            }, Math.floor(Math.random() * 4000));//random amount of time to order
        });

        let result = await promise;

        return result;

    }

    async eatAndPay(food) {

        let promise =  new Promise(tip => {

            setTimeout(function(){

                //tip based on how well cooked the food was
                tip(2*food);

            }, Math.floor(Math.random() * 4000));//random amount of time to eat
            
        });

        let result = await promise;

        return result;

    }
}

module.exports = Customer;