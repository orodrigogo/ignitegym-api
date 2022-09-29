const knex = require("../database");
const dayjs = require("dayjs");

class GenerateRefreshToken {
  async execute(userId, newToken) {
    const expires_in = dayjs().add(15, "second").unix();

    await knex("users_tokens").insert({
      user_id: userId,
      expires_in,
      token: newToken
    });
  }
}

module.exports = GenerateRefreshToken;