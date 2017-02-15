Core.registerRequestPoint('Plane_GetPermissionRq');
var Plane = {
    started: false,
    askPermission: function() {
        var _this = this;
        FireRequest(new Plane_GetPermissionRq, function() {
            console.log('Plane: Permission was received, start');
            _this.started = true;
        }, function() {
            console.log('Plane: Permission was rejected, waiting');
        });
    },
    waitForStart: function() {
        this.askPermission();
        setTimeout(function(){
            if (!Plane.started) {
                Plane.waitForStart();
            }
        }, 3000);
    }
};