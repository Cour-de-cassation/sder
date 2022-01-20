"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextStatus = void 0;
var publicationHandler_1 = require("./publicationHandler");
function getNextStatus(_a) {
    var publicationCategory = _a.publicationCategory, status = _a.status, route = _a.route;
    switch (status) {
        case 'loaded':
            return 'nlpAnnotating';
        case 'nlpAnnotating':
            if (route === 'automatic') {
                return 'done';
            }
            else if (route === 'request') {
                return 'toBeConfirmed';
            }
            else {
                return 'free';
            }
        case 'free':
            return 'pending';
        case 'pending':
            return 'saved';
        case 'saved':
            if (route === 'confirmation') {
                return 'toBeConfirmed';
            }
            return publicationHandler_1.publicationHandler.mustBePublished(publicationCategory) ? 'toBePublished' : 'done';
        case 'rejected':
            if (route === 'confirmation') {
                return 'toBeConfirmed';
            }
            return publicationHandler_1.publicationHandler.mustBePublished(publicationCategory) ? 'toBePublished' : 'done';
        case 'toBeConfirmed':
            return publicationHandler_1.publicationHandler.mustBePublished(publicationCategory) ? 'toBePublished' : 'done';
        case 'toBePublished':
            return 'done';
        default:
            return status;
    }
}
exports.getNextStatus = getNextStatus;
