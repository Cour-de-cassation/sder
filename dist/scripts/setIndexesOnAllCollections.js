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
var environment_1 = require("../environment");
var modules_1 = require("../modules");
var utils_1 = require("../utils");
var collections = [modules_1.decisionModule.collection];
setIndexesOnAllCollections();
function setIndexesOnAllCollections() {
    return __awaiter(this, void 0, void 0, function () {
        function setIndexes(collection) {
            return __awaiter(this, void 0, void 0, function () {
                var runMongo, _loop_1, _i, _a, index;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            runMongo = (0, utils_1.buildRunMongo)(collection.name);
                            _loop_1 = function (index) {
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0: return [4 /*yield*/, runMongo(function (_a) {
                                                var collection = _a.collection;
                                                return collection.createIndex(index);
                                            })];
                                        case 1:
                                            _c.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            _i = 0, _a = collection.indexes;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            index = _a[_i];
                            return [5 /*yield**/, _loop_1(index)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        var environment, _i, collections_1, collection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    environment = (0, environment_1.getEnvironment)();
                    console.log("Connecting to MongoDb: ".concat(environment.SDER_DB_URL));
                    console.log("Setting indexes on the ".concat(environment.SDER_DB_NAME, " DB"));
                    _i = 0, collections_1 = collections;
                    _a.label = 1;
                case 1:
                    if (!(_i < collections_1.length)) return [3 /*break*/, 4];
                    collection = collections_1[_i];
                    console.log("Setting indexes on collection ".concat(collection.name));
                    return [4 /*yield*/, setIndexes(collection)];
                case 2:
                    _a.sent();
                    console.log("Indexes of collection ".concat(collection.name, " DONE"));
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("Indexes computation finished");
                    process.exit(0);
                    return [2 /*return*/];
            }
        });
    });
}
