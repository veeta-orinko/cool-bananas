exports.seed = async (knex) => {
    // Inserts seed entries
    await knex('images').insert([
      { id: 1, auth0_id: '1', image_url: '/images/banana0.png'},
      { id: 2, auth0_id: '1', image_url: 'https://pbs.twimg.com/media/ErKJ6RwVgAE06ET?format=jpg&name=small'},
      { id: 3, auth0_id: '2', image_url: 'https://www.entoin.com/images/cfun50.jpg'},
      { id: 4, auth0_id: '3', image_url: 'https://i.pinimg.com/originals/05/3d/80/053d806ae128229ec7b9019039fb088c.png'}
    ])
}
