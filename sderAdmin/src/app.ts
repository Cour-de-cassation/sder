import bodyParser from 'body-parser';
import express = require('express');

import { environment } from './environment';
import { decisionService } from './modules';
import { buildHandlingErrorController } from './utils';

const app = express();

app.use(bodyParser.json());

app.get(
  '/label/decisions-to-pseudonymise',
  buildHandlingErrorController(async (req: any) =>
    decisionService.fetchDecisionsToPseudonymise({ date: new Date(JSON.parse(req.query.date)) }),
  ),
);

app.patch(
  '/label/decisions-to-pseudonymise',
  buildHandlingErrorController(async (req: any) => decisionService.setDecisionsLoadedInLabel(req.body)),
);

app.patch(
  '/label/update-decision-pseudonymisation',
  buildHandlingErrorController(async (req: any) => decisionService.updateDecisionPseudonymisation(req.body)),
);

app.listen(environment.port);
