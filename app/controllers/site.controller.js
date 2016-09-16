"use strict"

// *****************************************************************************
// *****************************************************************************
// Requires and setup

const path = require( "path" )



// *****************************************************************************
// *****************************************************************************
// Funtion definitions

function showHome( req, res ) {

  res.sendFile( path.join( __dirname, "../../index.html" ) )

}



function showAbout( req, res ) {

  res.json({message: "Hello about!" })

}



function showContact( req, res ) {

  res.sendFile( path.join( __dirname, "../../contact.html" ) )

}



function processContact( req, res ) {

  console.log( req.body )

  res.send( `Hello ${req.body.name}! Nice to meet you =)` )

}



function showProfile( req, res ) {

  console.log( req.params )

  console.log( req.user )

  // res.send( `Hello ${req.params.username}, you really are the best!` )
  res.send( `You are reading ${req.params.post_slug} by ${req.params.username}` )

}



function show404( req, res ) {

  res.status( 404 )

  res.sendFile( path.join( __dirname, "../../404.html" ) )

}



// *****************************************************************************
// *****************************************************************************
// Exports

module.exports = {
  showHome      : showHome,
  showAbout     : showAbout,
  showContact   : showContact,
  showProfile   : showProfile,
  processContact: processContact,
  show404       : show404
}
