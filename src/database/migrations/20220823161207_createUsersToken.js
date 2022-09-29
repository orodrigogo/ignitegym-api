exports.up = knex => knex.schema.createTable("users_tokens", table => {
  table.increments("id");
  table.integer("expires_in")
  table.integer("user_id").references("id").inTable("users");
  table.text("token").notNullable();
  table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("users_tokens");