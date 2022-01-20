"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicationHandler = void 0;
var PUBLISHED_PUBLICATION_CATEGORY_LETTERS = ['P', 'B'];
var publicationHandler = {
    mustBePublished: mustBePublished,
    getPublishedPublicationCategory: getPublishedPublicationCategory,
};
exports.publicationHandler = publicationHandler;
function getPublishedPublicationCategory() {
    return PUBLISHED_PUBLICATION_CATEGORY_LETTERS;
}
function mustBePublished(publicationCategory) {
    return PUBLISHED_PUBLICATION_CATEGORY_LETTERS.some(function (publicationCategoryLetter) {
        return publicationCategory.includes(publicationCategoryLetter);
    });
}
