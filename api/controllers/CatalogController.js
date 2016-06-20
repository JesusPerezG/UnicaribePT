
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
   },
   listUsers: function(req, res){
 	  	User.find().exec(function(err,user){
   			if(err){
   				return res.json(err);
   			}
   			return res.json(user);
 		  });
    },
  listTypeUsers: function(req, res){
  	  	TypeUser.find().exec(function(err,typeUser){
    			if(err){
    				return res.json(err);
    			}
    			return res.json(typeUser);
  		  });
     }
};
