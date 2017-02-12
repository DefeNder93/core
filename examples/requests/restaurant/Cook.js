Core.registerRequestPoint('Cook_putPlate');

var Cook = {
    putPlate: function(plate) {
        FireRequest(new Cook_putPlate(plate), function(name) {
            console.log('Cook: Visitor ' + name + ' take the plate ' + plate.type + ', it\'s time to cook new one!' );
        }, function() {
            console.log('Cook: No one want to take it. I\'ll give that plate to a cate!' );
        });
    }
};