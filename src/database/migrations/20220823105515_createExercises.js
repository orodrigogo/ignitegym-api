exports.up = knex => knex.schema.createTable("exercises", table => {
  table.increments("id");
  table.text("name").notNullable();
  table.integer("series").notNullable();
  table.integer("repetitions").notNullable();
  table.text("group").notNullable();
  table.text("demo").notNullable();
  table.text("thumb").notNullable();
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("exercises");