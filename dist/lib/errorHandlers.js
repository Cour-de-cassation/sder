"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwFromStatusCode = exports.errorHandlers = exports.CustomError = void 0;
var httpStatusCodeHandler_1 = require("./httpStatusCodeHandler");
var errorHandlers = {
    authenticationErrorHandler: buildErrorHandler(httpStatusCodeHandler_1.httpStatusCodeHandler.HTTP_STATUS_CODE.ERROR.AUTHENTICATION_ERROR),
    permissionErrorHandler: buildErrorHandler(httpStatusCodeHandler_1.httpStatusCodeHandler.HTTP_STATUS_CODE.ERROR.PERMISSION_ERROR),
    notFoundErrorHandler: buildErrorHandler(httpStatusCodeHandler_1.httpStatusCodeHandler.HTTP_STATUS_CODE.ERROR.NOT_FOUND_ERROR),
    serverErrorHandler: buildErrorHandler(httpStatusCodeHandler_1.httpStatusCodeHandler.HTTP_STATUS_CODE.ERROR.SERVER_ERROR),
};
exports.errorHandlers = errorHandlers;
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(_a) {
        var description = _a.description, statusCode = _a.statusCode;
        var _this = _super.call(this, description) || this;
        _this.statusCode = statusCode;
        Object.setPrototypeOf(_this, CustomError.prototype);
        return _this;
    }
    return CustomError;
}(Error));
exports.CustomError = CustomError;
function buildErrorHandler(statusCode) {
    return { build: build, check: check };
    function build(description) {
        return new CustomError({ description: description, statusCode: statusCode });
    }
    function check(anotherStatusCode) {
        return anotherStatusCode === statusCode;
    }
}
function throwFromStatusCode(statusCode) {
    var errorDescription = 'A custom error has been thrown';
    if (httpStatusCodeHandler_1.httpStatusCodeHandler.isError(statusCode)) {
        throw buildErrorHandler(statusCode).build(errorDescription);
    }
    else {
        throw errorHandlers.serverErrorHandler.build(errorDescription);
    }
}
exports.throwFromStatusCode = throwFromStatusCode;
