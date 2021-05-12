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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decisionService = void 0;
var lib_1 = require("../lib");
var repository_1 = require("../repository");
var decisionService = {
    createDecision: function (decisionFields) {
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, decision;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decision = lib_1.buildDecision(decisionFields);
                        return [4 /*yield*/, decisionRepository.insert(decision)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    fetchDecisionsBySourceIdsAndSourceName: function (sourceIds, sourceName) {
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        return [2 /*return*/, decisionRepository.findAllBySourceIdsAndSourceName(sourceIds, sourceName)];
                }
            });
        });
    },
    fetchPseudonymisationsToExport: function () {
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        return [2 /*return*/, decisionRepository.findAllPseudonymisationToExport()];
                }
            });
        });
    },
    fetchJurinetAndChainedJuricaDecisionsToPseudonymiseBetween: function (_a) {
        var startDate = _a.startDate, _b = _a.endDate, endDate = _b === void 0 ? new Date() : _b;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, jurinetDecisions, juricaChainedDecisionSourceIds, juricaChainedDecisions, decisions;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _c.sent();
                        return [4 /*yield*/, decisionRepository.findAllBetween({
                                startDate: startDate,
                                endDate: endDate,
                                source: 'jurinet',
                            })];
                    case 2:
                        jurinetDecisions = _c.sent();
                        juricaChainedDecisionSourceIds = [];
                        jurinetDecisions.forEach(function (decision) {
                            if (decision.decatt) {
                                decision.decatt.forEach(function (sourceId) { return juricaChainedDecisionSourceIds.push(sourceId); });
                            }
                        });
                        return [4 /*yield*/, decisionRepository.findAllBySourceIdsAndSourceName(juricaChainedDecisionSourceIds, 'jurica')];
                    case 3:
                        juricaChainedDecisions = _c.sent();
                        decisions = __spreadArrays(jurinetDecisions, juricaChainedDecisions);
                        return [2 /*return*/, decisions.filter(lib_1.shouldBeTreatedByLabel)];
                }
            });
        });
    },
    deprecatedUpdateDecisionsLabelStatus: function (_a) {
        var decisionIds = _a.decisionIds, labelStatus = _a.labelStatus;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, decisions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _b.sent();
                        return [4 /*yield*/, decisionRepository.findAllByDecisionIds(decisionIds)];
                    case 2:
                        decisions = _b.sent();
                        return [4 /*yield*/, decisionRepository.updateByIds(decisions.map(function (decision) { return decision._id; }), { labelStatus: labelStatus })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    updateDecisionsLabelStatus: function (_a) {
        var decisionIds = _a.decisionIds, labelStatus = _a.labelStatus;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _b.sent();
                        return [4 /*yield*/, decisionRepository.updateByIds(decisionIds, { labelStatus: labelStatus })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    depracatedUpdateDecisionPseudonymisation: function (_a) {
        var decisionId = _a.decisionId, decisionPseudonymisedText = _a.decisionPseudonymisedText, labelTreatments = _a.labelTreatments;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, decision;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _b.sent();
                        return [4 /*yield*/, decisionRepository.findByDecisionId(decisionId)];
                    case 2:
                        decision = _b.sent();
                        return [4 /*yield*/, decisionRepository.updateById(decision._id, {
                                _rev: decision._rev + 1,
                                labelStatus: 'done',
                                labelTreatments: labelTreatments,
                                pseudoText: decisionPseudonymisedText,
                            })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    updateDecisionPseudonymisation: function (_a) {
        var decisionId = _a.decisionId, decisionPseudonymisedText = _a.decisionPseudonymisedText, labelTreatments = _a.labelTreatments;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, decision;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _b.sent();
                        return [4 /*yield*/, decisionRepository.findById(decisionId)];
                    case 2:
                        decision = _b.sent();
                        return [4 /*yield*/, decisionRepository.updateById(decision._id, {
                                _rev: decision._rev + 1,
                                labelStatus: 'done',
                                labelTreatments: labelTreatments,
                                pseudoText: decisionPseudonymisedText,
                            })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
};
exports.decisionService = decisionService;
