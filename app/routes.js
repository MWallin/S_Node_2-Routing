"use strict"

// *****************************************************************************
// *****************************************************************************
// Requires and setup

const express = require( "express" )

const siteController      = require( "./controllers/site.controller" )
const dashboardController = require( "./controllers/dashboard.controller" )

const nameCheckMiddleware = require( "./middleware/nameCheck" )

const router  = express.Router()




// *****************************************************************************
// *****************************************************************************
// Routing

// Site routes overview
router.get( "/", siteController.showHome )

router.get( "/about", siteController.showAbout )

router.get( "/contact", siteController.showContact )
router.post( "/contact", siteController.processContact )

router.get( "/profiles/@:username/:post_slug", nameCheckMiddleware, siteController.showProfile )


// Dashboard routes

router.get( "/dashboard", dashboardController.showDashboard )


// 404 catch all
router.use( siteController.show404 )



// *****************************************************************************
// *****************************************************************************
// Exports

module.exports = router
