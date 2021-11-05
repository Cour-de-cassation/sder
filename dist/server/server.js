import bodyParser from 'body-parser';
import express from 'express';
import { getEnvironment } from '../environment';
export { server, startServer };
var server = express();
function startServer() {
    var environment = getEnvironment();
    server.listen(environment.port);
}
server.use(bodyParser.json({ limit: '10mb' }));
