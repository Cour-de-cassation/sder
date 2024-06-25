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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decisionService = void 0;
var id_1 = require("../../id");
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
                        decision = lib_1.buildDecision(__assign(__assign({}, decisionFields), { _rev: 0, labelStatus: 'toBeTreated' }));
                        return [4 /*yield*/, decisionRepository.insert(decision)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    fetchCourtDecisionById: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("fetchCourtDecisionById({id: " + id + "})");
                        return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        return [2 /*return*/, decisionRepository.findById(id_1.idModule.lib.buildId(id))];
                }
            });
        });
    },
    fetchDecisionBySourceIdAndSourceName: function (sourceId, sourceName) {
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("fetchDecisionBySourceIdAndSourceName({sourceId: " + sourceId + ", sourceName: " + sourceName + "})");
                        return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        return [2 /*return*/, decisionRepository.findBySourceIdAndSourceName({ sourceId: sourceId, sourceName: sourceName })];
                }
            });
        });
    },
    fetchPseudonymisationsToExport: function () {
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("fetchPseudonymisationsToExport()");
                        return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        return [2 /*return*/, decisionRepository.findAllPseudonymisationToExport()];
                }
            });
        });
    },
    fetchAllDecisionsBySourceAndJurisdictionsBetween: function (_a) {
        var startDate = _a.startDate, endDate = _a.endDate, source = _a.source, jurisdictions = _a.jurisdictions;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, decisions, _i, jurisdictions_1, jurisdiction, decisionsForJuridiction;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("fetchAllDecisionsBySourceAndJurisdictionsBetween({startDate: " + startDate.toISOString() + ", endDate: " + endDate.toISOString() + ", source: " + source + ", jurisdictions: [" + jurisdictions.join(', ') + "]})");
                        return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _b.sent();
                        decisions = [];
                        _i = 0, jurisdictions_1 = jurisdictions;
                        _b.label = 2;
                    case 2:
                        if (!(_i < jurisdictions_1.length)) return [3 /*break*/, 5];
                        jurisdiction = jurisdictions_1[_i];
                        console.log("Fetching decisions for jurisdiction " + jurisdiction);
                        return [4 /*yield*/, decisionRepository.findAllBySourceAndJurisdictionBetween({
                                endDate: endDate,
                                startDate: startDate,
                                jurisdiction: jurisdiction,
                                source: source,
                            })];
                    case 3:
                        decisionsForJuridiction = _b.sent();
                        console.log(decisionsForJuridiction.length + " decisions found for jurisdiction \"" + jurisdiction + "\", source \"" + source + "\" and between " + startDate.toISOString() + " and " + endDate.toISOString());
                        decisions.push.apply(decisions, decisionsForJuridiction);
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, decisions];
                }
            });
        });
    },
    fetchAllDecisionsBySourceAndJurisdictionsAndChambersBetween: function (_a) {
        var startDate = _a.startDate, endDate = _a.endDate, source = _a.source, jurisdictions = _a.jurisdictions, chambers = _a.chambers;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, decisions, _i, jurisdictions_2, jurisdiction, _b, chambers_1, chamberId, decisionsForJuridiction;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("fetchAllDecisionsBySourceAndJurisdictionsAndChambersBetween({startDate: " + startDate.toISOString() + ", endDate: " + endDate.toISOString() + ", source: " + source + ", jurisdictions: [" + jurisdictions.join(', ') + "], chambers: [" + chambers.join(', ') + "]})");
                        return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _c.sent();
                        decisions = [];
                        _i = 0, jurisdictions_2 = jurisdictions;
                        _c.label = 2;
                    case 2:
                        if (!(_i < jurisdictions_2.length)) return [3 /*break*/, 7];
                        jurisdiction = jurisdictions_2[_i];
                        _b = 0, chambers_1 = chambers;
                        _c.label = 3;
                    case 3:
                        if (!(_b < chambers_1.length)) return [3 /*break*/, 6];
                        chamberId = chambers_1[_b];
                        console.log("Fetching decisions for jurisdiction " + jurisdiction + " and chamber " + chamberId);
                        return [4 /*yield*/, decisionRepository.findAllBySourceAndJurisdictionAndChamberBetween({
                                endDate: endDate,
                                startDate: startDate,
                                jurisdiction: jurisdiction,
                                chamberId: chamberId,
                                source: source,
                            })];
                    case 4:
                        decisionsForJuridiction = _c.sent();
                        console.log(decisionsForJuridiction.length + " decisions found for jurisdiction \"" + jurisdiction + "\", source \"" + source + "\" and between " + startDate.toISOString() + " and " + endDate.toISOString());
                        decisions.push.apply(decisions, decisionsForJuridiction);
                        _c.label = 5;
                    case 5:
                        _b++;
                        return [3 /*break*/, 3];
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/, decisions];
                }
            });
        });
    },
    fetchPublicDecisionsBySourceAndJurisdictionsAndChambersBetween: function (_a) {
        var startDate = _a.startDate, endDate = _a.endDate, source = _a.source, jurisdictions = _a.jurisdictions, chambers = _a.chambers;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, decisions, _i, _b, jurisdiction, _c, _d, chamberId, decisionsForJuridiction;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        console.log("fetchPublicDecisionsBySourceAndJurisdictionsAndChambersBetween({startDate: " + startDate.toISOString() + ", endDate: " + endDate.toISOString() + ", source: " + source + ", jurisdictions: [" + jurisdictions.join(', ') + "], chambers: [" + chambers.join(', ') + "]})");
                        return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _e.sent();
                        decisions = [];
                        _i = 0, _b = jurisdictions !== null && jurisdictions !== void 0 ? jurisdictions : [''];
                        _e.label = 2;
                    case 2:
                        if (!(_i < _b.length)) return [3 /*break*/, 7];
                        jurisdiction = _b[_i];
                        _c = 0, _d = chambers !== null && chambers !== void 0 ? chambers : [''];
                        _e.label = 3;
                    case 3:
                        if (!(_c < _d.length)) return [3 /*break*/, 6];
                        chamberId = _d[_c];
                        console.log("Fetching decisions for jurisdiction " + jurisdiction + " and chamber " + chamberId);
                        return [4 /*yield*/, decisionRepository.findAllPublicBySourceAndJurisdictionAndChamberBetweenWithLabelStatus({
                                endDate: endDate,
                                startDate: startDate,
                                jurisdiction: jurisdiction,
                                chamberId: chamberId,
                                source: source,
                                labelStatus: 'toBeTreated',
                            })];
                    case 4:
                        decisionsForJuridiction = _e.sent();
                        console.log(decisionsForJuridiction.length + " decisions found for jurisdiction \"" + jurisdiction + "\", source \"" + source + "\" and between " + startDate.toISOString() + " and " + endDate.toISOString());
                        decisions.push.apply(decisions, decisionsForJuridiction);
                        _e.label = 5;
                    case 5:
                        _c++;
                        return [3 /*break*/, 3];
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/, decisions];
                }
            });
        });
    },
    fetchChainedJuricaDecisionsToPseudonymiseBetween: function (_a) {
        var startDate = _a.startDate, endDate = _a.endDate;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, jurinetDecisions, juricaChainedDecisionSourceIds, juricaToBeTreatedChainedDecisions, juricaExportedChainedDecisions, juricaChainedDecisions, filteredJuricaChainedDecisions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("fetchChainedJuricaDecisionsToPseudonymiseBetween({startDate: " + startDate.toISOString() + ", endDate: " + endDate.toISOString() + "]})");
                        return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _b.sent();
                        return [4 /*yield*/, decisionRepository.findAllBetween({
                                startDate: startDate,
                                endDate: endDate,
                                source: 'jurinet',
                            })];
                    case 2:
                        jurinetDecisions = _b.sent();
                        console.log(jurinetDecisions.length + " jurinet decisions found between " + startDate.toISOString() + " and " + endDate.toISOString());
                        juricaChainedDecisionSourceIds = [];
                        jurinetDecisions.forEach(function (decision) {
                            if (decision.decatt) {
                                decision.decatt.forEach(function (sourceId) { return juricaChainedDecisionSourceIds.push(sourceId); });
                            }
                        });
                        console.log(juricaChainedDecisionSourceIds.length + " sourceIds found");
                        return [4 /*yield*/, decisionRepository.findAllByLabelStatusAndSourceIdsAndSourceName({
                                sourceIds: juricaChainedDecisionSourceIds,
                                sourceName: 'jurica',
                                labelStatus: 'toBeTreated',
                            })];
                    case 3:
                        juricaToBeTreatedChainedDecisions = _b.sent();
                        return [4 /*yield*/, decisionRepository.findAllByLabelStatusAndSourceIdsAndSourceName({
                                sourceIds: juricaChainedDecisionSourceIds,
                                sourceName: 'jurica',
                                labelStatus: 'exported',
                            })];
                    case 4:
                        juricaExportedChainedDecisions = _b.sent();
                        juricaChainedDecisions = __spreadArrays(juricaToBeTreatedChainedDecisions, juricaExportedChainedDecisions);
                        console.log(juricaChainedDecisions.length + " jurica chained decisions found (" + juricaToBeTreatedChainedDecisions.length + " toBeTreated and " + juricaExportedChainedDecisions.length + " exported)");
                        filteredJuricaChainedDecisions = juricaChainedDecisions.filter(function (decision) { return !decision.pseudoText; });
                        console.log(filteredJuricaChainedDecisions.length + " jurica chained decisions with no pseudoText found");
                        return [2 /*return*/, filteredJuricaChainedDecisions];
                }
            });
        });
    },
    fetchDecisionsToPseudonymiseBetween: function (_a) {
        var source = _a.source, startDate = _a.startDate, endDate = _a.endDate;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, decisions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("fetchDecisionsToPseudonymiseBetween({startDate: " + startDate.toISOString() + ", endDate: " + endDate.toISOString() + ", source: " + source + "]})");
                        return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _b.sent();
                        return [4 /*yield*/, decisionRepository.findAllBetween({
                                startDate: startDate,
                                endDate: endDate,
                                source: source,
                                labelStatus: 'toBeTreated',
                            })];
                    case 2:
                        decisions = _b.sent();
                        return [2 /*return*/, decisions];
                }
            });
        });
    },
    fetchDecisionsToPseudonymiseBetweenDateCreation: function (_a) {
        var source = _a.source, startDate = _a.startDate, endDate = _a.endDate;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, decisions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("fetchDecisionsToPseudonymiseBetweenDateCreation({startDate: " + startDate.toISOString() + ", endDate: " + endDate.toISOString() + ", source: " + source + "]})");
                        return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _b.sent();
                        return [4 /*yield*/, decisionRepository.findAllBetweenDateCreation({
                                startDate: startDate,
                                endDate: endDate,
                                source: source,
                                labelStatus: 'toBeTreated',
                            })];
                    case 2:
                        decisions = _b.sent();
                        return [2 /*return*/, decisions];
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
        var decisionId = _a.decisionId, decisionPseudonymisedText = _a.decisionPseudonymisedText, labelTreatments = _a.labelTreatments, publishStatus = _a.publishStatus;
        return __awaiter(this, void 0, void 0, function () {
            var decisionRepository, decision, updatedLabelTreatments, updatedData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _b.sent();
                        return [4 /*yield*/, decisionRepository.findById(decisionId)];
                    case 2:
                        decision = _b.sent();
                        console.log("original new labelTreatments : " + labelTreatments.toString());
                        if (decision.labelTreatments && decision.labelTreatments.length > 0) {
                            console.log("Found old labelTreatments, increase new labelTreatments order");
                            labelTreatments.forEach(function (labelTreatment) {
                                labelTreatment.order += decision.labelTreatments.length;
                            });
                            console.log("reordered new labelTreatments : " + labelTreatments.toString());
                        }
                        updatedLabelTreatments = decision.labelTreatments.concat(labelTreatments);
                        console.log("concat labelTreatments : " + updatedLabelTreatments.toString());
                        updatedData = {
                            _rev: decision._rev + 1,
                            labelStatus: 'done',
                            labelTreatments: updatedLabelTreatments,
                            pseudoText: decisionPseudonymisedText,
                        };
                        if (decision.publishStatus !== 'blocked') {
                            updatedData.publishStatus = publishStatus !== undefined ? publishStatus : 'toBePublished';
                        }
                        return [4 /*yield*/, decisionRepository.updateById(decision._id, updatedData)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
};
exports.decisionService = decisionService;
