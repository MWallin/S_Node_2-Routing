"use strict"

// *****************************************************************************
// *****************************************************************************
// Funtion definitions

function showDashboard( req, res ) {

  res.send( "I am a dashboard!" )

}



// *****************************************************************************
// *****************************************************************************
// Exports

module.exports = {
  showDashboard: showDashboard,
}
