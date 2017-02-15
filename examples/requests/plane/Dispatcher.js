var runwayState = false; // true - free, false - busy

var Dispatcher = {
    processStartRequest: function() {
        CatchRequest(Plane_GetPermissionRq);

        return function(success, error) {
            runwayState ? success() : error();
        }

    }
};