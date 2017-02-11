var Plane = {
    started: false,
    askPermission: function() {
        var _this = this;
        FireRequest(new Dispatcher_GetPermission, function() {
            console.log('Plane: Permission was received, start');
            _this.started = true;
        }, function() {
            console.log('Plane: Permission was rejected, waiting');
        });
    }
};