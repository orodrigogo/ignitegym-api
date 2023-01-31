const knex = require("../database");
const dayjs = require("dayjs");
const uuid = require('uuid')

class GenerateRefreshToken {
  async execute(user_id) {
    await knex("refresh_token").where({ user_id }).delete();

    const expires_in = dayjs().add(15, "m").unix();
    const refresh_token = uuid.v4();

    await knex("refresh_token").insert({
      user_id,
      expires_in,
      refresh_token
    });

    return refresh_token;
  }
}

module.exports = GenerateRefreshToken;