Core.registerRequestPoint('Cook_putPlate');

var Cook = {
    putPlate: function(plateType) {
        var _this = this;
        FireRequest(new Cook_putPlate(plateType), function(name) {
            console.log('Cook: Visitor ' + name + ' take the plate ' + plateType + ', it\'s time to cook new one!' );
        }, function() {
            console.log('Cook: No one want to take it. I\'ll give that plate to a cate!' );
        });
    }
};