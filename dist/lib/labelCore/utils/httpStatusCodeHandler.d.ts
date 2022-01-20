export { httpStatusCodeHandler };
declare const httpStatusCodeHandler: {
    HTTP_STATUS_CODE: {
        readonly SUCCESS: {
            readonly OK: 200;
            readonly CREATED: 201;
        };
        readonly ERROR: {
            readonly AUTHENTICATION_ERROR: 401;
            readonly PERMISSION_ERROR: 403;
            readonly NOT_FOUND_ERROR: 404;
            readonly SERVER_ERROR: 500;
        };
    };
    isError(statusCode: number): boolean;
    isSuccess(statusCode: number): boolean;
    merge(statusCodes: number[]): number;
};
