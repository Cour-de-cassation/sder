import bodyParser from 'body-parser';
import express = require('express');

import { environment } from '../environment';

export { server, startServer };

const server = express();

function startServer() {
  server.listen(environment.port);
}

server.use(bodyParser.json({ limit: '10mb' }));
