export type { passwordTimeValidityStatusType };
export { passwordTimeValidityStatus };
declare const passwordTimeValidityStatus: readonly ["valid", "outdated"];
type passwordTimeValidityStatusType = (typeof passwordTimeValidityStatus)[number];
