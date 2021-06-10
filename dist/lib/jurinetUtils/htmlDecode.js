"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlDecode = void 0;
var he_1 = __importDefault(require("he"));
function htmlDecode(obj) {
    var output = {};
    for (var i in obj) {
        if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
            output[i] = htmlDecode(obj[i]);
        }
        else if (Object.prototype.toString.apply(obj[i]) === '[object Array]') {
            if (output[i] === undefined) {
                output[i] = [];
            }
            output[i].push(htmlDecode(obj[i][0]));
        }
        else {
            try {
                output[i] = he_1.default.decode(obj[i]);
            }
            catch (ignore) {
                output[i] = obj[i];
            }
        }
    }
    return output;
}
exports.htmlDecode = htmlDecode;
