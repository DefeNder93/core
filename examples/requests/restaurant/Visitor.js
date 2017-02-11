function createVisitor(name, preferredType) {
    return {
        preferredType: preferredType,
        name: name,
        takePlate: function() {
            var _this = this;
            var plate = CatchRequest(Cook_putPlate);

            console.log('plateType ' + plate.type);

            return function(success, error) {
                if (plate.type === _this.preferredType) {
                    success(_this.name)
                }
            }

        }
    };
}