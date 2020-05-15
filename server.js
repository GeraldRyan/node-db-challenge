const express = require('express');
const helmet = require('helmet');

// const StoreRouter = require('./router/store-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) => {
    res.send("Let's go!");
})

module.exports = server;