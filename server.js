const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./router/projects-router.js');
const resourcesRouter = require('./router/resources-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourcesRouter);


server.get('/', (req, res) => {
    res.send("Let's go!");
})

module.exports = server;