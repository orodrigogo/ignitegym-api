const { sign } = require("jsonwebtoken");
const authConfig = require("../configs/auth");

class GenerateToken {
  async execute(userId) {
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(userId),
      expiresIn
    });

    return token;
  }
}

module.exports = GenerateToken;