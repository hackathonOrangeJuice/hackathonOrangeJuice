require('express-async-errors');
const express = require('express');
const routes = require('./routes');
const app = express();
const AppError = require('./utils/AppError');

app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use(routes);


app.use((error, request, response, next) => {

    if (error instanceof AppError) {
        console.log("cheuguei nos erros")
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        });
    };

    return response.status(500).json({
        status: "error",
        message: "INTERNAL ERROR SERVER"
    });
});

const PORT = 7777;

app.listen(PORT, () => console.log("Server running on port ", PORT));