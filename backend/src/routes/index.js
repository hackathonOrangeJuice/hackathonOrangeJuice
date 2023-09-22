const { Router } = require("express");
const sessionsRoutes = require("./sessions");

const routes = Router();

routes.use('/sessions',  sessionsRoutes );


module.exports = routes ;