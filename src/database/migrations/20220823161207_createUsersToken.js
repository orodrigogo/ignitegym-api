exports.up = knex => knex.schema.createTable("refresh_token", table => {
  table.increments("id");
  table.integer("expires_in")
  table.text("refresh_token")
  table.integer("user_id").references("id").inTable("users");
  table.timestamp("created_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("users_tokens");
