Core.processGlobal();

setTimeout(function(){
    runwayState = true;
}, 8000);

Plane.waitForStart();