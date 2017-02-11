Core.processGlobal();
TrafficLight.state.value = 'Green'; // initial value

function startChangingLights(light) {
    console.log('TrafficLight: current light is ' + light);
    TrafficLight.state.go(light);
    setTimeout(function(){
        switch(TrafficLight.state.value) {
            case 'Red':
                startChangingLights('Yellow');
                break;
            case 'Yellow':
                startChangingLights('Green');
                break;
            case 'Green':
                startChangingLights('Red');
                break;
        }
    }, 3000);
}
startChangingLights('Red');