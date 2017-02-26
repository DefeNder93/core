var assert = require('assert');
describe("Plane", function() {
    context('main context', function(){
        var include = require('./helpers/Utils').include;

        include('Core.js');
        //Core.registerEventPoint('DOM_Init'     , {log: false});
        include('examples/requests/plane/Plane.js');
        include('examples/requests/plane/Dispatcher.js');

        beforeEach(function() {
            Core.processGlobal();
        });

        it("Test plane", function(done) {
            Plane.waitForStart();

            setTimeout(function(){
                runwayState = true;
                assert.equal(Plane.started, false);
            }, 4000);

            setTimeout(function(){
                assert.equal(Plane.started, true);
                done();
            }, 7000);
        });
    });
});
