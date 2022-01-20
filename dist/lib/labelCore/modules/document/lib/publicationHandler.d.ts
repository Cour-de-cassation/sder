export { publicationHandler };
declare const publicationHandler: {
    mustBePublished: typeof mustBePublished;
    getPublishedPublicationCategory: typeof getPublishedPublicationCategory;
};
declare function getPublishedPublicationCategory(): string[];
declare function mustBePublished(publicationCategory: string[]): boolean;
