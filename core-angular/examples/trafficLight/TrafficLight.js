angular.module('demoApp', ['ngCore'])
    .controller('MainController', function($scope, ngCore){
        var TrafficLight = ngCore.registerObj({
            state: ngCore.state('Red', 'Yellow', 'Green'),
            __init: function() {
                this.state.go('Yellow');
            },
            switchToRed: function() {
                ngCore.CatchEvent(ngCore.g.TrafficLight.state.GoYellow);
                setTimeout(function() { this.state.go('Red'); }.bind(TrafficLight), 1000);
            },
            switchToGreen: function() {
                ngCore.CatchEvent(ngCore.g.TrafficLight.state.GoRed);
                setTimeout(function() { this.state.go('Green'); }.bind(TrafficLight), 2000);
            },
            switchToYellow: function() {
                ngCore.CatchEvent(ngCore.g.TrafficLight.state.GoGreen);
                setTimeout(function() { this.state.go('Yellow'); }.bind(TrafficLight), 3000);
            }
        }, 'TrafficLight');
        TrafficLight.state.value = 'Green'; // initial value

        var Car = ngCore.registerObj({
            moving: false,
            redReaction: function() {
                ngCore.CatchEvent(ngCore.g.TrafficLight.state.GoRed);
                console.log(this.moving ? 'Car: Already Started' : 'Car: Stop');
            },
            yellowReaction: function() {
                ngCore.CatchEvent(ngCore.g.TrafficLight.state.GoYellow);
                console.log(this.moving ? 'Car: Already Started' : 'Car: Prepare');
            },
            greenReaction: function() {
                ngCore.CatchEvent(ngCore.g.TrafficLight.state.GoGreen);
                console.log(this.moving ? 'Car: Already Started' : 'Car: Go');
                this.moving = true;
            }
        }, 'Car');
        
    });
