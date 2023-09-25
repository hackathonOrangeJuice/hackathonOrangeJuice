const { sign } = require("jsonwebtoken");
const { jwt } = require("../configs/Auth");
const { compare, hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const knex = require('../database/connection');

class SessionsController {

    //efetuar login
    async signln(request, response) {

        const { email, password } = request.body;

        const user = await knex("users").where({ email }).first();

        if (!user) throw new AppError("usuário não encontrado", 404);

        const checkIfPasswordAreSame = await compare(password, user.password);

        if (!checkIfPasswordAreSame) throw new AppError("Email e/ou senhas incorretos", 400);

        const { expiresIn, secret } = jwt;

        
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn,
        });

        response.status(200).json({
            user,
            token,
        });
    };

    //efetuar cadastro
    async signup(request, response) {

        const { name, email, password } = request.body;

        console.log(name,email,password)

        const checkEmailAlreadyExists = await knex("users").where({ email }).first();

        if (checkEmailAlreadyExists) throw new AppError("email já em uso", 403);

        const encryptedPassword = await hash(password, 8);

        await knex("users").insert({
            name,
            email,
            password: encryptedPassword
        });

        response.status(200).json()
    }
}
module.exports = SessionsController;