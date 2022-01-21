import { httpStatusCodeHandler } from './httpStatusCodeHandler';
export { CustomError, errorHandlers };
export type { errorCodeType };
declare type errorCodeType = typeof httpStatusCodeHandler.HTTP_STATUS_CODE.ERROR[keyof typeof httpStatusCodeHandler.HTTP_STATUS_CODE.ERROR];
declare const errorHandlers: {
    authenticationErrorHandler: {
        build: (description: string) => CustomError;
        check: (anotherStatusCode: number) => boolean;
    };
    permissionErrorHandler: {
        build: (description: string) => CustomError;
        check: (anotherStatusCode: number) => boolean;
    };
    notFoundErrorHandler: {
        build: (description: string) => CustomError;
        check: (anotherStatusCode: number) => boolean;
    };
    serverErrorHandler: {
        build: (description: string) => CustomError;
        check: (anotherStatusCode: number) => boolean;
    };
    lib: {
        throwFromStatusCode: typeof throwFromStatusCode;
    };
};
declare class CustomError extends Error {
    statusCode: errorCodeType;
    constructor({ description, statusCode }: {
        description: string;
        statusCode: errorCodeType;
    });
}
declare function throwFromStatusCode(statusCode: number): void;
