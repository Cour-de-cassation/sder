export { decisionsValidationSchema };

const decisionsValidationSchema = {
  $jsonSchema: {
    bsonType: 'object',
    additionalProperties: false,
    //    required: [],
    properties: {
      _id: { bsonType: 'objectId' },
      _rev: { bsonType: 'int' },
      analysis: {
        bsonType: 'object',
        additionalProperties: false,
        //       required: [],
        properties: {
          doctrine: { bsonType: 'string' },
          link: { bsonType: 'string' },
          reference: {
            bsonType: 'array',
            additionalProperties: false,
            items: {
              bsonType: 'string',
            },
          },
          source: { bsonType: 'string' },
          summary: { bsonType: 'string' },
          target: { bsonType: 'string' },
          title: {
            bsonType: 'array',
            additionalProperties: false,
            items: {
              bsonType: 'string',
            },
          },
        },
      },
      appeals: {
        bsonType: 'array',
        additionalProperties: false,
        items: {
          bsonType: 'string',
        },
      },
      chamberId: { bsonType: 'string' },
      chamberName: { bsonType: 'string' },
      dateCreation: { bsonType: 'date' },
      dateDecision: { bsonType: 'date' },
      jurisdictionCode: { bsonType: 'string' },
      jurisdictionId: { bsonType: 'string' },
      jurisdictionName: { bsonType: 'string' },
      locked: { bsonType: 'bool' },
      originalText: { bsonType: 'string' },
      parties: { bsonType: 'string' },
      pseudoStatus: { bsonType: 'string' },
      pseudoText: { bsonType: 'string' },
      pubCategory: { bsonType: 'string' },
      registerNumber: { bsonType: 'string' },
      solution: { bsonType: 'string' },
      sourceId: { bsonType: 'string' },
      sourceName: { bsonType: 'string' },
    },
  },
};
