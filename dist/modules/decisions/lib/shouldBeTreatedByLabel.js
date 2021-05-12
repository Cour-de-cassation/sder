"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldBeTreatedByLabel = void 0;
function shouldBeTreatedByLabel(decision) {
    return decision.labelStatus === 'toBeTreated' && decision.pseudoText === '';
}
exports.shouldBeTreatedByLabel = shouldBeTreatedByLabel;
