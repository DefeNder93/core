var createVisitor = require('../examples/requests/restaurant/Visitor.js');
var assert = require('assert');
describe("RestaurantSpec", function() {
    context('main context', function(){
        var include = require('./helpers/Utils').include;
        include('Core.js');

        Core.registerEventPoint('DOM_Init'     , {log: false});
        include('examples/requests/restaurant/Cook.js');
        
        global.John = createVisitor('John','Rolls');
        global.Ada = createVisitor('Ada','Ramen');
        
        beforeEach(function() {
            Core.processGlobal();
        });

        it("Test Restaurant", function(done) {
            Cook.putPlate({type: 'Ramen'});
            Cook.putPlate({type: 'Sushi'});
            Cook.putPlate({type: 'Rolls'});
            assert.equal(John.eaten[0], 'Rolls');
            assert.equal(Ada.eaten[0], 'Ramen');
            done();
        });
    });
});

