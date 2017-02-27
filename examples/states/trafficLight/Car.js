var Car = {
    moving: false,
    redReaction: function() {
        Core.CatchEvent(TrafficLight.state.GoRed);
        console.log(this.moving ? 'Car: Already Started' : 'Car: Stop');
    },
    yellowReaction: function() {
        Core.CatchEvent(TrafficLight.state.GoYellow);
        console.log(this.moving ? 'Car: Already Started' : 'Car: Prepare');
    },
    greenReaction: function() {
        Core.CatchEvent(TrafficLight.state.GoGreen);
        console.log(this.moving ? 'Car: Already Started' : 'Car: Go');
        this.moving = true;
    }
};