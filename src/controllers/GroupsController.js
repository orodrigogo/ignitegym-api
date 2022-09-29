const knex = require("../database");

class GroupsController {
  async index(request, response) {
    const groups = await knex("exercises").select("group").groupBy("group").orderBy("group");

    const formattedGroups = groups.map(item => item.group);

    return response.json(formattedGroups);
  }
}

module.exports = GroupsController;