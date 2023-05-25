export type { passwordTimeValidityStatusType };

export { passwordTimeValidityStatus };

const passwordTimeValidityStatus = ['valid', 'outdated'] as const;

type passwordTimeValidityStatusType = (typeof passwordTimeValidityStatus)[number];
