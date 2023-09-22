const express = require('express');
const routes = require('./routes');

const cors = require("cors");
app.use(cors());


const app = express();

app.use('/', routes);
const PORT = 7777;

app.listen(PORT, () => console.log("Server running on port ", PORT));