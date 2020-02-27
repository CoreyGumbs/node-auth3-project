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

function findBy(filter){
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

async function add(user){
    const [id] = await db('users').insert(user, 'id')
    
    return findById(id);
}