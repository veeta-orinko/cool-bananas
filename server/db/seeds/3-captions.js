exports.seed = async (knex) => {
  // Inserts seed entries
  await knex('captions').insert([
    { id: 1, image_id: 1, auth0_id: '1', caption_text: 'Banananana'},
    { id: 2, image_id: 1, auth0_id: '2', caption_text: 'When you\'re a happy banana'},
    { id: 3, image_id: 1, auth0_id: '3', caption_text: 'Cool bananas'},
    { id: 4, image_id: 2, auth0_id: '1', caption_text: 'Pew pew'},
    { id: 5, image_id: 2, auth0_id: '2', caption_text: 'Stop right there or I\'ll point at you!'},
    { id: 6, image_id: 2, auth0_id: '3', caption_text: 'Kachow'},
    { id: 7, image_id: 3, auth0_id: '1', caption_text: 'Thank you very much'},
    { id: 8, image_id: 3, auth0_id: '2', caption_text: 'Let\'s motor!'},
    { id: 9, image_id: 4, auth0_id: '2', caption_text: 'Pyjamas for scale'}
  ])
}
