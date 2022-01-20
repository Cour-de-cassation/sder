"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entityIdHandler_1 = require("./entityIdHandler");
describe('entityIdHandler', function () {
    describe('compute', function () {
        it('should compute an annotation entity id', function () {
            var category = 'CATEGORY';
            var text = 'TEXT';
            var entityId = entityIdHandler_1.entityIdHandler.compute(category, text);
            expect(entityId).toEqual('CATEGORY_TEXT');
        });
    });
    describe('getCategory', function () {
        it('should return the category associated to an entity id', function () {
            var category = 'CATEGORY';
            var text = 'TEXT';
            var entityId = entityIdHandler_1.entityIdHandler.compute(category, text);
            var entityIdCategory = entityIdHandler_1.entityIdHandler.getCategory(entityId);
            expect(entityIdCategory).toEqual(category);
        });
    });
    describe('getText', function () {
        it('should return the text associated to an entity id', function () {
            var category = 'CATEGORY';
            var text = 'TEXT';
            var entityId = entityIdHandler_1.entityIdHandler.compute(category, text);
            var entityIdText = entityIdHandler_1.entityIdHandler.getText(entityId);
            expect(entityIdText).toEqual(text);
        });
    });
});
