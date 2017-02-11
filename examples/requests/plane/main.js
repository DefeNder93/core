Core.processGlobal();
Plane.askPermission();

if (!Plane.started) {
    waitForStart();
}

setTimeout(function(){
    runwayState = true;
}, 8000);

function waitForStart() {
    setTimeout(function(){
        Plane.askPermission();
        if (!Plane.started) {
            waitForStart();
        }
    }, 3000);
}