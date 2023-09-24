const { Router } = require("express");
const ensureAuthentication  = require("../middlewares/ensureAuthentication");
const eventsController = require("../controllers/EventsController");

const controller = new eventsController();

const routes = Router();

routes.use(ensureAuthentication);

routes.get("/", controller.getAllEvents);
routes.get("/:id", controller.getEventById);
routes.post("/", controller.registerEvent);
routes.put("/", controller.editEvent);
routes.delete("/:id", controller.deleteEvent)


module.exports = routes;



