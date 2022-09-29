const knex = require("../database");

class ExercisesController {
  async index(request, response) {
    const { group } = request.params;

    const exercises = await knex("exercises").where({ group }).orderBy("name");

    return response.json(exercises);
  }

  async show(request, response) {
    const { id } = request.params;

    const exercise = await knex("exercises").where({ id }).first();

    return response.json(exercise);
  }
}

module.exports = ExercisesController;