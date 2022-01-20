"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordHandler = void 0;
var lodash_1 = require("lodash");
var utils_1 = require("../../../utils");
var MIN_LOWER_CASE_CHARACTERS_COUNT = 2;
var MIN_UPPER_CASE_CHARACTERS_COUNT = 2;
var MIN_DIGITS_COUNT = 2;
var MIN_SPECIAL_CHARACTERS_COUNT = 2;
var MIN_PASSWORD_LENGTH = 8;
var LOWER_CASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
var UPPER_CASE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var DIGITS = '0123456789';
var SPECIAL_CHARACTERS = '&@_-"\'#~{([|`\\^)]=+}^¨$%*!:/;.,?<>';
var ONE_MONTH = 30 * 24 * 3600 * 1000;
var MAX_PASSWORD_TIME_VALIDITY = 6 * ONE_MONTH;
var passwordHandler = {
    checkUser: function (user, password) {
        return utils_1.hasher.compare(password, user.hashedPassword);
    },
    getPasswordTimeValidityStatus: function (user) {
        var passwordStatus = Date.now() - user.passwordLastUpdateDate < MAX_PASSWORD_TIME_VALIDITY ? 'valid' : 'outdated';
        return passwordStatus;
    },
    generate: function () {
        var generatedLowerCaseCharacters = generateFromPossibleCharacters(LOWER_CASE_CHARACTERS, MIN_LOWER_CASE_CHARACTERS_COUNT);
        var generatedUpperCaseCharacters = generateFromPossibleCharacters(UPPER_CASE_CHARACTERS, MIN_UPPER_CASE_CHARACTERS_COUNT);
        var generatedDigits = generateFromPossibleCharacters(DIGITS, MIN_DIGITS_COUNT);
        var generatedSpecialCharacters = generateFromPossibleCharacters(SPECIAL_CHARACTERS, MIN_SPECIAL_CHARACTERS_COUNT);
        var generatedPassword = [
            generatedLowerCaseCharacters,
            generatedUpperCaseCharacters,
            generatedDigits,
            generatedSpecialCharacters,
        ].join('');
        return shuffleString(generatedPassword);
        function generateFromPossibleCharacters(possibleCharacters, length) {
            return lodash_1.range(length)
                .map(function () {
                var characterIndex = Math.floor(Math.random() * possibleCharacters.length);
                return possibleCharacters[characterIndex];
            })
                .join('');
        }
        function shuffleString(str) {
            return str
                .split('')
                .sort(function () {
                return 0.5 - Math.random();
            })
                .join('');
        }
    },
    isValid: function (password) {
        var lowerCaseCharactersCount = countCharacters(LOWER_CASE_CHARACTERS);
        var upperCaseCharactersCount = countCharacters(UPPER_CASE_CHARACTERS);
        var digitsCount = countCharacters(DIGITS);
        var specialCharactersCount = countCharacters(SPECIAL_CHARACTERS);
        return (lowerCaseCharactersCount >= MIN_LOWER_CASE_CHARACTERS_COUNT &&
            upperCaseCharactersCount >= MIN_UPPER_CASE_CHARACTERS_COUNT &&
            digitsCount >= MIN_DIGITS_COUNT &&
            specialCharactersCount >= MIN_SPECIAL_CHARACTERS_COUNT &&
            password.length >= MIN_PASSWORD_LENGTH);
        function countCharacters(possibleCharacters) {
            var charactersCount = 0;
            for (var _i = 0, password_1 = password; _i < password_1.length; _i++) {
                var char = password_1[_i];
                if (possibleCharacters.includes(char)) {
                    charactersCount++;
                }
            }
            return charactersCount;
        }
    },
};
exports.passwordHandler = passwordHandler;
