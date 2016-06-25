/**
 * InicioController
 *
 * @description :: Server-side logic for managing Inicios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listProjects: function(req,res){
    Project.find(title).exec(function (err,projects){
      if(err)
        return res.json(err);
      res.view('inicio/proye', {
        project: projects
      });
    });
	},
};

