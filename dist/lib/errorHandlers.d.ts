import { httpStatusCodeHandler } from './httpStatusCodeHandler';
export { CustomError, errorHandlers };
export type { errorCodeType };
declare type errorCodeType = typeof httpStatusCodeHandler.HTTP_STATUS_CODE.ERROR[keyof typeof httpStatusCodeHandler.HTTP_STATUS_CODE.ERROR];
declare const errorHandlers: {
    authenticationErrorHandler: {
        build: (description: string) => CustomError;
        check: (anotherStatusCode: number) => boolean;
        throwFromStatusCode: (statusCode: number) => void;
    };
    permissionErrorHandler: {
        build: (description: string) => CustomError;
        check: (anotherStatusCode: number) => boolean;
        throwFromStatusCode: (statusCode: number) => void;
    };
    notFoundErrorHandler: {
        build: (description: string) => CustomError;
        check: (anotherStatusCode: number) => boolean;
        throwFromStatusCode: (statusCode: number) => void;
    };
    serverErrorHandler: {
        build: (description: string) => CustomError;
        check: (anotherStatusCode: number) => boolean;
        throwFromStatusCode: (statusCode: number) => void;
    };
};
declare class CustomError extends Error {
    statusCode: errorCodeType;
    constructor({ description, statusCode }: {
        description: string;
        statusCode: errorCodeType;
    });
}
