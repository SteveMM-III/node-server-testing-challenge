const db = require( '../dbConfig.js' );

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert( smurf ) {
  return await db( 'smurfs' )
    .insert( smurf    )
    .then( ids => {
      const [ id ] = ids;
      return findById( id );
    } );
}

async function update( id, changes ) {
  return await db( 'smurfs' )
    .where( { id } )
    .update( changes )
    .then( async () => await findById( id ) );
}

async function remove( id ) {
  return await db( 'smurfs' )
    .where( { id } )
    .first()
    .then( smurf => {
      return smurf ?
        db( 'smurfs' )
          .where( { id } )
          .del()
          .then( () => smurf )
        : null;
    } );
}

async function getAll() {
  return await db( 'smurfs' );
}

async function findById( id ) {
  return db( 'smurfs' )
    .where( { id } )
    .first();
}
