module.exports = {


  index:function(req,res){
    res.view('private/index');
  },
  createProject:function(req,res){
    Program.find().exec(function (err,programs){
      Period.find().exec(function (err,periods){
        if(err)
          return res.json(err);
        res.view('private/project/create', {
          programs: programs, periods: periods
        });
      });
    });
	},

  listProjects: function(req,res){
    Project.find().exec(function (err,projects){
      if(err)
        return res.json(err);
      res.view('private/project/list', {
        project: projects
      });
    });
	},
  editProject: function(req,res){
    var id = req.param("id");
    Project.findOne({id:id}).exec(function (err,result){
      Program.find().exec(function (err,programs){
        Period.find().exec(function (err,periods){
          if(err)
            return res.json(err);
          res.view('private/project/edit', { project: result,
            programs: programs, periods: periods
          });
        });
      });
    });
	},


  createUser: function(req,res){
    res.view('private/user/create');
  },
  listUsers: function(req,res){
    User.find().exec(function (err,result){
      if(err)
        return res.json(err);
      res.view('private/user/list', {
        user: result
      });
    });
	},
  editUser: function(req,res){
    var id = req.param("id");
    User.findOne({id:id}).exec(function (err,result){
      if(err)
        return res.json(err);
      res.view('private/user/edit', {
          user: result
      });
    });
	},


  listPrograms: function(req,res){
    Program.find().exec(function (err,result){
      if(err)
        return res.json(err);
      res.view('private/program/list', {
        program: result
      });
    });
	},
  createProgram: function(req,res){
    res.view('private/program/create');
	},
  editProgram: function(req,res){
    var id = req.param("id");
    Program.findOne({id:id}).exec(function (err,program){
      if(err)
        return res.json(err);
      res.view('private/program/edit', {
          program: program
      });
    });
	},


  listPeriods: function(req,res){
    Period.find().exec(function (err,result){
      if(err)
        return res.json(err);
      res.view('private/period/list', {
        period: result
      });
    });
	},
  createPeriod: function(req,res){
    res.view('private/period/create');
	},
  editPeriod: function(req,res){
    var id = req.param("id");
    Period.findOne({id:id}).exec(function (err,result){
      if(err)
        return res.json(err);
      res.view('private/period/edit', {
          period: result
      });
    });
	},

  /*listTypeusers: function(req,res){
    TypeUser.find().exec(function (err,result){
      if(err)
        return res.json(err);
      res.view('private/typeuser/list', {
        typeuser: result
      });
    });
	},
  createTypeuser: function(req,res){
    res.view('private/typeuser/create');
	},
  editTypeuser: function(req,res){
    var id = req.param("id");
    TypeUser.findOne({id:id}).exec(function (err,result){
      if(err)
        return res.json(err);
      res.view('private/typeuser/edit', {
          typeuser: result
      });
    });
	}*/


};
