import { documentType } from '../../document';
import { treatmentType } from '../../treatment';
import { userType } from '../../user';
import { ressourceFilterType } from '../ressourceFilterType';
export { filterTreatedDocuments };
declare function filterTreatedDocuments({ ressourceFilter, treatedDocuments, }: {
    ressourceFilter: ressourceFilterType;
    treatedDocuments: Array<{
        document: documentType;
        treatments: treatmentType[];
        humanTreatments: Array<{
            treatment: treatmentType;
            userId: userType['_id'];
        }>;
    }>;
}): {
    document: documentType;
    treatments: treatmentType[];
    humanTreatments: Array<{
        treatment: treatmentType;
        userId: userType['_id'];
    }>;
}[];
