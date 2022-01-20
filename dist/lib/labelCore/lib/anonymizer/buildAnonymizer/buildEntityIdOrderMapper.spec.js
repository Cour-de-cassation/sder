"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = require("../../../modules/annotation");
var buildEntityIdOrderMapper_1 = require("./buildEntityIdOrderMapper");
describe('buildEntityIdOrderMapper', function () {
    it('should return the order of every entityId inside the category', function () {
        var entityId1 = annotation_1.annotationModule.lib.entityIdHandler.compute('prenom', 'benoit');
        var entityId2 = annotation_1.annotationModule.lib.entityIdHandler.compute('prenom', 'romain');
        var entityId3 = annotation_1.annotationModule.lib.entityIdHandler.compute('prenom', 'nicolas');
        var entityId4 = annotation_1.annotationModule.lib.entityIdHandler.compute('nom', 'gle');
        var entityId5 = annotation_1.annotationModule.lib.entityIdHandler.compute('nom', 'assouad');
        var entityId6 = annotation_1.annotationModule.lib.entityIdHandler.compute('nom', 'serrano');
        var entityIdOrderMapper = buildEntityIdOrderMapper_1.buildEntityIdOrderMapper([
            entityId1,
            entityId2,
            entityId3,
            entityId4,
            entityId5,
            entityId6,
        ]);
        expect(entityIdOrderMapper[entityId1]).toBe(0);
        expect(entityIdOrderMapper[entityId2]).toBe(2);
        expect(entityIdOrderMapper[entityId3]).toBe(1);
        expect(entityIdOrderMapper[entityId4]).toBe(1);
        expect(entityIdOrderMapper[entityId5]).toBe(0);
        expect(entityIdOrderMapper[entityId6]).toBe(2);
    });
});
