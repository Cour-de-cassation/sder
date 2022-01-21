export type { passwordTimeValidityStatusType };
export { passwordTimeValidityStatus };
declare const passwordTimeValidityStatus: readonly ["valid", "outdated"];
declare type passwordTimeValidityStatusType = typeof passwordTimeValidityStatus[number];
