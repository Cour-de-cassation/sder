"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadeColors = exports.settingsModel = exports.constantColors = exports.categoryIconNames = void 0;
var modelType_1 = require("../modelType");
var categoryIconNames = [
    'bank',
    'book',
    'cake',
    'car',
    'child',
    'city',
    'cloud',
    'email',
    'forbidden',
    'judge',
    'heart',
    'location',
    'map',
    'pencil',
    'person',
    'phone',
    'store',
    'web',
    'work',
];
exports.categoryIconNames = categoryIconNames;
var constantColors = ['black', 'white'];
exports.constantColors = constantColors;
var shadeColors = [
    'blue',
    'blueGrey',
    'brown',
    'cyan',
    'deepOrange',
    'deepPurple',
    'green',
    'grey',
    'indigo',
    'lightBlue',
    'lightGreen',
    'lime',
    'orange',
    'pink',
    'purple',
    'red',
    'teal',
    'yellow',
];
exports.shadeColors = shadeColors;
// The settings are passed as a JSON string to parse
var settingsModel = modelType_1.buildModel({
    kind: 'object',
    content: {
        json: { kind: 'primitive', content: 'string' },
    },
});
exports.settingsModel = settingsModel;
