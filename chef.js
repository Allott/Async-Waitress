class Chef {
    constructor() { }


    async preperFood(order) {

        let promise = new Promise(food => {
            setTimeout(function(){
                //how well cooked the food is
                food(Math.floor(Math.random() * 4000))
            }, order);
        });

        let result = await promise;

        return result;

    }
}

module.exports = Chef;