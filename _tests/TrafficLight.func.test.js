var assert = require('assert');
describe("Traffic Light", function() {
    var include = require('./helpers/Utils').include;
    include('Core.js');
    Core.registerEventPoint('DOM_Init'     , {log: false});
    include('examples/states/trafficLight/Car.js');
    include('examples/states/trafficLight/TrafficLight.js');

    beforeEach(function() {
        TrafficLight.state.value = 'Green'; // initial value
        Core.processGlobal();
    });

    it("Cars should move after Traffic Light state becomes green", function(done) {
        reset();
        setTimeout(function(){
            assert.equal(Car.moving, true);
            done();
        }, 5000);
    });

    it("cars should not move after Traffic Light state becomes red or yellow", function(done) {
        reset();
        setTimeout(function(){
            assert.equal(Car.moving, false);
            done();
        }, 3000);
    });

    function reset() {
        TrafficLight.state.go('Yellow');
        Car.moving = false;
    }

});
