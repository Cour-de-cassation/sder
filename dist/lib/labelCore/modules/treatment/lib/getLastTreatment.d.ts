import { treatmentType } from '../treatmentType';
export { getLastTreatment };
declare function getLastTreatment(treatments: treatmentType[]): {
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
} | undefined;
