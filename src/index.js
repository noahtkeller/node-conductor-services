import cl from 'conductor-client';
import tasks from './tasks/index.js';

const ConductorClient = cl.default;
const client = new ConductorClient({ baseUrl: 'http://localhost:8080/api' });

for (const { name, handler, options, autoStart } of tasks) {
  client.registerWatcher(name, handler, options, autoStart)
}
