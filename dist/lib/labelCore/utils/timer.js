"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTimer = void 0;
function buildTimer() {
    var lastTaskName = null;
    var timestamp = null;
    return {
        start: start,
        screenshot: screenshot,
        stop: stop,
    };
    function start(taskName) {
        console.log(taskName + " started");
        lastTaskName = taskName;
        timestamp = new Date().getTime();
    }
    function screenshot(taskName) {
        if (lastTaskName === null || timestamp === null) {
            throw new Error("Cannot screenshot a new taskName if the timer was not started");
        }
        var newTimestamp = new Date().getTime();
        console.log(lastTaskName + " took " + (newTimestamp - timestamp) + " ms");
        start(taskName);
    }
    function stop() {
        if (lastTaskName === null || timestamp === null) {
            throw new Error("Cannot the timer if it was not started before");
        }
        var newTimestamp = new Date().getTime();
        console.log(lastTaskName + " took " + (newTimestamp - timestamp) + " ms");
        lastTaskName = null;
        timestamp = null;
    }
}
exports.buildTimer = buildTimer;
