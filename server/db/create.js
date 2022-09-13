//image url and caption text - incoming d
//auto0_id
//knex>?
//config ?
//require connection

//reead function for get route?
//add function
//export functions and require them in our routes
//read.finally(close)

const connection = require('./connection')

function addImageCaption(caption, db = connection) {
  return db('captions').insert(caption)
}

module.exports = { addImageCaption }
