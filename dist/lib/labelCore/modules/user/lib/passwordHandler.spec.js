"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../../utils");
var generator_1 = require("../generator");
var passwordHandler_1 = require("./passwordHandler");
describe('passwordHandler', function () {
    describe('generate', function () {
        it('should return true for a generated password', function () {
            var password = passwordHandler_1.passwordHandler.generate();
            expect(passwordHandler_1.passwordHandler.isValid(password)).toBeTruthy();
        });
    });
    describe('getPasswordTimeValidityStatus', function () {
        it('should return valid for a generated user', function () {
            var user = generator_1.userGenerator.generate();
            expect(passwordHandler_1.passwordHandler.getPasswordTimeValidityStatus(user)).toBe('valid');
        });
        it('should return outdated for an old user', function () {
            var user = generator_1.userGenerator.generate({ passwordLastUpdateDate: utils_1.dateBuilder.monthsAgo(7) });
            expect(passwordHandler_1.passwordHandler.getPasswordTimeValidityStatus(user)).toBe('outdated');
        });
    });
    describe('isValid', function () {
        it('should return true if the password is longer than 8 characters', function () {
            var password = 'a3_bZP8&password';
            var result = passwordHandler_1.passwordHandler.isValid(password);
            expect(result).toEqual(true);
        });
        it('should return false if the password is lesser than 8 characters', function () {
            var password = '1234567';
            var result = passwordHandler_1.passwordHandler.isValid(password);
            expect(result).toEqual(false);
        });
        it('should return true if the password has at least 2 lower case, 2 upper case, 2 digits and 2 special characters', function () {
            var password = 'a3_bZP8&';
            var result = passwordHandler_1.passwordHandler.isValid(password);
            expect(result).toEqual(true);
        });
        it('should return false if the password has less than 2 lower case', function () {
            var password = 'a3_BZP8&';
            var result = passwordHandler_1.passwordHandler.isValid(password);
            expect(result).toEqual(false);
        });
        it('should return false if the password has less than 2 upper case', function () {
            var password = 'a3_bzP8&';
            var result = passwordHandler_1.passwordHandler.isValid(password);
            expect(result).toEqual(false);
        });
        it('should return false if the password has less than 2 digits', function () {
            var password = 'a3_bZPS&';
            var result = passwordHandler_1.passwordHandler.isValid(password);
            expect(result).toEqual(false);
        });
        it('should return false if the password has less than 2 special characters', function () {
            var password = 'a3_bZP88';
            var result = passwordHandler_1.passwordHandler.isValid(password);
            expect(result).toEqual(false);
        });
    });
});
