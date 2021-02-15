"use strict";
exports.__esModule = true;
var index_1 = require("../index");
var TestObserver = /** @class */ (function () {
    function TestObserver() {
    }
    TestObserver.prototype.update = function (args) {
        console.log(args.test);
    };
    return TestObserver;
}());
var observerable = new index_1.Observable();
var observer = new TestObserver();
observerable.subscribe(observer);
observerable.notify({ test: "Some text here" });
//# sourceMappingURL=example.js.map