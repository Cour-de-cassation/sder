export { assertAuthorization };
declare function assertAuthorization(user: {
    email: string;
    isActivated: boolean;
    deletionDate: number | undefined;
}): void;
