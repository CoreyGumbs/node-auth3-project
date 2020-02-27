const db = require('../data/dbConfig');


module.exports = {
    find,
    findBy,
    findById,
    add
}


function find(){
    return db('users').select('id', 'username', 'password', 'departments');
}

function findBy({filter}){
    return db('users')
    .select('id', 'username', 'password', 'departments')
    .where(filter);
}

function findById(id){
    return db('users')
    .select('id', 'username', 'password', 'departments')
    .where('users.id', id)
    .first();
}

function add(user){
    return db('users')
    .insert(user, 'id')
}