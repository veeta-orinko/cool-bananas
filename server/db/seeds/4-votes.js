exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('votes').insert([
    { auth0_id: 1, caption_id: 1 },
    { auth0_id: 1, caption_id: 2 },
    { auth0_id: 1, caption_id: 3 },
    { auth0_id: 1, caption_id: 4 },
    { auth0_id: 2, caption_id: 1 },
    { auth0_id: 2, caption_id: 2 },
    { auth0_id: 2, caption_id: 3 },
    { auth0_id: 2, caption_id: 4 },
    { auth0_id: 3, caption_id: 2 },
    { auth0_id: 3, caption_id: 4 },
    { auth0_id: 3, caption_id: 6 },
    { auth0_id: 3, caption_id: 8 },
  ])
}
