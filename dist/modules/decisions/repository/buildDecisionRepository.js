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
exports.buildDecisionRepository = void 0;
var utils_1 = require("../../../utils");
var decisionCollectionName_1 = require("../decisionCollectionName");
var decisionType_1 = require("../decisionType");
function buildDecisionRepository() {
    return __awaiter(this, void 0, void 0, function () {
        var runMongo;
        return __generator(this, function (_a) {
            runMongo = utils_1.buildRunMongo(decisionCollectionName_1.decisionCollectionName);
            return [2 /*return*/, {
                    clear: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, runMongo(function (_a) {
                                            var collection = _a.collection;
                                            return collection.deleteMany({});
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                    findAll: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_b) {
                                            return [2 /*return*/, collection.find().toArray()];
                                        }); });
                                    })];
                            });
                        });
                    },
                    findAllByDecisionIds: function (decisionIds) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return collection.find({ sourceId: { $in: decisionIds } }).toArray();
                                    })];
                            });
                        });
                    },
                    findAllByLabelStatusAndSourceIdsAndSourceName: function (_a) {
                        var sourceIds = _a.sourceIds, sourceName = _a.sourceName, labelStatus = _a.labelStatus;
                        return __awaiter(this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_b) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_b) {
                                            return [2 /*return*/, collection.find({ sourceId: { $in: sourceIds }, sourceName: sourceName, labelStatus: labelStatus }).toArray()];
                                        }); });
                                    })];
                            });
                        });
                    },
                    findAllIds: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return __awaiter(_this, void 0, void 0, function () {
                                            var decisionFieldsIds;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, collection.find().project({ _id: 1 }).toArray()];
                                                    case 1:
                                                        decisionFieldsIds = _b.sent();
                                                        return [2 /*return*/, decisionFieldsIds.map(function (_a) {
                                                                var _id = _a._id;
                                                                return _id;
                                                            })];
                                                }
                                            });
                                        });
                                    })];
                            });
                        });
                    },
                    findAllIdsByLabelStatus: function (labelStatus) {
                        return __awaiter(this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return __awaiter(_this, void 0, void 0, function () {
                                            var decisionFieldsIds;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, collection.find({ labelStatus: labelStatus }).project({ _id: 1 }).toArray()];
                                                    case 1:
                                                        decisionFieldsIds = _b.sent();
                                                        return [2 /*return*/, decisionFieldsIds.map(function (_a) {
                                                                var _id = _a._id;
                                                                return _id;
                                                            })];
                                                }
                                            });
                                        });
                                    })];
                            });
                        });
                    },
                    findAllPseudonymisationToExport: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return __awaiter(_this, void 0, void 0, function () {
                                            var pseudonymisations;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, collection
                                                            .find({ labelStatus: 'done' })
                                                            .project({ sourceId: 1, pseudoText: 1 })
                                                            .toArray()];
                                                    case 1:
                                                        pseudonymisations = _b.sent();
                                                        return [2 /*return*/, pseudonymisations.map(function (_a) {
                                                                var sourceId = _a.sourceId, pseudoText = _a.pseudoText;
                                                                return ({ decisionId: sourceId, pseudoText: pseudoText });
                                                            })];
                                                }
                                            });
                                        });
                                    })];
                            });
                        });
                    },
                    findAllBetween: function (_a) {
                        var startDate = _a.startDate, endDate = _a.endDate, source = _a.source, labelStatus = _a.labelStatus;
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return collection
                                            .find({
                                            dateDecision: { $gte: startDate.toISOString(), $lt: endDate.toISOString() },
                                            sourceName: source,
                                            labelStatus: labelStatus || { $in: decisionType_1.labelStatuses },
                                        })
                                            .toArray();
                                    })];
                            });
                        });
                    },
                    findAllBySourceAndJurisdictionBetween: function (_a) {
                        var startDate = _a.startDate, endDate = _a.endDate, source = _a.source, jurisdiction = _a.jurisdiction;
                        return __awaiter(this, void 0, void 0, function () {
                            var jurisdictionRegex;
                            return __generator(this, function (_b) {
                                jurisdictionRegex = new RegExp(jurisdiction, 'i');
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return collection
                                            .find({
                                            dateDecision: { $gte: startDate.toISOString(), $lt: endDate.toISOString() },
                                            sourceName: source,
                                            jurisdictionName: jurisdictionRegex,
                                        })
                                            .toArray();
                                    })];
                            });
                        });
                    },
                    findAllPublicBySourceAndJurisdictionBetween: function (_a) {
                        var startDate = _a.startDate, endDate = _a.endDate, source = _a.source, jurisdiction = _a.jurisdiction, labelStatus = _a.labelStatus;
                        return __awaiter(this, void 0, void 0, function () {
                            var jurisdictionRegex;
                            return __generator(this, function (_b) {
                                jurisdictionRegex = new RegExp(jurisdiction, 'i');
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return collection
                                            .find({
                                            dateDecision: { $gte: startDate.toISOString(), $lt: endDate.toISOString() },
                                            sourceName: source,
                                            jurisdictionName: jurisdictionRegex,
                                            public: true,
                                            labelStatus: labelStatus,
                                        })
                                            .toArray();
                                    })];
                            });
                        });
                    },
                    findAllIdsWithoutLabelFields: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return __awaiter(_this, void 0, void 0, function () {
                                            var decisionFieldsIds;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, collection
                                                            .find({ labelStatus: { $exists: false } })
                                                            .project({ _id: 1 })
                                                            .toArray()];
                                                    case 1:
                                                        decisionFieldsIds = _b.sent();
                                                        return [2 /*return*/, decisionFieldsIds.map(function (_a) {
                                                                var _id = _a._id;
                                                                return _id;
                                                            })];
                                                }
                                            });
                                        });
                                    })];
                            });
                        });
                    },
                    findById: function (id) {
                        return __awaiter(this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return __awaiter(_this, void 0, void 0, function () {
                                            var result;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, collection.findOne({ _id: id })];
                                                    case 1:
                                                        result = _b.sent();
                                                        if (!result) {
                                                            throw new Error("No matching " + decisionCollectionName_1.decisionCollectionName + " for _id " + id);
                                                        }
                                                        return [2 /*return*/, result];
                                                }
                                            });
                                        });
                                    })];
                            });
                        });
                    },
                    findBySourceIdAndSourceName: function (_a) {
                        var sourceId = _a.sourceId, sourceName = _a.sourceName;
                        return __awaiter(this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_b) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return __awaiter(_this, void 0, void 0, function () {
                                            var result;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, collection.findOne({ sourceId: sourceId, sourceName: sourceName })];
                                                    case 1:
                                                        result = _b.sent();
                                                        return [2 /*return*/, result || undefined];
                                                }
                                            });
                                        });
                                    })];
                            });
                        });
                    },
                    findByDecisionId: function (decisionId) {
                        return __awaiter(this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                return [2 /*return*/, runMongo(function (_a) {
                                        var collection = _a.collection;
                                        return __awaiter(_this, void 0, void 0, function () {
                                            var result;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, collection.findOne({ sourceId: decisionId })];
                                                    case 1:
                                                        result = _b.sent();
                                                        if (!result) {
                                                            throw new Error("No matching " + decisionCollectionName_1.decisionCollectionName + " for sourceId " + decisionId);
                                                        }
                                                        return [2 /*return*/, result];
                                                }
                                            });
                                        });
                                    })];
                            });
                        });
                    },
                    insert: function (decision) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, runMongo(function (_a) {
                                            var collection = _a.collection;
                                            return collection.insert(decision);
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                    updateById: function (id, decisionField) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, runMongo(function (_a) {
                                            var collection = _a.collection;
                                            return collection.updateOne({ _id: id }, { $set: decisionField });
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                    updateByIds: function (ids, decisionField) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, runMongo(function (_a) {
                                            var collection = _a.collection;
                                            return collection.updateMany({ _id: { $in: ids } }, { $set: decisionField });
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                }];
        });
    });
}
exports.buildDecisionRepository = buildDecisionRepository;
