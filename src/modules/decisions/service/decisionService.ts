import { idModule } from '../../id';
import { decisionType, labelTreatmentsType, publishStatusType } from '../decisionType';
import { buildDecision } from '../lib';
import { buildDecisionRepository } from '../repository';

export { decisionService };

const decisionService = {
  async createDecision(decisionFields: Omit<decisionType, '_id' | '_rev' | 'labelStatus' | 'labelTreatments'>) {
    const decisionRepository = await buildDecisionRepository();

    const decision = buildDecision({ ...decisionFields, _rev: 0, labelStatus: 'toBeTreated' });
    await decisionRepository.insert(decision);
  },

  async fetchCourtDecisionById(id: decisionType['_id']) {
    console.log(`fetchCourtDecisionById({id: ${id}})`);
    const decisionRepository = await buildDecisionRepository();

    return decisionRepository.findById(idModule.lib.buildId(id));
  },

  async fetchDecisionBySourceIdAndSourceName(
    sourceId: decisionType['sourceId'],
    sourceName: decisionType['sourceName'],
  ) {
    console.log(`fetchDecisionBySourceIdAndSourceName({sourceId: ${sourceId}, sourceName: ${sourceName}})`);
    const decisionRepository = await buildDecisionRepository();

    return decisionRepository.findBySourceIdAndSourceName({ sourceId, sourceName });
  },

  async fetchPseudonymisationsToExport() {
    console.log(`fetchPseudonymisationsToExport()`);
    const decisionRepository = await buildDecisionRepository();

    return decisionRepository.findAllPseudonymisationToExport();
  },

  async fetchAllDecisionsBySourceAndJurisdictionsBetween({
    startDate,
    endDate,
    source,
    jurisdictions,
  }: {
    startDate: Date;
    endDate: Date;
    source: string;
    jurisdictions: string[];
  }) {
    console.log(
      `fetchAllDecisionsBySourceAndJurisdictionsBetween({startDate: ${startDate.toISOString()}, endDate: ${endDate.toISOString()}, source: ${source}, jurisdictions: [${jurisdictions.join(
        ', ',
      )}]})`,
    );
    const decisionRepository = await buildDecisionRepository();

    const decisions: decisionType[] = [];
    for (const jurisdiction of jurisdictions) {
      console.log(`Fetching decisions for jurisdiction ${jurisdiction}`);
      const decisionsForJuridiction = await decisionRepository.findAllBySourceAndJurisdictionBetween({
        endDate,
        startDate,
        jurisdiction,
        source,
      });
      console.log(
        `${
          decisionsForJuridiction.length
        } decisions found for jurisdiction "${jurisdiction}", source "${source}" and between ${startDate.toISOString()} and ${endDate.toISOString()}`,
      );
      decisions.push(...decisionsForJuridiction);
    }

    return decisions;
  },

  async fetchAllDecisionsBySourceAndJurisdictionsAndChambersBetween({
    startDate,
    endDate,
    source,
    jurisdictions,
    chambers,
  }: {
    startDate: Date;
    endDate: Date;
    source: string;
    jurisdictions: string[];
    chambers: string[];
  }) {
    console.log(
      `fetchAllDecisionsBySourceAndJurisdictionsAndChambersBetween({startDate: ${startDate.toISOString()}, endDate: ${endDate.toISOString()}, source: ${source}, jurisdictions: [${jurisdictions.join(
        ', ',
      )}], chambers: [${chambers.join(', ')}]})`,
    );
    const decisionRepository = await buildDecisionRepository();

    const decisions: decisionType[] = [];
    for (const jurisdiction of jurisdictions) {
      for (const chamberId of chambers) {
        console.log(`Fetching decisions for jurisdiction ${jurisdiction} and chamber ${chamberId}`);
        const decisionsForJuridiction = await decisionRepository.findAllBySourceAndJurisdictionAndChamberBetween({
          endDate,
          startDate,
          jurisdiction,
          chamberId,
          source,
        });
        console.log(
          `${
            decisionsForJuridiction.length
          } decisions found for jurisdiction "${jurisdiction}", source "${source}" and between ${startDate.toISOString()} and ${endDate.toISOString()}`,
        );
        decisions.push(...decisionsForJuridiction);
      }
    }

    return decisions;
  },

  async fetchPublicDecisionsBySourceAndJurisdictionsAndChambersBetween({
    startDate,
    endDate,
    source,
    jurisdictions,
    chambers,
  }: {
    startDate: Date;
    endDate: Date;
    source: string;
    jurisdictions: string[];
    chambers: string[];
  }) {
    console.log(
      `fetchPublicDecisionsBySourceAndJurisdictionsAndChambersBetween({startDate: ${startDate.toISOString()}, endDate: ${endDate.toISOString()}, source: ${source}, jurisdictions: [${jurisdictions.join(
        ', ',
      )}], chambers: [${chambers.join(', ')}]})`,
    );
    const decisionRepository = await buildDecisionRepository();

    const decisions: decisionType[] = [];
    for (const jurisdiction of jurisdictions ?? ['']) {
      for (const chamberId of chambers ?? ['']) {
        console.log(`Fetching decisions for jurisdiction ${jurisdiction} and chamber ${chamberId}`);
        const decisionsForJuridiction = await decisionRepository.findAllPublicBySourceAndJurisdictionAndChamberBetweenWithLabelStatus(
          {
            endDate,
            startDate,
            jurisdiction,
            chamberId,
            source,
            labelStatus: 'toBeTreated',
          },
        );
        console.log(
          `${
            decisionsForJuridiction.length
          } decisions found for jurisdiction "${jurisdiction}", source "${source}" and between ${startDate.toISOString()} and ${endDate.toISOString()}`,
        );
        decisions.push(...decisionsForJuridiction);
      }
    }

    return decisions;
  },

  async fetchChainedJuricaDecisionsToPseudonymiseBetween({ startDate, endDate }: { startDate: Date; endDate: Date }) {
    console.log(
      `fetchChainedJuricaDecisionsToPseudonymiseBetween({startDate: ${startDate.toISOString()}, endDate: ${endDate.toISOString()}]})`,
    );
    const decisionRepository = await buildDecisionRepository();

    const jurinetDecisions = await decisionRepository.findAllBetween({
      startDate,
      endDate,
      source: 'jurinet',
    });

    console.log(
      `${
        jurinetDecisions.length
      } jurinet decisions found between ${startDate.toISOString()} and ${endDate.toISOString()}`,
    );

    const juricaChainedDecisionSourceIds: number[] = [];

    jurinetDecisions.forEach((decision) => {
      if (decision.decatt) {
        decision.decatt.forEach((sourceId) => juricaChainedDecisionSourceIds.push(sourceId));
      }
    });

    console.log(`${juricaChainedDecisionSourceIds.length} sourceIds found`);

    const juricaToBeTreatedChainedDecisions = await decisionRepository.findAllByLabelStatusAndSourceIdsAndSourceName({
      sourceIds: juricaChainedDecisionSourceIds,
      sourceName: 'jurica',
      labelStatus: 'toBeTreated',
    });
    const juricaExportedChainedDecisions = await decisionRepository.findAllByLabelStatusAndSourceIdsAndSourceName({
      sourceIds: juricaChainedDecisionSourceIds,
      sourceName: 'jurica',
      labelStatus: 'exported',
    });

    const juricaChainedDecisions = [...juricaToBeTreatedChainedDecisions, ...juricaExportedChainedDecisions];

    console.log(
      `${juricaChainedDecisions.length} jurica chained decisions found (${juricaToBeTreatedChainedDecisions.length} toBeTreated and ${juricaExportedChainedDecisions.length} exported)`,
    );

    const filteredJuricaChainedDecisions = juricaChainedDecisions.filter((decision) => !decision.pseudoText);

    console.log(`${filteredJuricaChainedDecisions.length} jurica chained decisions with no pseudoText found`);

    return filteredJuricaChainedDecisions;
  },

  async fetchDecisionsToPseudonymiseBetween({
    source,
    startDate,
    endDate,
  }: {
    source: decisionType['sourceName'];
    startDate: Date;
    endDate: Date;
  }) {
    console.log(
      `fetchDecisionsToPseudonymiseBetween({startDate: ${startDate.toISOString()}, endDate: ${endDate.toISOString()}, source: ${source}]})`,
    );
    const decisionRepository = await buildDecisionRepository();

    const decisions = await decisionRepository.findAllBetween({
      startDate,
      endDate,
      source,
      labelStatus: 'toBeTreated',
    });

    return decisions;
  },

  async fetchDecisionsToPseudonymiseBetweenDateCreation({
    source,
    startDate,
    endDate,
  }: {
    source: decisionType['sourceName'];
    startDate: Date;
    endDate: Date;
  }) {
    console.log(
      `fetchDecisionsToPseudonymiseBetweenDateCreation({startDate: ${startDate.toISOString()}, endDate: ${endDate.toISOString()}, source: ${source}]})`,
    );
    const decisionRepository = await buildDecisionRepository();

    const decisions = await decisionRepository.findAllBetweenDateCreation({
      startDate,
      endDate,
      source,
      labelStatus: 'toBeTreated',
    });

    return decisions;
  },

  async deprecatedUpdateDecisionsLabelStatus({
    decisionIds,
    labelStatus,
  }: {
    decisionIds: number[];
    labelStatus: decisionType['labelStatus'];
  }) {
    const decisionRepository = await buildDecisionRepository();

    const decisions = await decisionRepository.findAllByDecisionIds(decisionIds);

    await decisionRepository.updateByIds(
      decisions.map((decision) => decision._id),
      { labelStatus },
    );
  },

  async updateDecisionsLabelStatus({
    decisionIds,
    labelStatus,
  }: {
    decisionIds: Array<decisionType['_id']>;
    labelStatus: decisionType['labelStatus'];
  }) {
    const decisionRepository = await buildDecisionRepository();

    await decisionRepository.updateByIds(decisionIds, { labelStatus });
  },

  async depracatedUpdateDecisionPseudonymisation({
    decisionId,
    decisionPseudonymisedText,
    labelTreatments,
  }: {
    decisionId: number;
    decisionPseudonymisedText: string;
    labelTreatments: labelTreatmentsType;
  }) {
    const decisionRepository = await buildDecisionRepository();

    const decision = await decisionRepository.findByDecisionId(decisionId);

    await decisionRepository.updateById(decision._id, {
      _rev: decision._rev + 1,
      labelStatus: 'done',
      labelTreatments,
      pseudoText: decisionPseudonymisedText,
    });
  },

  async updateDecisionPseudonymisation({
    decisionId,
    decisionPseudonymisedText,
    labelTreatments,
    publishStatus,
  }: {
    decisionId: decisionType['_id'];
    decisionPseudonymisedText: string;
    labelTreatments: labelTreatmentsType;
    publishStatus?: publishStatusType;
  }) {
    const decisionRepository = await buildDecisionRepository();

    const decision = await decisionRepository.findById(decisionId);

    let updatedLabelTreatments = undefined;
    if (decision.labelTreatments && decision.labelTreatments.length > 0) {
      labelTreatments.forEach((labelTreatment) => {
        labelTreatment.order += decision.labelTreatments.length;
      });
      updatedLabelTreatments = decision.labelTreatments.concat(labelTreatments);
    }

    const updatedData = {
      _rev: decision._rev + 1,
      labelStatus: 'done',
      labelTreatments: updatedLabelTreatments ? updatedLabelTreatments : labelTreatments,
      pseudoText: decisionPseudonymisedText,
    } as any;

    if (decision.publishStatus !== 'blocked') {
      updatedData.publishStatus = publishStatus !== undefined ? publishStatus : 'toBePublished';
    }

    await decisionRepository.updateById(decision._id, updatedData);
  },
};
