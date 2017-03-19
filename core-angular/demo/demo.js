angular.module('demoApp', ['ngCore'])
    .controller('MainController', function($scope, $http, ngCore){
        ngCore.registerRequestPoint('Plane_GetPermissionRq');

        var runwayState = false; // true - free, false - busy
        setTimeout(function(){
            console.log('runwayState -> true');
            runwayState = true;
        }, 4000);

        var Dispatcher = ngCore.registerObj({
            processStartRequest: function() {
                ngCore.CatchRequest(ngCore.g.Plane_GetPermissionRq);

                return function(success, error) {
                    runwayState ? success() : error();
                }

            }
        });

        var Plane = ngCore.registerObj({
            started: false,
            askPermission: function() {
                var _this = this;
                ngCore.FireRequest(new ngCore.g.Plane_GetPermissionRq, function() {
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
        });

        Plane.waitForStart();

    });