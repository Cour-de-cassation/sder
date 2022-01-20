"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("../generator");
var computeNearbyText_1 = require("./computeNearbyText");
describe('computeNearbyText', function () {
    it('should only have before text', function () {
        var wholeText = 'The developer who knows all design patterns is Romain';
        var annotation = generator_1.annotationGenerator.generate({ start: 47, text: 'Romain' });
        var _a = computeNearbyText_1.computeNearbyText(annotation, wholeText), textStart = _a.textStart, textEnd = _a.textEnd;
        var text = wholeText.substring(textStart, textEnd);
        expect(text).toBe(' all design patterns is Romain');
    });
    it('should only have after text', function () {
        var wholeText = 'Sure!\nNicolas is a designer who speaks several languages.';
        var annotation = generator_1.annotationGenerator.generate({ start: 6, text: 'Nicolas' });
        var _a = computeNearbyText_1.computeNearbyText(annotation, wholeText), textStart = _a.textStart, textEnd = _a.textEnd;
        var text = wholeText.substring(textStart, textEnd);
        expect(text).toBe('Nicolas is a designer who speaks');
    });
    it('should have both before and after texts', function () {
        var wholeText = 'As a data scientist, Benoit knows everything about pizzas';
        var annotation = generator_1.annotationGenerator.generate({ start: 21, text: 'Benoit' });
        var _a = computeNearbyText_1.computeNearbyText(annotation, wholeText), textStart = _a.textStart, textEnd = _a.textEnd;
        var text = wholeText.substring(textStart, textEnd);
        expect(text).toBe('s a data scientist, Benoit knows everything about p');
    });
});
