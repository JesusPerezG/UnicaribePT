module.exports = {

  index:function(req,res){
    res.view('index');
	},

  changeEn: function(req,res){
    res.setLocale('en');
    res.view('index');
	},

  changeEs: function(req,res){
    res.setLocale('es');
    res.view('index');
	}

};
