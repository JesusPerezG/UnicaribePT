module.exports = {

  index:function(req,res){
    res.view('index');
    req.session.lang = "es";
	},

  changeEn: function(req,res){
    //res.setLocale('en');
    req.session.lang = "en";
    res.view('index');
	},

  changeEs: function(req,res){
    //res.setLocale('es');
    req.session.lang = "es";
    res.view('index');
	},

  login: function(req,res){
    var email = req.param("email");
    var pass = req.param("password");
    User.findOne({email:email, password: pass}).exec(function (err,user){
      if(err)
        return res.json(err);

      if(user){
          console.log("Method authenticate>>>>",user);
          req.session.authenticated = true;
          req.session.user = user;
          res.view('private/index',{'user': user, session: req.session});
      }else {
        res.view('login');
      }
    });

  },

  logout: function(req,res){
    req.session.authenticated = false;
    req.session.destroy(function(err) {
         res.redirect('/login');
    });
	}
};
