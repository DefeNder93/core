angular.module('demoApp', ['ngCore'])
    .controller('MainController', function($scope, $http, ngCoreService){
        ngCoreService.EnableEventsTracking();
        
        // --------
        Core.registerRequestPoint('Plane_GetPermissionRq');

        var runwayState = false; // true - free, false - busy
        var Dispatcher = {
            processStartRequest: function() {
                CatchRequest(ngCoreService.g.Plane_GetPermissionRq);

                return function(success, error) {
                    runwayState ? success() : error();
                }

            }
        };
        ngCoreService.registerObject(Dispatcher);  // .processStartRequest

        var Plane = {
            started: false,
            askPermission: function() {
                var _this = this;
                FireRequest(new ngCoreService.g.Plane_GetPermissionRq, function() {
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
        ngCoreService.registerObject(Plane);

        Core.processGlobal();
        Plane.waitForStart();
        // --------


        setTimeout(function(){
            console.log('runwayState -> true');
            runwayState = true;
        }, 4000);
    });