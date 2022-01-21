"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatEmail_1 = require("./formatEmail");
describe('formatEmail', function () {
    it('should put to lower case the email', function () {
        var email = 'MAIL@MAIL.MAIL';
        var formatedEmail = formatEmail_1.formatEmail(email);
        expect(formatedEmail).toEqual('mail@mail.mail');
    });
    it('should trim the white spaces', function () {
        var email = ' mail@mail.mail  ';
        var formatedEmail = formatEmail_1.formatEmail(email);
        expect(formatedEmail).toEqual('mail@mail.mail');
    });
});
