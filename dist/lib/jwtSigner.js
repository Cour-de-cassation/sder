"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildJwtSigner = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var ONE_WEEK = 7 * 24 * 60 * 60 * 1000;
function buildJwtSigner(privateKey) {
    return {
        sign: sign,
        verifyToken: verifyToken,
    };
    function sign(userId) {
        return jsonwebtoken_1.sign({ userId: userId }, privateKey, { expiresIn: ONE_WEEK });
    }
    function verifyToken(token) {
        var decodedToken = jsonwebtoken_1.verify(token, privateKey);
        if (typeof decodedToken === 'string' || !decodedToken || !decodedToken.userId) {
            throw new Error("Invalid userId in decoded token : " + JSON.stringify(decodedToken));
        }
        return decodedToken.userId;
    }
}
exports.buildJwtSigner = buildJwtSigner;
