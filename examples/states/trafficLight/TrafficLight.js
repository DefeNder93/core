var TrafficLight = {
    state: Core.state('Red', 'Yellow', 'Green'),
    __init: function() {
        this.state.go('Yellow');
    },
    switchToRed: function() {
        CatchEvent(TrafficLight.state.GoYellow);
        setTimeout(function() { this.state.go('Red'); }.bind(TrafficLight), 1000);
    },
    switchToGreen: function() {
        CatchEvent(TrafficLight.state.GoRed);
        setTimeout(function() { this.state.go('Green'); }.bind(TrafficLight), 2000);
    },
    switchToYellow: function() {
        CatchEvent(TrafficLight.state.GoGreen);
        setTimeout(function() { this.state.go('Yellow'); }.bind(TrafficLight), 3000);
    }
};