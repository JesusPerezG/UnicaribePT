/**
 * ApplicationController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index:function(req,res){
		return res.redirect('/');
	},

	listProgram: function(req, res){
      console.log("Consultando programas");
	  	Program.find().exec(function(err,programs){
  			if(err){
  				return res.json(err);
  			}
  			return res.json(programs);
		  });
   }
};
