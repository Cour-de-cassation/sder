export { buildExtractUserIdFromAuthorizationHeader };
declare function buildExtractUserIdFromAuthorizationHeader(privateKey: string): (authorization: string | undefined) => import("bson").ObjectId;
