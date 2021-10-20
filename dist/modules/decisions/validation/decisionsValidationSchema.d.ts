export { decisionsValidationSchema };
declare const decisionsValidationSchema: {
    $jsonSchema: {
        bsonType: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
            _id: {
                bsonType: string;
            };
            _rev: {
                bsonType: string;
            };
            _version: {
                bsonType: string;
            };
            analysis: {
                bsonType: string;
                additionalProperties: boolean;
                properties: {
                    analyse: {
                        bsonType: string;
                        additionalProperties: boolean;
                        items: {
                            bsonType: string;
                        };
                    };
                    doctrine: {
                        bsonType: string;
                    };
                    link: {
                        bsonType: string;
                    };
                    reference: {
                        bsonType: string;
                        additionalProperties: boolean;
                        items: {
                            bsonType: string;
                        };
                    };
                    source: {
                        bsonType: string;
                    };
                    summary: {
                        bsonType: string;
                    };
                    target: {
                        bsonType: string;
                    };
                    title: {
                        bsonType: string;
                        additionalProperties: boolean;
                        items: {
                            bsonType: string;
                        };
                    };
                };
            };
            appeals: {
                bsonType: string;
                additionalProperties: boolean;
                items: {
                    bsonType: string;
                };
            };
            chamberId: {
                bsonType: string;
            };
            chamberName: {
                bsonType: string;
            };
            dateCreation: {
                bsonType: string;
            };
            dateDecision: {
                bsonType: string;
            };
            decatt: {
                bsonType: string;
                additionalProperties: boolean;
                items: {
                    bsonType: string;
                };
            };
            jurisdictionCode: {
                bsonType: string;
            };
            jurisdictionId: {
                bsonType: string;
            };
            jurisdictionName: {
                bsonType: string;
            };
            labelStatus: {
                bsonType: string;
                enum: string[];
            };
            labelTreatments: {
                bsonType: string;
                additionalProperties: boolean;
                items: {
                    bsonType: string;
                    additionalProperties: boolean;
                    properties: {
                        annotations: {
                            bsonType: string;
                            additionalProperties: boolean;
                            items: {
                                bsonType: string;
                                additionalProperties: boolean;
                                properties: {
                                    category: {
                                        bsonType: string;
                                    };
                                    entityId: {
                                        bsonType: string;
                                    };
                                    start: {
                                        bsonType: string;
                                    };
                                    text: {
                                        bsonType: string;
                                    };
                                };
                            };
                        };
                        source: {
                            bsonType: string;
                        };
                        order: {
                            bsonType: string;
                        };
                    };
                };
            };
            locked: {
                bsonType: string;
            };
            occultation: {
                bsonType: string;
                additionalProperties: boolean;
                properties: {
                    additionalTerms: {
                        bsonType: string;
                    };
                    categoriesToOmit: {
                        bsonType: string;
                        additionalProperties: boolean;
                        items: {
                            bsonType: string;
                        };
                    };
                };
            };
            originalText: {
                bsonType: string;
            };
            parties: {
                bsonType: string;
                additionalProperties: boolean;
                items: {
                    bsonType: string;
                };
            };
            pseudoStatus: {
                bsonType: string;
            };
            pseudoText: {
                bsonType: string;
            };
            pubCategory: {
                bsonType: string;
            };
            registerNumber: {
                bsonType: string;
            };
            solution: {
                bsonType: string;
            };
            sourceId: {
                bsonType: string;
            };
            sourceName: {
                bsonType: string;
            };
            zoning: {
                bsonType: string;
                additionalProperties: boolean;
                properties: {
                    introduction_subzonage: {
                        bsonType: string;
                        additionalProperties: boolean;
                        properties: {
                            publication: {
                                bsonType: string;
                                additionalProperties: boolean;
                                items: {
                                    bsonType: string;
                                };
                            };
                        };
                    };
                };
            };
            publication: {
                bsonType: string;
                additionalProperties: boolean;
                items: {
                    bsonType: string;
                };
            };
            formation: {
                bsonType: string;
            };
            natureAffaireCivil: {
                bsonType: string;
            };
            natureAffairePenal: {
                bsonType: string;
            };
            codeMatiereCivil: {
                bsonType: string;
            };
        };
    };
};
