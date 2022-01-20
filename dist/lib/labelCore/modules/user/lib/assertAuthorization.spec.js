"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var assertAuthorization_1 = require("./assertAuthorization");
describe('assertAuthorization', function () {
    it('should throw an error if the user is deactivated', function () {
        var user = generator_1.userGenerator.generate({ isActivated: false, email: 'test@email.com' });
        expect(function () { return assertAuthorization_1.assertAuthorization(user); }).toThrowError('The user test@email.com is deactivated');
    });
});
