const Smurfs = require( './smurfsModel' );
const db     = require( '../dbConfig'   );

describe( 'smurfs model', () => {
  beforeEach( async () => {
    await db( 'smurfs' ).truncate();
  } );

  describe( 'insert()', function() {
    it( 'should add the smurf to the DB', async () => {
      await Smurfs.insert( { name: "Papa_Smurf" } );
      await Smurfs.insert( { name: "Smurfette"  } );

      const smurfs = await db( "smurfs" );
      expect( smurfs ).toHaveLength( 2 );
    } );
  } );
} );
