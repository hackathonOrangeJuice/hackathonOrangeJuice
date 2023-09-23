const { Router } = require("express");
const sessionsController = require("../controllers/SessionsController");
const controller = new sessionsController();

const routes = Router();

routes.post('/signln', controller.signln);
routes.post('/signup', controller.signup);

module.exports = routes;