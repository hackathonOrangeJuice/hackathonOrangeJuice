class SessionsController {
    //efetuar login
    async signln(request, response){
        response.status(200).json({
            message: "cheguei aqui no login"
        })
    };

    async signup(request,response){
        response.status(200).json({
            message: "cheguei no signup"
        })
    }
}
module.exports = SessionsController;