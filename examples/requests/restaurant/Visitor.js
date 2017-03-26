var createVisitor = function(name, preferredType) {
    return {
        preferredType: preferredType,
        name: name,
        eaten: [],
        takePlate: function() {
            var _this = this;
            var plate = CatchRequest(Cook_putPlate);
            console.log(name + ": I see plateType " + plate.type);

            if (plate.type === _this.preferredType) {
                return function(success, error) {
                    console.log(name + ": uhhmmmm! I've eaten the " + plate.type);
                    _this.eaten.push(plate.type);
                    success();
                }
            }
        }
    };
};
if(typeof require != 'undefined') {
    module.exports = createVisitor;
}
