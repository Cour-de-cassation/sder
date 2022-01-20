"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotationLinkHandler = void 0;
var lodash_1 = require("lodash");
var annotation_1 = require("../../modules/annotation");
var annotationLinkHandler = {
    countLinkedEntities: countLinkedEntities,
    getLinkableAnnotations: getLinkableAnnotations,
    getLinkedAnnotations: getLinkedAnnotations,
    getLinkedAnnotationRepresentatives: getLinkedAnnotationRepresentatives,
    getRepresentatives: getRepresentatives,
    isLinked: isLinked,
    isLinkedTo: isLinkedTo,
    link: link,
    unlink: unlink,
    unlinkByCategoryAndText: unlinkByCategoryAndText,
    updateMainLinkEntity: updateMainLinkEntity,
};
exports.annotationLinkHandler = annotationLinkHandler;
function countLinkedEntities(annotations) {
    var linkedEntities = 0;
    var representatives = getRepresentatives(annotations);
    var _loop_1 = function () {
        var representative = representatives[0];
        representatives = representatives.slice(1);
        var linkedRepresentatives = getLinkedAnnotations(representative.entityId, representatives);
        linkedEntities = linkedEntities + linkedRepresentatives.length;
        representatives = representatives.filter(function (someRepresentative) {
            return linkedRepresentatives.every(function (linkedRepresentative) { return !annotation_1.annotationModule.lib.comparator.equal(someRepresentative, linkedRepresentative); });
        });
    };
    while (representatives.length !== 0) {
        _loop_1();
    }
    return linkedEntities;
}
function getLinkableAnnotations(annotation, annotations) {
    var annotationsWithOtherEntityId = annotations.filter(function (otherAnnotation) {
        return otherAnnotation.category === annotation.category && otherAnnotation.entityId !== annotation.entityId;
    });
    var annotationsWithOtherEntityIdByEntityId = lodash_1.groupBy(annotationsWithOtherEntityId, function (annotation) { return annotation.entityId; });
    var linkeableAnnotations = Object.values(annotationsWithOtherEntityIdByEntityId)
        .sort(function (annotations1, annotations2) { return annotations2.length - annotations1.length; })
        .map(function (annotations) { return annotations[0]; });
    return linkeableAnnotations;
}
function getLinkedAnnotations(entityId, annotations) {
    return annotations.filter(function (otherAnnotation) { return otherAnnotation.entityId === entityId; });
}
function getLinkedAnnotationRepresentatives(entityId, annotations) {
    return lodash_1.uniqBy(getLinkedAnnotations(entityId, annotations), function (otherAnnotation) { return otherAnnotation.text; }).sort(function (annotation1, annotation2) { return annotation1.text.localeCompare(annotation2.text); });
}
function getRepresentatives(annotations) {
    return lodash_1.uniqBy(annotations, function (otherAnnotation) {
        return annotation_1.annotationModule.lib.entityIdHandler.compute(otherAnnotation.category, otherAnnotation.text);
    }).sort(annotation_1.annotationModule.lib.comparator.compareByText);
}
function isLinked(annotation, annotations) {
    return annotations.some(function (otherAnnotation) { return otherAnnotation.entityId === annotation.entityId && otherAnnotation.text !== annotation.text; });
}
function isLinkedTo(annotationSource, annotationTarget) {
    return annotationSource.entityId === annotationTarget.entityId;
}
function link(annotationSource, annotationTarget, annotations) {
    return annotations.map(function (annotation) {
        return annotation.entityId === annotationSource.entityId
            ? annotation_1.annotationModule.lib.annotationLinker.link(annotation, annotationTarget)
            : annotation;
    });
}
function unlink(annotationToUnlink, annotations) {
    return annotations.map(function (annotation) {
        return annotation.entityId === annotationToUnlink.entityId
            ? annotation_1.annotationModule.lib.annotationLinker.unlink(annotation)
            : annotation;
    });
}
function unlinkByCategoryAndText(annotation, annotations) {
    var linkedAnnotations = getLinkedAnnotationRepresentatives(annotation.entityId, annotations).filter(function (linkedAnnotation) { return linkedAnnotation.start !== annotation.start || linkedAnnotation.text !== annotation.text; });
    if (linkedAnnotations.length === 0) {
        return annotations;
    }
    var annotationsWithUpdatedLink = updateMainLinkEntity(linkedAnnotations[0], annotations);
    return annotationsWithUpdatedLink.map(function (otherAnnotation) {
        return otherAnnotation.category === annotation.category && otherAnnotation.text === annotation.text
            ? annotation_1.annotationModule.lib.annotationLinker.unlink(otherAnnotation)
            : otherAnnotation;
    });
}
function updateMainLinkEntity(annotation, annotations) {
    return annotations.map(function (otherAnnotation) {
        return otherAnnotation.entityId === annotation.entityId
            ? __assign(__assign({}, otherAnnotation), { entityId: annotation_1.annotationModule.lib.entityIdHandler.compute(annotation.category, annotation.text) }) : otherAnnotation;
    });
}
