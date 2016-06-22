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
  '/login': {
    view:"login"
  },
  '/logout': {
    controller: 'AppController',
    action: 'logout'
  },
  '/search': {
    view: 'private/proyects/create'
  },


  // Admin
  '/admin/proyects/create': {
    view: 'private/proyect/create'
  },
  '/admin/proyects/list': {
    view: 'private/proyect/list'
  },
  '/admin/proyects/edit': {
    view: 'private/proyect/edit'
  },



  '/admin/user/create': {
    view: 'private/catalogs/users/create'
  },
  '/admin/user/list': {
    view: 'private/catalogs/users/list'
  },
  '/admin/program/list': {
    view: 'inicio/catalogs/programs/list'
  },
  '/admin/program/create': {
    view: 'private/catalogs/programs/create'
  },
  '/admin/typeuser/list': {
    view: 'private/catalogs/typeUsers/list'
  },
  '/admin/typeuser/create': {
    view: 'private/catalogs/typeUsers/create'
  },

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
  '/catalogo':{
    view:'catalogo'
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
