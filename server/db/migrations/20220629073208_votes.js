exports.up = function (knex) {
  return knex.schema.createTable('votes', table => {
    table.string('auth0_id').references('users.auth0_id')
    table.integer('caption_id').references('captions.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('captions')
}
