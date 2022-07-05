exports.up = function (knex) {
  return knex.schema.createTable('images', table => {
    table.increments('id').primary()
    table.string('auth0_id').references('users.auth0_id')
    table.string('image_url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('images')
}
