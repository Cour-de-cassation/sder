import bodyParser from 'body-parser';
import express = require('express');

import { environment } from '../environment';
import { decisionService } from '../modules';
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
    decisionService.fetchDecisionsToPseudonymise({ date: new Date(JSON.parse(req.query.date)) }),
  ),
);

server.patch(
  '/label/update-loaded-label-status',
  buildHandlingErrorController(async (req: any) => decisionService.setDecisionsLoadedInLabel(req.body)),
);

server.patch(
  '/label/update-decision-pseudonymisation',
  buildHandlingErrorController(async (req: any) => decisionService.updateDecisionPseudonymisation(req.body)),
);
