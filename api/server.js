const express = require( "express" );

const Smurfs = require( "../data/models/smurfsModel.js" );

const server = express();

server.use( express.json() );

module.exports = server;
