module.exports = {

  createProject:function(req,res){
    res.view('index');
	},

  listProjects: function(req,res){
    res.setLocale('en');
    res.view('index');
	},
  editProject: function(req,res){
    res.setLocale('es');
    res.view('index');
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
