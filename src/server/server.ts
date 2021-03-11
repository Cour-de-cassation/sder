import bodyParser from 'body-parser';
import express = require('express');

import { environment } from '../environment';
import { decisionModule } from '../modules';
import { buildHandlingErrorController } from '../utils';

export { server, startServer };

const server = express();

function startServer() {
  server.listen(environment.port);
}

server.use(bodyParser.json({ limit: '50mb' }));

server.get(
  '/decisions-to-pseudonymise',
  buildHandlingErrorController(async (req: any) =>
    decisionModule.service.fetchDecisionsToPseudonymise({
      date: new Date(JSON.parse(req.query.date)),
    }),
  ),
);

server.get(
  '/pseudonymisation-to-export',
  buildHandlingErrorController(async () => decisionModule.service.fetchPseudonymisationsToExport()),
);

server.patch(
  '/update-label-status',
  buildHandlingErrorController(async (req: any) =>
    decisionModule.service.updateDecisionsLabelStatus({
      decisionIds: req.body.decisionIds,
      labelStatus: req.body.labelStatus,
    }),
  ),
);

server.patch(
  '/update-decision-pseudonymisation',
  buildHandlingErrorController(async (req: any) =>
    decisionModule.service.updateDecisionPseudonymisation({
      decisionId: req.body.decisionId,
      decisionPseudonymisedText: req.body.decisionPseudonymisedText,
      labelTreatments: req.body.labelTreatments,
    }),
  ),
);

server.post(
  '/create-decision',
  buildHandlingErrorController(async (req: any) =>
    decisionModule.service.createDecision({
      ...req.body,
      dateCreation: new Date(req.body.dateCreation),
      dateDecision: new Date(req.body.dateDecision),
    }),
  ),
);
