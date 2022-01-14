const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('palabras.json'); 
const middlewares = jsonServer.defaults({ noCors: true });
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);