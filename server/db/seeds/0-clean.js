exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('votes').del()
  await knex('captions').del()
  await knex('images').del()
  await knex('users').del()
}
