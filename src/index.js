const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://lucas:verdao01515@cluster01-eif2j.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// app.use(cors({  origin: 'http://localhost:3000' }))
app.use(cors())
    //Faz compreender que o sistema precisa aceitar JSON na requisição
app.use(express.json());
app.use(routes);

server.listen(3333);