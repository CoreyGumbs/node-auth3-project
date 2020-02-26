const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./router/router');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', router);

module.exports = server;