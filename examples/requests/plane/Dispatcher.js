Core.registerRequestPoint('Dispatcher_GetPermission');
var runwayState = false; // true - free, false - busy

var Dispatcher = {
    processStartRequest: function() {
        CatchRequest(Dispatcher_GetPermission);

        return function(success, error) {
            runwayState ? success() : error();
        }

    }
};