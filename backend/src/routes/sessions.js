const { Router } = require("express");
const sessionsController = require("../controllers/SessionsController");
const controller = new sessionsController();


const routes = Router();

routes.get('/signln', controller.signln);
routes.get('/signup', controller.signup);

module.exports = routes;