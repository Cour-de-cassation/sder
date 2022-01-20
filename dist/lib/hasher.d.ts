export { hasher };
declare const hasher: {
    hash: typeof hash;
    compare: typeof compare;
};
declare function hash(textToHash: string): Promise<string>;
declare function compare(textToCompare: string, encryptedText: string): Promise<boolean>;
