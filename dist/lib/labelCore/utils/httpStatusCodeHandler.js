"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpStatusCodeHandler = void 0;
var HTTP_STATUS_CODE = {
    SUCCESS: {
        OK: 200,
        CREATED: 201,
    },
    ERROR: {
        AUTHENTICATION_ERROR: 401,
        PERMISSION_ERROR: 403,
        NOT_FOUND_ERROR: 404,
        SERVER_ERROR: 500,
    },
};
var httpStatusCodeHandler = {
    HTTP_STATUS_CODE: HTTP_STATUS_CODE,
    isError: function (statusCode) {
        return Object.values(HTTP_STATUS_CODE.ERROR).includes(statusCode);
    },
    isSuccess: function (statusCode) {
        return Object.values(HTTP_STATUS_CODE.SUCCESS).includes(statusCode);
    },
    merge: function (statusCodes) {
        var _this = this;
        return statusCodes.reduce(function (returnedStatusCode, statusCode) { return (_this.isError(statusCode) ? statusCode : returnedStatusCode); }, HTTP_STATUS_CODE.SUCCESS.OK);
    },
};
exports.httpStatusCodeHandler = httpStatusCodeHandler;
