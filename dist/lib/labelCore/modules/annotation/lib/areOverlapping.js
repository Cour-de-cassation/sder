"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areOverlapping = void 0;
function areOverlapping(annotation1, annotation2) {
    var startA = annotation1.start;
    var endA = annotation1.start + annotation1.text.length;
    var startB = annotation2.start;
    var endB = annotation2.start + annotation2.text.length;
    return ((startA < startB && endA > startB) ||
        (startA <= startB && endA >= endB) ||
        (startB < startA && endB > startA) ||
        (startB <= startA && endB >= endA));
}
exports.areOverlapping = areOverlapping;
