"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparator = void 0;
var comparator = {
    equal: function (annotation1, annotation2) {
        return (annotation1.text === annotation2.text &&
            annotation1.start === annotation2.start &&
            annotation1.category === annotation2.category &&
            annotation1.entityId === annotation2.entityId);
    },
    equalModuloCategory: function (annotation1, annotation2) {
        return annotation1.text === annotation2.text && annotation1.start === annotation2.start;
    },
    compareByText: function (annotation1, annotation2) {
        if (annotation2.text.toLowerCase() > annotation1.text.toLowerCase()) {
            return -1;
        }
        if (annotation2.text.toLowerCase() < annotation1.text.toLowerCase()) {
            return 1;
        }
        if (annotation2.text > annotation1.text) {
            return -1;
        }
        if (annotation2.text < annotation1.text) {
            return 1;
        }
        return annotation1.start - annotation2.start;
    },
};
exports.comparator = comparator;
