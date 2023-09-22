const { Router } = require("express");
const sessionsRoutes = require("./sessions.Routes");
const eventsRoutes = require("./events.Routes")

const routes = Router();

routes.use('/sessions',  sessionsRoutes );
routes.use("/events", eventsRoutes );

module.exports = routes ;