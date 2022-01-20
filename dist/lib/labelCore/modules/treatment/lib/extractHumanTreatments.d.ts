import { assignationType } from '../../assignation';
import { treatmentType } from '../treatmentType';
export { extractHumanTreatments };
declare function extractHumanTreatments(treatments: treatmentType[], assignations: assignationType[]): {
    treatment: {
        readonly _id: import("bson").ObjectId;
        readonly annotationsDiff: {
            readonly before: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }[];
            readonly after: {
                readonly category: string;
                readonly entityId: string;
                readonly start: number;
                readonly text: string;
                readonly certaintyScore: number | undefined;
            }[];
        };
        readonly documentId: import("bson").ObjectId;
        readonly duration: number;
        readonly lastUpdateDate: number;
        readonly order: number;
        readonly surAnnotationsCount: number;
        readonly subAnnotationsSensitiveCount: number;
        readonly subAnnotationsNonSensitiveCount: number;
        readonly source: "annotator" | "admin" | "NLP" | "postProcess" | "supplementaryAnnotations";
    };
    userId: import("bson").ObjectId;
}[];
