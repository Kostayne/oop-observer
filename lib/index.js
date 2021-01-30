"use strict";
exports.__esModule = true;
exports.Observable = void 0;
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.findObserverIndex = function (observer) {
        for (var i = 0; i < this.observers.length; i++) {
            if (this.observers[i] == observer)
                return i;
        }
        return -1;
    };
    Observable.prototype.subscribe = function (observer) {
        if (this.findObserverIndex(observer) != -1) {
            throw new Error("Observer already subscribed");
        }
        this.observers.push(observer);
    };
    Observable.prototype.unsubscribe = function (observer) {
        var index = this.findObserverIndex(observer);
        if (index == -1)
            throw new Error("observer not subscribed");
        this.observers = this.observers.splice(index, 1);
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=index.js.map