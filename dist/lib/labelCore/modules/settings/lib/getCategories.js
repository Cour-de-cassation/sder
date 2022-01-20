"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
function getCategories(settings, filter) {
    return Object.keys(settings)
        .filter(function (category) {
        var categorySetting = settings[category];
        return (filter.status.includes(categorySetting.status) &&
            (categorySetting.canBeAnnotatedBy === 'both' || categorySetting.canBeAnnotatedBy === filter.canBeAnnotatedBy));
    })
        .sort(function (categoryA, categoryB) {
        var orderA = settings[categoryA].order;
        var orderB = settings[categoryB].order;
        if (orderA === undefined) {
            return 1;
        }
        if (orderB === undefined) {
            return -1;
        }
        return orderA - orderB;
    });
}
exports.getCategories = getCategories;
