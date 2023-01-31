const knex = require("../database");
const { compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const GenerateRefreshToken = require("../providers/GenerateRefreshToken");
const GenerateToken = require("../providers/GenerateToken");

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email: email.toLowerCase() }).first();

    if (!user) {
      throw new AppError("E-mail e/ou senha incorreta.", 404);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreta.", 404);
    }

    const generateTokenProvider = new GenerateToken();
    const token = await generateTokenProvider.execute(user.id);

    const generateRefreshToken = new GenerateRefreshToken();
    const refresh_token = await generateRefreshToken.execute(user.id);

    delete user.password;

    response.status(201).json({ user, token, refresh_token });
  }
}

module.exports = SessionsController;