"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAutoAnnotator = void 0;
var autoLink_1 = require("../autoLink");
var resolveCouldBeAnotherCategory_1 = require("./resolveCouldBeAnotherCategory");
function buildAutoAnnotator(settings) {
    return {
        annotate: function (annotations) {
            return autoLink_1.autoLinker.autoLinkAll(resolveAllCouldBeAnotherCategory(annotations), settings);
        },
    };
    function resolveAllCouldBeAnotherCategory(annotations) {
        var resolvedAnnotations = [];
        annotations.forEach(function (annotation) {
            return resolvedAnnotations.push(resolveCouldBeAnotherCategory_1.resolveCouldBeAnotherCategory(annotation, annotations, settings));
        });
        return resolvedAnnotations;
    }
}
exports.buildAutoAnnotator = buildAutoAnnotator;
