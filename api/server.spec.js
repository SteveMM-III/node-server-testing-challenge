const request = require( 'supertest' );

const server = require( './server' );

describe( "server.js", () => {
  describe( "environment", () => {
    it( "should set environment to testing", () => {
      expect( process.env.DB_ENV ).toBe( "testing" );
    } );
  } );
  describe( 'GET /', () => {
    it( 'should return a 200 OK', async function() {
      await request( server ).get( '/' ).then( res => {
        expect( res.status ).toBe( 200 );
      } );
    } );
  } );
  describe( 'GET /', () => {
    it( 'should return a JSON', async () => {
      await request( server ).get( '/' ).then( res => {
        expect( res.type ).toMatch( /json/i );
      } ) ;
    } );
  } );
  describe( 'GET /', () => {
    it( 'should return { api: "up" }', async () => {
      await request( server ).get( '/' ).then( res => {
        expect( res.body.api ).toBe( 'up' );
      } );
    } );
  } );
} );
