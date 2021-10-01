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
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDecisionFakeRepository = void 0;
var utils_1 = require("../../../utils");
var collectionName = 'decisions';
var collection = [];
function buildDecisionFakeRepository() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    clear: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                collection = [];
                                return [2 /*return*/];
                            });
                        });
                    },
                    findAll: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, collection];
                            });
                        });
                    },
                    findAllByDecisionIds: function (decisionIds) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, collection.filter(function (decision) { return decisionIds.includes(decision.sourceId); })];
                            });
                        });
                    },
                    findAllBySourceIdsAndSourceName: function (sourceIds, sourceName) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, collection.filter(function (decision) { return sourceIds.includes(decision.sourceId) && decision.sourceName === sourceName; })];
                            });
                        });
                    },
                    findAllIds: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, collection.map(function (decision) { return decision._id; })];
                            });
                        });
                    },
                    findAllIdsByLabelStatus: function (labelStatus) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, collection.filter(function (decision) { return decision.labelStatus === labelStatus; }).map(function (decision) { return decision._id; })];
                            });
                        });
                    },
                    findAllPseudonymisationToExport: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, collection
                                        .filter(function (decision) { return decision.labelStatus === 'done'; })
                                        .map(function (_a) {
                                        var sourceId = _a.sourceId, pseudoText = _a.pseudoText;
                                        return ({ decisionId: sourceId, pseudoText: pseudoText });
                                    })];
                            });
                        });
                    },
                    findAllBetween: function (_a) {
                        var startDate = _a.startDate, endDate = _a.endDate, source = _a.source;
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                return [2 /*return*/, collection.filter(function (decision) {
                                        return decision.dateCreation &&
                                            new Date(decision.dateCreation) >= startDate &&
                                            decision.dateCreation &&
                                            new Date(decision.dateCreation) < endDate &&
                                            decision.sourceName === source;
                                    })];
                            });
                        });
                    },
                    findAllPublicBySourceAndJurisdictionBetween: function (_a) {
                        var startDate = _a.startDate, endDate = _a.endDate, source = _a.source, jurisdiction = _a.jurisdiction;
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                return [2 /*return*/, collection.filter(function (decision) {
                                        return !!decision.public &&
                                            decision.dateCreation &&
                                            new Date(decision.dateCreation) >= startDate &&
                                            decision.dateCreation &&
                                            new Date(decision.dateCreation) < endDate &&
                                            decision.sourceName === source &&
                                            decision.jurisdictionName.toLowerCase() === jurisdiction.toLowerCase();
                                    })];
                            });
                        });
                    },
                    findAllIdsWithoutLabelFields: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, collection.filter(function (decision) { return decision.labelStatus === undefined; }).map(function (decision) { return decision._id; })];
                            });
                        });
                    },
                    findById: function (id) {
                        return __awaiter(this, void 0, void 0, function () {
                            var result;
                            return __generator(this, function (_a) {
                                result = collection.find(function (decision) { return utils_1.areMongoIdEqual(decision._id, id); });
                                if (!result) {
                                    throw new Error("No matching " + collectionName + " for _id " + id);
                                }
                                return [2 /*return*/, result];
                            });
                        });
                    },
                    findByDecisionId: function (decisionId) {
                        return __awaiter(this, void 0, void 0, function () {
                            var result;
                            return __generator(this, function (_a) {
                                result = collection.find(function (decision) { return decision.sourceId === decisionId; });
                                if (!result) {
                                    throw new Error("No matching " + collectionName + " for sourceId " + decisionId);
                                }
                                return [2 /*return*/, result];
                            });
                        });
                    },
                    insert: function (decision) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                collection.push(decision);
                                return [2 /*return*/];
                            });
                        });
                    },
                    updateById: function (id, decisionField) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                collection = collection.map(function (decision) {
                                    return utils_1.areMongoIdEqual(decision._id, id) ? __assign(__assign({}, decision), decisionField) : decision;
                                });
                                return [2 /*return*/];
                            });
                        });
                    },
                    updateByIds: function (ids, decisionField) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                collection = collection.map(function (decision) {
                                    return ids.some(function (id) { return utils_1.areMongoIdEqual(id, decision._id); }) ? __assign(__assign({}, decision), decisionField) : decision;
                                });
                                return [2 /*return*/];
                            });
                        });
                    },
                }];
        });
    });
}
exports.buildDecisionFakeRepository = buildDecisionFakeRepository;
