"use strict"

// *****************************************************************************
// *****************************************************************************
// Exports

module.exports = ( req, res, next ) => {

  console.log( "This is my middleware!!!!!" )

  //Do user stuff here
  const user = "undefined"

  // Grab user from db
  // const user = User.findOne({username: req.params.username})

  // There is no user
  if ( !user ) {

    res.status( 404 )

    return res.send( "404, user not found" )

  }

  // Also attach some data to the request
  req.user = {
    username: "Mikael"
  }


  next()

}
