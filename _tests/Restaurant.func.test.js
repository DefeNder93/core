describe("RestaurantSpec", function() {
    var include = require('./helpers/Utils').include;

    include('Core.js');
    Core.registerEventPoint('DOM_Init'     , {log: false});
    include('examples/requests/restaurant/Cook.js');
    include('examples/requests/restaurant/Visitor.js');

    beforeEach(function() {
        Core.processGlobal();
    });

    it("Test restaurant", function(done) {

        var John = createVisitor('John','Rolls');
        var Ada = createVisitor('Ada','Ramen');

        Cook.putPlate({type: 'Ramen'});
        //Cook.putPlate({type: 'Sushi'});
        //Cook.putPlate({type: 'Rolls'});

        setTimeout(function(){
            done();
        }, 7000);
    });

});
