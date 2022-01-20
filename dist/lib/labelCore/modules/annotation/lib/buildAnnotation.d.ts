export { buildAnnotation };
declare function buildAnnotation({ category, start, text, certaintyScore, }: {
    category: string;
    start: number;
    text: string;
    certaintyScore?: number;
}): {
    category: string;
    entityId: string;
    start: number;
    text: string;
    certaintyScore: number | undefined;
};
