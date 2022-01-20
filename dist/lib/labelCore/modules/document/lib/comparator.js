"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparator = void 0;
var comparator = {
    compareByPriority: function (document1, document2) {
        return document2.priority - document1.priority;
    },
};
exports.comparator = comparator;
