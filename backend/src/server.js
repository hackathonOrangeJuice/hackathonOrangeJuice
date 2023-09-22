const routes = require('./routes')

const express = require('express');

const app = express();

app.use('/', routes);
const PORT = 7777;

app.listen(PORT, () => console.log("Server running on port ", PORT));