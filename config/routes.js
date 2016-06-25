/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    controller: 'AppController',
    action: 'index'
  },
  'GET /catalogos/programs':{
    controller: 'CatalogController',
    action: 'listProgram'
  },
  'GET /catalogos/users':{
    controller: 'CatalogController',
    action: 'listUsers'
  },
  'GET /catalogos/typeUsers':{
    controller: 'CatalogController',
    action: 'listTypeUsers'
  },
  '/en':{
    controller: 'AppController',
    action: 'changeEn'
  },
  '/es': {
    controller: 'AppController',
    action: 'changeEs'
  },
  '/register': {
    view:"register"
  },
  'get /login': {
    view:"login"
  },
  'post /login': {
    controller: 'AppController',
    action: 'login'
  },

  '/logout': {
    controller: 'AppController',
    action: 'logout'
  },
  '/search': {
    view: 'private/proyects/create'
  },
  '/admin': {
    view: 'private/index'
  },


  //    ####      Admin    #####
  'GET /admin': 'PrivateAppController.createProject',
  'GET /admin/project/create': 'PrivateAppController.createProject',
  'GET /admin/project/edit': 'PrivateAppController.editProject',
  'GET /admin/project/list': 'PrivateAppController.listProjects',

  'GET /admin/user/create': 'PrivateAppController.createUser',
  'GET /admin/user/list':   'PrivateAppController.listUsers',
  'GET /admin/user/edit':   'PrivateAppController.editUser',

  'GET /admin/program/list':   'PrivateAppController.listPrograms',
  'GET /admin/program/create': 'PrivateAppController.createProgram',
  'GET /admin/program/edit':   'PrivateAppController.editProgram',

  /*'GET /admin/typeuser/create': 'PrivateAppController.createTypeuser',
  'GET /admin/typeuser/list':   'PrivateAppController.listTypeusers',
  'GET /admin/typeuser/edit':   'PrivateAppController.editTypeuser',*/

  'GET /admin/period/create': 'PrivateAppController.createPeriod',
  'GET /admin/period/list':   'PrivateAppController.listPeriods',
  'GET /admin/period/edit':   'PrivateAppController.editPeriod',


// ----------------- POST -------------------------

'POST /project/create': {
  controller: 'PrivateController',
  action: 'createProject'
},
'POST /project/edit': {
  controller: 'PrivateController',
  action: 'editProject'
},
'/project/delete': {
  controller: 'PrivateController',
  action: 'deleteProject'
},


'POST /user/create': {
  controller: 'PrivateController',
  action: 'createUser'
//    view: 'private/catalogs/users/create'
},
'POST /user/edit': {
  controller: 'PrivateController',
  action: 'editUser'
  //view: 'private/catalogs/users/list'
},
'/user/delete': {
  controller: 'PrivateController',
  action: 'deleteUser'
  //view: 'private/catalogs/users/list'
},


'POST /program/create': {
  controller: 'PrivateController',
  action: 'createProgram'
  //view: 'private/catalogs/programs/create'
},
'POST /program/edit': {
  controller: 'PrivateController',
  action: 'editProgram'
  //view: 'inicio/catalogs/programs/list'
},
'/program/delete': {
  controller: 'PrivateController',
  action: 'deleteProgram'
},

'POST /period/create': {
  controller: 'PrivateController',
  action: 'createPeriod'
},
'POST /period/edit': {
  controller: 'PrivateController',
  action: 'editPeriod'
},
'/period/delete': {
  controller: 'PrivateController',
  action: 'deletePeriod'
},

/*'POST /typeuser/create': {
  controller: 'PrivateController',
  action: 'createTypeuser'
},
'POST /typeuser/edit': {
  controller: 'PrivateController',
  action: 'editTypeuser'
},
'/typeuser/delete': {
  controller: 'PrivateController',
  action: 'deleteTypeuser'
},*/

// ---------------- END POST -----------------------


  // Inicio

  '/proye':{
    view:'proye'
  },
  '/proyuni':{
    view:'inicio/proyuni'
  },
  '/proyext':{
    view:'inicio/proyext'
  },
  '/cat-prog':{
    view:'inicio/cat-prog'
  },
  '/cat-titulo':{
    view:'inicio/cat-titulo'
  },
  '/cat-autor':{
    view:'inicio/cat-autor'
  },
  '/cat-asesor':{
    view:'inicio/cat-asesor'
  },
  '/search':{
    view:'inicio/search'
  },

  '/contact':{
    view:'contact'
  },
  '/map-site':{
    view:'mapsite'
  }



  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
