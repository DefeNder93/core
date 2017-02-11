var Car = {
    moving: false,
    redReaction: function() {
        Core.CatchEvent(TrafficLight.state.GoRed);
        console.log(this.moving ? 'Car: Already Sterted' : 'Car: Stop');
    },
    yellowReaction: function() {
        Core.CatchEvent(TrafficLight.state.GoYellow);
        console.log(this.moving ? 'Car: Already Sterted' : 'Car: Prepare');
    },
    greenReaction: function() {
        Core.CatchEvent(TrafficLight.state.GoGreen);
        console.log(this.moving ? 'Car: Already Sterted' : 'Car: Go');
        this.moving = true;
    }
};