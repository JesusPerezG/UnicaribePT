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


  //    ####      Admin    #####
  'GET /admin/project/create': 'private/project/create',
  'GET /admin/project/list':   'private/project/list',
  'GET /admin/project/edit':   'private/project/edit',

  'GET /admin/user/create': 'private/user/create',
  'GET /admin/user/list':   'private/user/list',
  'GET /admin/user/edit':   'private/user/edit',

  'GET /admin/program/list':   'private/program/list',
  'GET /admin/program/create': 'private/program/create',
  'GET /admin/program/edit':   'private/program/edit',


  'GET /admin/typeuser/create': 'private/typeuser/create',
  'GET /admin/typeuser/list':   'private/typeuser/list',
  'GET /admin/typeuser/edit':   'private/typeuser/edit',



// ----------------- POST -------------------------

'POST /project/create': {
  controller: 'PrivateController',
  action: 'createProject'
},
'POST /project/edit': {
  controller: 'PrivateController',
  action: 'editProject'
},
'POST /project/delete': {
  controller: 'PrivateController',
  action: 'deleteProject'
},


'POST /admin/user/create': {
  controller: 'PrivateController',
  action: 'createUser'
//    view: 'private/catalogs/users/create'
},
'POST /admin/user/edit': {
  controller: 'PrivateController',
  action: 'editUser'
  //view: 'private/catalogs/users/list'
},
'POST /admin/user/delete': {
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
'POST /program/delete': {
  controller: 'PrivateController',
  action: 'deleteProgram'
},



'POST /typeuser/create': {
  controller: 'PrivateController',
  action: 'createTypeuser'
},
'POST /typeuser/edit': {
  controller: 'PrivateController',
  action: 'editTypeuser'
},
'POST /typeuser/delete': {
  controller: 'PrivateController',
  action: 'deleteTypeuser'
},

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
