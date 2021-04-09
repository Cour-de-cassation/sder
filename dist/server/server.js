"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.server = void 0;
var body_parser_1 = __importDefault(require("body-parser"));
var express = require("express");
var environment_1 = require("../environment");
var modules_1 = require("../modules");
var utils_1 = require("../utils");
var server = express();
exports.server = server;
function startServer() {
    server.listen(environment_1.environment.port);
}
exports.startServer = startServer;
server.use(body_parser_1.default.json({ limit: '10mb' }));
server.get('/decisions-to-pseudonymise', utils_1.buildHandlingErrorController(function (req) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, modules_1.decisionModule.service.fetchDecisionsToPseudonymise({
                date: new Date(JSON.parse(req.query.date)),
            })];
    });
}); }));
server.get('/pseudonymisation-to-export', utils_1.buildHandlingErrorController(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, modules_1.decisionModule.service.fetchPseudonymisationsToExport()];
}); }); }));
server.patch('/update-label-status', utils_1.buildHandlingErrorController(function (req) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, modules_1.decisionModule.service.updateDecisionsLabelStatus({
                decisionIds: req.body.decisionIds,
                labelStatus: req.body.labelStatus,
            })];
    });
}); }));
server.patch('/update-decision-pseudonymisation', utils_1.buildHandlingErrorController(function (req) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, modules_1.decisionModule.service.updateDecisionPseudonymisation({
                decisionId: req.body.decisionId,
                decisionPseudonymisedText: req.body.decisionPseudonymisedText,
                labelTreatments: req.body.labelTreatments,
            })];
    });
}); }));
server.post('/create-decision', utils_1.buildHandlingErrorController(function (req) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, modules_1.decisionModule.service.createDecision(__assign(__assign({}, req.body), { dateCreation: req.body.dateCreation, dateDecision: req.body.dateDecision }))];
    });
}); }));
