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
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var utils_1 = require("../../../utils");
var lib_1 = require("../lib");
var repository_1 = require("../repository");
var decisionService_1 = require("./decisionService");
describe('decisionService', function () {
    describe('createDecision', function () {
        it('should create a new decision in the database with the given field', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisionField, decision;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisionField = lodash_1.omit(lib_1.generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);
                        return [4 /*yield*/, decisionService_1.decisionService.createDecision(decisionField)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionRepository.findByDecisionId(decisionField.sourceId)];
                    case 3:
                        decision = _a.sent();
                        expect(lodash_1.omit(decision, ['_id', '_rev', 'labelStatus', 'labelTreatments'])).toEqual(decisionField);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should create a new decision in the database with a _rev at 0', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisionField, decision;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisionField = lodash_1.omit(lib_1.generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);
                        return [4 /*yield*/, decisionService_1.decisionService.createDecision(decisionField)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionRepository.findByDecisionId(decisionField.sourceId)];
                    case 3:
                        decision = _a.sent();
                        expect(decision._rev).toEqual(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should create a new decision in the database with an empty labelTreatments', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisionField, decision;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisionField = lodash_1.omit(lib_1.generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);
                        return [4 /*yield*/, decisionService_1.decisionService.createDecision(decisionField)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionRepository.findByDecisionId(decisionField.sourceId)];
                    case 3:
                        decision = _a.sent();
                        expect(decision.labelTreatments).toEqual([]);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should create a new decision in the database with a 'toBeTreated' label status", function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisionField, decision;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisionField = lodash_1.omit(lib_1.generateDecision(), ['_id', '_rev', 'labelStatus', 'labelTreatments']);
                        return [4 /*yield*/, decisionService_1.decisionService.createDecision(decisionField)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionRepository.findByDecisionId(decisionField.sourceId)];
                    case 3:
                        decision = _a.sent();
                        expect(decision.labelStatus).toEqual('toBeTreated');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('fetchDecisionBySourceIdAndSourceName', function () {
        it('should fetch the right decision', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisions, fetchedDecision;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisions = [
                            { sourceId: 100, sourceName: 'jurica' },
                            { sourceId: 200, sourceName: 'jurica' },
                            { sourceId: 300, sourceName: 'jurica' },
                            { sourceId: 200, sourceName: 'jurinet' },
                        ].map(lib_1.generateDecision);
                        return [4 /*yield*/, Promise.all(decisions.map(decisionRepository.insert))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.fetchDecisionBySourceIdAndSourceName(200, 'jurica')];
                    case 3:
                        fetchedDecision = _a.sent();
                        expect(fetchedDecision).toEqual(decisions[1]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('fetchAllDecisionsBySourceAndJurisdictionsAndChambersBetween', function () {
        it('should fetch the right decision', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisions, fetchedDecisions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisions = [
                            {
                                public: true,
                                sourceName: 'jurica',
                                jurisdictionName: "cour d'appel de bordeaux",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: false,
                                sourceName: 'jurica',
                                jurisdictionName: "Cour d'appel de bordeaux",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: null,
                                sourceName: 'jurica',
                                jurisdictionName: "Cour d'appel de bordeaux",
                                chamberId: 'Other',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: true,
                                sourceName: 'jurinet',
                                jurisdictionName: "Cour d'appel de Bordeaux",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: true,
                                sourceName: 'jurica',
                                jurisdictionName: "Cour d'appel de Dijon",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: true,
                                sourceName: 'jurica',
                                jurisdictionName: "Cour d'appel de Dijon",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(8),
                            },
                            {
                                public: true,
                                sourceName: 'jurica',
                                jurisdictionName: "Cour d'appel de Paris",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: true,
                                sourceName: 'jurinet',
                                jurisdictionName: "Cour d'appel de Bordeaux",
                                chamberId: 'Other',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                        ].map(lib_1.generateDecision);
                        return [4 /*yield*/, Promise.all(decisions.map(decisionRepository.insert))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.fetchAllDecisionsBySourceAndJurisdictionsAndChambersBetween({
                                jurisdictions: ["Cour d'appel de Bordeaux", "Cour d'appel de Dijon"],
                                chambers: ['CR'],
                                source: 'jurica',
                                startDate: new Date(utils_1.dateBuilder.daysAgo(5)),
                                endDate: new Date(utils_1.dateBuilder.daysAgo(1)),
                            })];
                    case 3:
                        fetchedDecisions = _a.sent();
                        expect(fetchedDecisions.sort()).toEqual([decisions[0], decisions[1], decisions[4]].sort());
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('fetchPublicDecisionsBySourceAndJurisdictionsAndChambersBetween', function () {
        it('should fetch the right decision', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisions, fetchedDecisions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisions = [
                            {
                                public: true,
                                sourceName: 'jurica',
                                jurisdictionName: "cour d'appel de bordeaux",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: false,
                                sourceName: 'jurica',
                                jurisdictionName: "Cour d'appel de bordeaux",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: null,
                                sourceName: 'jurica',
                                jurisdictionName: "Cour d'appel de bordeaux",
                                chamberId: 'Other',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: true,
                                sourceName: 'jurinet',
                                jurisdictionName: "Cour d'appel de Bordeaux",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: true,
                                sourceName: 'jurica',
                                jurisdictionName: "Cour d'appel de Dijon",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: true,
                                sourceName: 'jurica',
                                jurisdictionName: "Cour d'appel de Dijon",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(8),
                            },
                            {
                                public: true,
                                sourceName: 'jurica',
                                jurisdictionName: "Cour d'appel de Paris",
                                chamberId: 'CR',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                            {
                                public: true,
                                sourceName: 'jurinet',
                                jurisdictionName: "Cour d'appel de Bordeaux",
                                chamberId: 'Other',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                            },
                        ].map(lib_1.generateDecision);
                        return [4 /*yield*/, Promise.all(decisions.map(decisionRepository.insert))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.fetchPublicDecisionsBySourceAndJurisdictionsAndChambersBetween({
                                jurisdictions: ["Cour d'appel de Bordeaux", "Cour d'appel de Dijon"],
                                chambers: ['CR'],
                                source: 'jurica',
                                startDate: new Date(utils_1.dateBuilder.daysAgo(5)),
                                endDate: new Date(utils_1.dateBuilder.daysAgo(1)),
                            })];
                    case 3:
                        fetchedDecisions = _a.sent();
                        expect(fetchedDecisions.sort()).toEqual([decisions[0], decisions[4]].sort());
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('fetchDecisionsToPseudonymiseBetween', function () {
        it('should fetch the jurinet decisions between the given date', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisions, fetchedDecisions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisions = [
                            {
                                sourceId: 300,
                                sourceName: 'jurica',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                                pseudoText: '',
                                labelStatus: 'toBeTreated',
                            },
                            {
                                sourceId: 200,
                                sourceName: 'jurinet',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                                pseudoText: '',
                                labelStatus: 'toBeTreated',
                            },
                        ].map(lib_1.generateDecision);
                        return [4 /*yield*/, Promise.all(decisions.map(decisionRepository.insert))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.fetchDecisionsToPseudonymiseBetween({
                                startDate: new Date(utils_1.dateBuilder.daysAgo(5)),
                                endDate: new Date(utils_1.dateBuilder.daysAgo(1)),
                                source: 'jurinet',
                            })];
                    case 3:
                        fetchedDecisions = _a.sent();
                        expect(fetchedDecisions.sort()).toEqual([decisions[1]].sort());
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not fetch the jurinet decisions between the given date already treated', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisions, fetchedDecisions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisions = [
                            {
                                sourceId: 200,
                                sourceName: 'jurinet',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                                pseudoText: 'TEXT',
                                labelStatus: 'done',
                            },
                        ].map(lib_1.generateDecision);
                        return [4 /*yield*/, Promise.all(decisions.map(decisionRepository.insert))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.fetchDecisionsToPseudonymiseBetween({
                                startDate: new Date(utils_1.dateBuilder.daysAgo(5)),
                                endDate: new Date(utils_1.dateBuilder.daysAgo(1)),
                                source: 'jurinet',
                            })];
                    case 3:
                        fetchedDecisions = _a.sent();
                        expect(fetchedDecisions.sort()).toEqual([].sort());
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('fetchChainedJuricaDecisionsToPseudonymiseBetween', function () {
        it('should fetch the jurica decisions chained to jurinet decision between the given date already treated', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisions, fetchedDecisions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisions = [
                            {
                                sourceId: 300,
                                sourceName: 'jurica',
                                dateDecision: utils_1.dateBuilder.daysAgo(9),
                                pseudoText: '',
                                labelStatus: 'toBeTreated',
                            },
                            {
                                sourceId: 400,
                                sourceName: 'jurica',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                                pseudoText: '',
                                labelStatus: 'toBeTreated',
                            },
                            {
                                sourceId: 200,
                                sourceName: 'jurinet',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                                pseudoText: '',
                                labelStatus: 'toBeTreated',
                                decatt: [300],
                            },
                        ].map(lib_1.generateDecision);
                        return [4 /*yield*/, Promise.all(decisions.map(decisionRepository.insert))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.fetchChainedJuricaDecisionsToPseudonymiseBetween({
                                startDate: new Date(utils_1.dateBuilder.daysAgo(5)),
                                endDate: new Date(utils_1.dateBuilder.daysAgo(1)),
                            })];
                    case 3:
                        fetchedDecisions = _a.sent();
                        expect(fetchedDecisions).toEqual([decisions[0]]);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should fetch the jurica decisions chained to jurinet decision between the given date already treated (case jurinet is treated)', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisions, fetchedDecisions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisions = [
                            {
                                sourceId: 300,
                                sourceName: 'jurica',
                                dateDecision: utils_1.dateBuilder.daysAgo(9),
                                pseudoText: '',
                                labelStatus: 'toBeTreated',
                            },
                            {
                                sourceId: 400,
                                sourceName: 'jurica',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                                pseudoText: '',
                                labelStatus: 'toBeTreated',
                            },
                            {
                                sourceId: 200,
                                sourceName: 'jurinet',
                                dateDecision: utils_1.dateBuilder.daysAgo(3),
                                pseudoText: 'TEXT',
                                labelStatus: 'done',
                                decatt: [300],
                            },
                        ].map(lib_1.generateDecision);
                        return [4 /*yield*/, Promise.all(decisions.map(decisionRepository.insert))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.fetchChainedJuricaDecisionsToPseudonymiseBetween({
                                startDate: new Date(utils_1.dateBuilder.daysAgo(5)),
                                endDate: new Date(utils_1.dateBuilder.daysAgo(1)),
                            })];
                    case 3:
                        fetchedDecisions = _a.sent();
                        expect(fetchedDecisions).toEqual([decisions[0]]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('fetchPseudonymisationsToExport', function () {
        it("should fetch all the pseudonymisation text and id of the decisions ready to be exported", function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisions, pseudonymisations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisions = [
                            { labelStatus: 'done' },
                            { labelStatus: 'loaded' },
                            { labelStatus: 'done' },
                            { labelStatus: 'toBeTreated' },
                        ].map(lib_1.generateDecision);
                        return [4 /*yield*/, Promise.all(decisions.map(decisionRepository.insert))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.fetchPseudonymisationsToExport()];
                    case 3:
                        pseudonymisations = _a.sent();
                        expect(pseudonymisations.sort()).toEqual([
                            {
                                decisionId: decisions[0].sourceId,
                                pseudoText: decisions[0].pseudoText,
                            },
                            {
                                decisionId: decisions[2].sourceId,
                                pseudoText: decisions[2].pseudoText,
                            },
                        ].sort());
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('updateDecisionsLabelStatus', function () {
        it('should update labelStatus for the given decision ids', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, decisions, updatedDecision0, updatedDecision1, updatedDecision2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        decisions = [
                            { labelStatus: 'toBeTreated' },
                            { labelStatus: 'toBeTreated' },
                            { labelStatus: 'toBeTreated' },
                        ].map(lib_1.generateDecision);
                        return [4 /*yield*/, Promise.all(decisions.map(decisionRepository.insert))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.updateDecisionsLabelStatus({
                                decisionIds: [decisions[0]._id, decisions[2]._id],
                                labelStatus: 'loaded',
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, decisionRepository.findById(decisions[0]._id)];
                    case 4:
                        updatedDecision0 = _a.sent();
                        return [4 /*yield*/, decisionRepository.findById(decisions[1]._id)];
                    case 5:
                        updatedDecision1 = _a.sent();
                        return [4 /*yield*/, decisionRepository.findById(decisions[2]._id)];
                    case 6:
                        updatedDecision2 = _a.sent();
                        expect(lodash_1.omit(updatedDecision0, 'labelStatus')).toEqual(lodash_1.omit(decisions[0], 'labelStatus'));
                        expect(updatedDecision0.labelStatus).toEqual('loaded');
                        expect(updatedDecision1).toEqual(decisions[1]);
                        expect(lodash_1.omit(updatedDecision2, 'labelStatus')).toEqual(lodash_1.omit(decisions[2], 'labelStatus'));
                        expect(updatedDecision2.labelStatus).toEqual('loaded');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('updateDecisionPseudonymisation', function () {
        var decision = lib_1.generateDecision();
        var treatmenst = [
            {
                annotations: [{ category: 'CATEGORY', entityId: 'ENTITY_ID', start: 0, text: 'TEXT' }],
                source: 'SOURCE',
                order: 0,
            },
        ];
        it('should update decision pseudonymisation text and treatments', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, updatedDecision;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        return [4 /*yield*/, decisionRepository.insert(decision)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.updateDecisionPseudonymisation({
                                decisionId: decision._id,
                                decisionPseudonymisedText: 'NEW_PSEUDONYMISATION',
                                labelTreatments: treatmenst,
                                publishStatus: 'toBePublished',
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, decisionRepository.findById(decision._id)];
                    case 4:
                        updatedDecision = _a.sent();
                        expect(updatedDecision.pseudoText).toEqual('NEW_PSEUDONYMISATION');
                        expect(updatedDecision.labelTreatments).toEqual(treatmenst);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should update decision _rev field', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, updatedDecision;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        return [4 /*yield*/, decisionRepository.insert(decision)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.updateDecisionPseudonymisation({
                                decisionId: decision._id,
                                decisionPseudonymisedText: 'NEW_PSEUDONYMISATION',
                                labelTreatments: treatmenst,
                                publishStatus: 'toBePublished',
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, decisionRepository.findById(decision._id)];
                    case 4:
                        updatedDecision = _a.sent();
                        expect(updatedDecision._rev).toEqual(decision._rev + 1);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not update publish status if not referenced', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, updatedDecision;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        return [4 /*yield*/, decisionRepository.insert(decision)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.updateDecisionPseudonymisation({
                                decisionId: decision._id,
                                decisionPseudonymisedText: 'NEW_PSEUDONYMISATION',
                                labelTreatments: treatmenst,
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, decisionRepository.findById(decision._id)];
                    case 4:
                        updatedDecision = _a.sent();
                        expect(updatedDecision.publishStatus).toEqual(decision.publishStatus);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should update publish status', function () { return __awaiter(void 0, void 0, void 0, function () {
            var decisionRepository, updatedDecision;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, repository_1.buildDecisionRepository()];
                    case 1:
                        decisionRepository = _a.sent();
                        return [4 /*yield*/, decisionRepository.insert(decision)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, decisionService_1.decisionService.updateDecisionPseudonymisation({
                                decisionId: decision._id,
                                decisionPseudonymisedText: 'NEW_PSEUDONYMISATION',
                                labelTreatments: treatmenst,
                                publishStatus: 'blocked',
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, decisionRepository.findById(decision._id)];
                    case 4:
                        updatedDecision = _a.sent();
                        expect(updatedDecision.publishStatus).toEqual('blocked');
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
