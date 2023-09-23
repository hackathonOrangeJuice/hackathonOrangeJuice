const AppError = require("../utils/AppError");
const { jwt } = require("../configs/Auth")


const { verify } = require("jsonwebtoken");


async function ensureAuthentication(request, response, next){

    const authHeader = request.headers.authorization;

    if(!authHeader) throw new AppError("TOKEN NÃO INFORMADO", 400);

    const [, token] = authHeader.split(" ");

    const { secret } = jwt;

    try {

        const { sub : user_id } = verify(token, secret);

        request.user = {
            id: String(user_id),
          };

          next();

    } catch (error) {
        throw new AppError("Token inválido", 403)
    }
}

module.exports = ensureAuthentication;
