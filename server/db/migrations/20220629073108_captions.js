exports.up = function (knex) {
  return knex.schema.createTable('captions', table => {
    table.increments('id').primary()
    table.integer('image_id').references('images.id')
    table.string('auth0_id').references('users.auth0_id')
    table.string('caption_text')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('captions')
}
