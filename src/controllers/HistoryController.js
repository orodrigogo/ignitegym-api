const AppError = require("../utils/AppError");
const knex = require("../database");
const dayjs = require("dayjs");

class HistoryController {
  async index(request, response) {
    const user_id = request.user.id;

    const history = await knex("history")
      .select(
        "history.id",
        "history.user_id",
        "history.exercise_id",
        "exercises.name",
        "exercises.group",
        "history.created_at"
      )
      .leftJoin("exercises", "exercises.id", "=", "history.exercise_id")
      .where({ user_id }).orderBy("history.created_at", "desc");

    const days = [];

    for (let exercise of history) {
      const day = dayjs(exercise.created_at).format('DD.MM.YYYY');

      if (!days.includes(day)) {
        days.push(day);
      }
    }

    const exercisesByDay = days.map(day => {
      const exercises = history
        .filter((exercise) => dayjs(exercise.created_at).format('DD.MM.YYYY') === day).
        map((exercise) => {
          return {
            ...exercise,
            hour: dayjs(exercise.created_at).format('HH:mm')
          }
        });

      return ({ title: day, data: exercises });
    });


    return response.json(exercisesByDay);
  }

  async create(request, response) {
    const { exercise_id } = request.body;
    const user_id = request.user.id;

    if (!exercise_id) {
      throw new AppError("Informe o id do exercício.");
    }

    await knex("history").insert({ user_id, exercise_id });

    return response.status(201).json();
  }
}

module.exports = HistoryController;