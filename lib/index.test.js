"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var TestObserver = /** @class */ (function () {
    function TestObserver(mock) {
        this.mock = mock;
    }
    TestObserver.prototype.update = function (args) {
        console.log(args.msg);
        this.mock(args);
    };
    return TestObserver;
}());
it("notifies", function () {
    var updateMock = jest.fn();
    var observable = new index_1.Observable();
    var observer = new TestObserver(updateMock);
    observable.subscribe(observer);
    observable.notify({ msg: "Msg" });
    expect(updateMock).toBeCalledWith({ msg: "Msg" });
});
it("unsubscribes", function () {
    var unsubMock = jest.fn();
    var observable = new index_1.Observable();
    var observer = new TestObserver(unsubMock);
    observable.subscribe(observer);
    observable.unsubscribe(observer);
    observable.notify({ msg: "Msg to unsubbed" });
    expect(unsubMock).toBeCalledTimes(0);
});
it("throwes an is not subscribed exeption", function () {
    var mock = jest.fn();
    var observable = new index_1.Observable();
    var observer = new TestObserver(mock);
    try {
        expect(observable.unsubscribe(observer)).toThrowError("observer is not subscribed");
    }
    catch (_a) {
    }
});
it("throwes an is already subscribed exeption", function () {
    var mock = jest.fn();
    var observable = new index_1.Observable();
    var observer = new TestObserver(mock);
    observable.subscribe(observer);
    try {
        expect(observable.subscribe(observer)).toThrowError("observer is already subscribed");
    }
    catch (_a) {
    }
});
//# sourceMappingURL=index.test.js.map