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
    res.view('private/project/list');
	},
  editProject: function(req,res){
    res.view('private/project/edit');
	},


  createUser: function(req,res){
  },
  listUsers: function(req,res){
	},
  editUser: function(req,res){
	},


  listPrograms: function(req,res){
	},
  createProgram: function(req,res){
	},
  editProgram: function(req,res){
	},


  createTypeuser: function(req,res){
	},
  listTypeusers: function(req,res){
	},
  editTypeuser: function(req,res){
	},

};
