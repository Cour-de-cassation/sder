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

server.use(bodyParser.json());

server.get(
  '/label/decisions-to-pseudonymise',
  buildHandlingErrorController(async (req: any) =>
    decisionModule.service.fetchDecisionsToPseudonymise({ date: new Date(JSON.parse(req.query.date)) }),
  ),
);

server.get(
  '/pseudonymization-to-export',
  buildHandlingErrorController(async () => decisionModule.service.fetchPseudonymizationsToExport()),
);

server.patch(
  '/label/update-loaded-label-status',
  buildHandlingErrorController(async (req: any) => decisionModule.service.setDecisionsLoadedInLabel(req.body)),
);

server.patch(
  '/label/update-decision-pseudonymisation',
  buildHandlingErrorController(async (req: any) => decisionModule.service.updateDecisionPseudonymisation(req.body)),
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
