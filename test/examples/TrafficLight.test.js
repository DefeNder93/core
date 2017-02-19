var assert = require('assert');
describe("Traffic Light", function() {
    var include = require('../helpers/Utils').include;
    include('Core.js');
    Core.registerEventPoint('DOM_Init'     , {log: false});
    include('examples/states/trafficLight/Car.js');
    include('examples/states/trafficLight/TrafficLight.js');

    beforeEach(function() {
        TrafficLight.state.value = 'Green'; // initial value
        Core.processGlobal();
    });

    it("Test traffic light", function(done) {
        setTimeout(function(){
            assert.equal(Car.moving, false);
        }, 3000);
        setTimeout(function(){
            assert.equal(Car.moving, true);
            done();
        }, 7000);
    });

});
