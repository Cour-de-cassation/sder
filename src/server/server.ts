import bodyParser from 'body-parser';
import express = require('express');

import { getEnvironment } from '../environment';

export { server, startServer };

const server = express();

function startServer() {
  const environment = getEnvironment();
  server.listen(environment.port);
}

server.use(bodyParser.json({ limit: '10mb' }));
