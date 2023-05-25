"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetAllDecisionsLabelStatus = void 0;
var modules_1 = require("../modules");
resetAllDecisionsLabelStatus();
function resetAllDecisionsLabelStatus() {
    return __awaiter(this, void 0, void 0, function () {
        var decisionRepository, decisionIds, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('resetAllDecisionsLabelStatus');
                    console.log('Init decision repository');
                    return [4 /*yield*/, modules_1.decisionModule.buildRepository()];
                case 1:
                    decisionRepository = _d.sent();
                    console.log('Fetching decision ids to reset');
                    _a = [[]];
                    return [4 /*yield*/, decisionRepository.findAllIdsByLabelStatus('loaded')];
                case 2:
                    _b = [__spreadArray.apply(void 0, _a.concat([(_d.sent()), true]))];
                    return [4 /*yield*/, decisionRepository.findAllIdsByLabelStatus('done')];
                case 3:
                    _c = [__spreadArray.apply(void 0, _b.concat([(_d.sent()), true]))];
                    return [4 /*yield*/, decisionRepository.findAllIdsByLabelStatus('exported')];
                case 4:
                    decisionIds = __spreadArray.apply(void 0, _c.concat([(_d.sent()), true]));
                    console.log("".concat(decisionIds.length, " decisions fetched"));
                    console.log('Reset label status to toBeTreated');
                    return [4 /*yield*/, modules_1.decisionModule.service.updateDecisionsLabelStatus({ decisionIds: decisionIds, labelStatus: 'toBeTreated' })];
                case 5:
                    _d.sent();
                    console.log('DONE');
                    return [2 /*return*/];
            }
        });
    });
}
exports.resetAllDecisionsLabelStatus = resetAllDecisionsLabelStatus;
