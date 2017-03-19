angular.module('ngCore', [])
    .service('ngCore', function() {
        this.core = Core;
        this.global = this.g = [];
        this.global._customGlobal = true;
        this.core.setGlobalObject(this.global);
        this.core.setEventPrefix('ngCore.g.');

        this.EnableEventsTracking = this.core.EnableEventsTracking.bind(this.core);
        this.DisableEventsTracking = this.core.DisableEventsTracking.bind(this.core);
        this.EventPoint = this.core.EventPoint.bind(this.core);
        this.RequestPoint = this.core.RequestPoint.bind(this.core);
        this.getStack = this.core.getStack.bind(this.core);
        this.FireEvent = this.core.FireEvent.bind(this.core);
        this.FireRequest = this.core.FireRequest.bind(this.core);
        this.registerEventPoint = this.core.registerEventPoint.bind(this.core);
        this.registerRequestPoint = this.core.registerRequestPoint.bind(this.core);
        this.processObject = this.core.processObject.bind(this.core);
        this.CatchEvent = this.core.CatchEvent.bind(this.core);
        this.CatchRequest = this.core.CatchRequest.bind(this.core);
        this.state = this.core.state.bind(this.core);
        this.processGlobal = this.core.processGlobal.bind(this.core);

        this.registerObj = function(el, name) {
            name ? this.global[name] = el : this.global.push(el);
            this.processObject(el);
            return el;
        };
    });