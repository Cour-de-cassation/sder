export { buildBaseUser };
declare function buildBaseUser({ email, name, password }: {
    email: string;
    name: string;
    password: string;
}): Promise<{
    deletionDate: undefined;
    email: string;
    hashedPassword: string;
    _id: import("bson").ObjectId;
    isActivated: boolean;
    passwordLastUpdateDate: number;
    name: string;
}>;
