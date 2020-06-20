class Chef {
    constructor() { }


    preperFood(order) {
        return new Promise(food => {
            setTimeout(function(){
                //how well cooked the food is
                food(Math.floor(Math.random() * 4000))
            }, order);
        });
    }
}

module.exports = Chef;