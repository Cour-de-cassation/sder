"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertOccultationBlockInCategoriesToOmit = void 0;
function convertOccultationBlockInCategoriesToOmit(occultationBlock) {
    var categoriesToOmit = ['professionnelMagistratGreffier'];
    if (occultationBlock !== undefined && occultationBlock >= 1 && occultationBlock <= 4) {
        switch (occultationBlock) {
            case 2:
                categoriesToOmit.push('dateNaissance', 'dateMariage', 'dateDeces');
                break;
            case 3:
                categoriesToOmit.push('personneMorale', 'numeroSiretSiren');
                break;
            case 4:
                categoriesToOmit.push('dateNaissance', 'dateMariage', 'dateDeces', 'personneMorale', 'numeroSiretSiren');
                break;
        }
    }
    else {
        categoriesToOmit.push('personneMorale', 'numeroSiretSiren');
    }
    return categoriesToOmit;
}
exports.convertOccultationBlockInCategoriesToOmit = convertOccultationBlockInCategoriesToOmit;
