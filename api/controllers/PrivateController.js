/**
 * PrivateController
 *
 * @description :: Server-side logic for managing Privates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

		createProject: function(req,res){
			var project = req.param("Project");
			console.log("projectproject--->"+project);
			//Equipo.query('select max()SELECT MAX(ID)+1 AS ID FROM UC_EQUIPO', function(err, nextId) {
				Project.create({title: project.title, asesor: project.asesor, program: project.program,
							period: project.period, author1: project.author1, author2: project.author2,
							author3: project.author3, description: project.description, descriptionall: project.descriptionall, date: new Date(), status: project.status
				 }).exec(function (err,project){
						if(err)
							res.json(err);
						else{
								res.redirect('/admin/project/list');
						}
				});
			//});
		},

		/** PROYECTOS **/
		editProject: function(req,res){
			var project = req.param("Project");			
			Project.update({ id : project.id} ,{id : project.id,
						title: project.title, asesor: project.asesor, program: project.program,
						period: project.period, author1: project.author1, author2: project.author2,
						author3: project.author3,
						description: project.description,
						descriptionall: project.descriptionall,
						date: new Date(), status: project.status
			 }).exec(function (err,project){
					if(err)
						res.json(err);
					res.redirect('/admin/project/list');
			});
		},

		deleteProject: function(req,res){
			var id = req.param("id");
			Project.query('delete from project where id='+req.param("id"), function(err, results) {
        if (err) return res.serverError(err);
        res.redirect('/admin/project/list');
      });
		},

		/** USERS **/
		createUser: function(req,res){
			var user = req.param("User");
			console.log(user.password+"-"+user.password_confirmation);
			if(user.password == user.password_confirmation){
				console.log("<<coinciden las contraseñas>>");
				User.create({name: user.first_name + " " + user.last_name,
									email: user.email, password: user.password,
									typeuser: 1,
									date: new Date()
				 }).exec(function (err,user){
						if(err)
							res.json(err);
						else{
								res.redirect('/admin/user/list');
						}
				});
			}else {
				console.log("<<No coinciden las contraseñas>>");
				res.redirect('/admin/user/create');
			}
		},
		editUser: function(req,res){
			var user = req.param("User");
			User.update({ id : user.id},{
						id : user.id,
						name:user.name,
						email: user.email,
						password: user.password
					}).exec(function (err,result){
				if(err)
					res.json(err);
					res.redirect('/admin/user/list');
			 });
		},
		deleteUser: function(req,res){
			var id = req.param("id");
			User.query('delete from user where id='+id, function(err, results) {
        if (err) return res.serverError(err);
        res.redirect('/admin/user/list');
      });
		},



		/** CATALOGOS **/
		createProgram: function(req,res){
			var name = req.param("name");
			Program.create({name: name, date: new Date()}).exec(function (err,result){
					if(err)
						res.json(err);
					res.redirect('/admin/program/list');
			});
		},
		editProgram: function(req,res){
			var id = req.param("id");
			var name = req.param("name");
			Program.update({ id : id},{
						id : id,
						name:name}).exec(function (err,result){
				if(err)
					res.json(err);
					res.redirect('/admin/program/list');
			 });
		},
		deleteProgram: function(req,res){
			var id = req.param("id");
			Program.query('delete from program where id='+id, function(err, results) {
        if (err) return res.serverError(err);
        res.redirect('/admin/program/list');
      });
		},


		/** CATALOGOS **/
		createPeriod: function(req,res){
			var name = req.param("name");
			Period.create({name: name, date: new Date()}).exec(function (err,result){
					if(err)
						res.json(err);
					res.redirect('/admin/period/list');
			});
		},
		editPeriod: function(req,res){
			var id = req.param("id");
			var name = req.param("name");
			Period.update({ id : id},{
						id : id,
						name:name}).exec(function (err,result){
				if(err)
					res.json(err);
					res.redirect('/admin/period/list');
			 });
		},
		deletePeriod: function(req,res){
			var id = req.param("id");
			Period.query('delete from period where id='+id, function(err, results) {
				if (err) return res.serverError(err);
				res.redirect('/admin/period/list');
			});
		},



	/*	createTypeuser: function(req,res){
			var type = req.param("type");
			var note = req.param("note");
			TypeUser.create({type: type, note: note, date: new Date()}).exec(function (err,result){
					if(err)
						res.json(err);
					res.redirect('/admin/typeuser/list');
			});
		},
		editTypeuser: function(req,res){
			var id = req.param("id");
			var name = req.param("name");
			TypeUser.update({ id : id},{ id : id, type: type, note: note }).exec(function (err,result){
				if(err)
					res.json(err);
					res.redirect('/admin/typeuser/list');
			 });
		},
		deleteTypeuser: function(req,res){
			var id = req.param("id");
			TypeUser.query('delete from TypeUser where id='+id, function(err, results) {
        if (err) return res.serverError(err);
        res.redirect('/admin/typeuser/list');
      });
		}*/

};
