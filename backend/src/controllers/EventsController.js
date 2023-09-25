const knex = require("../database/connection");
const AppError = require("../utils/AppError");

class EventsController {

    //pegar os eventos
    async getAllEvents(request, response) {

        const allEvents = await knex("events");

        if (allEvents.length === 0) throw new AppError("Sem eventos disponiveis", 404)

        response.status(200).json(allEvents);
    };

    //pegar evento por id
    async getEventById(request, response) {

        const { id } = request.params;

        const event = await knex("events").where({ id }).first();

        if (!event) throw new AppError("Evento não localizado", 404);

        response.status(200).json(event)
    };

    //pegar evento por data
    async getEventByDate(request,response){

        const { date } = request.params;

        const event = await knex("events").where({date}).first();

        console.log(event)

        return response.status(200).json(event)

    }

    //cadastrar evento
    async registerEvent(request, response) {

        const {
            name,
            description,
            modality,
            date,
        } = request.body;

        const dataNeweEvent = {
            name, description, modality, date
        };

        console.log("eu sou dados da requisiçao", name,description,modality,date)

        try {
            await knex("events").insert(dataNeweEvent);
        } catch (error) {
            throw new AppError("Não foi possivel cadastrar o evento", 400)
        }

        response.status(200).json();
    };

    //editar evento
    async editEvent(request, response) {

        const { id, name, description, modality } = request.body;

        const eventUpdate = await knex("events").where({ id }).first();

        try {

            await knex("events").update({
                name: name ? name : eventUpdate.name,
                description: description ? description : eventUpdate.description,
                modality: modality ? modality : eventUpdate.modality,
            }).where({ id })

        } catch (error) {
            throw new AppError("Não foi póssivel editar o evento, tente novamente", 400)
        }

        response.status(200).json();
    };

    //deletar evento
    async deleteEvent(request, response) {
        const { date } = request.params;

        try {

            await knex("events").where({ date }).del()
        } catch (error) {
            throw new AppError("Não foi póssivel deletar o evento", 400)
        }

        response.status(200).json()
    }


};

module.exports = EventsController;