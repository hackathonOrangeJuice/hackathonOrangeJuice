class EventsController {
    //pegando os eventos
    async getAllEvents(){
        response.status(200).json({
            message : "get all events"
        });
    };

    //pegando evento por id
    async getEventById(request, response){
        response.status(200).json({
            message: "get event by id"
        });
    };

    //cadastrando evento
    async registerEvent(){
        response.status(200).json({
            message: "register event"
        });
    };

    //editando evento
    async editEvent(request, response){
        response.status(200).json({
            message: "editing event"
        });
    };


};

module.exports = EventsController;