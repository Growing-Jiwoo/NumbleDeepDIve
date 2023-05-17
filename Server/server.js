const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('./socket/socket');

const port = 3030;

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
socket(server);

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
