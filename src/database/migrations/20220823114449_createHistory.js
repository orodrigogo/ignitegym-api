exports.up = knex => knex.schema.createTable("history", table => {
  table.increments("id");

  table.integer("user_id").references("id").inTable("users");
  table.integer("exercise_id").references("id").inTable("exercises");

  table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("history");