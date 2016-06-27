
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
     },

    catAuthor: function(req, res){
       Project.count().exec(function countCB(error, count) {
     	  	Project.find()
          .paginate({page: 1, limit: 5})
          .exec(function(err,projects){
       			if(err){
       				return res.json(err);
       			}
            console.log("Count projects->"+count);
            res.view('inicio/cat-author', {
              project: projects, page:1, letter: "", count: count
            });
     		  });
        });
      },


     searchAuthor: function(req, res){
       var page = req.param("p");
       var letter = req.param("q");
       console.log("Busanco projectos por catalogo autor>>>"+req.param("q"));
       //, skip: 10, limit: 5, sort: 'author DESC'
       if (letter){
         Project.count().exec(function countCB(error, count) {
           Project.find({
             or : [
                     {author1: { 'like': letter.toUpperCase()+'%' }},
                     {author2: { 'like': letter.toUpperCase()+'%' }},
                     {author3: { 'like': letter.toUpperCase()+'%' }}
             ], sort: 'author1 ASC'
           }).paginate({page: page, limit: 5}).exec(function (err,projects){ //.paginate({page: 1, limit: 2})
             if(err)
               return res.json(err);
             res.view('inicio/cat-author', {
               project: projects, page: page, letter: letter, count: count
             });
           });
         });
        }else{
          Project.count().exec(function countCB(error, count) {
            Project.find()
              .paginate({page: page, limit: 5})
              .exec(function(err,projects){
           			if(err){
           				return res.json(err);
           			}
                res.view('inicio/cat-author', {
                  project: projects, page:page, letter: "", count: count
                });
         		});
          });
        }
     },

     catAsesor: function(req, res){
       Project.count().exec(function countCB(error, count) {
     	  	Project.find()
          .paginate({page: 1, limit: 5})
          .exec(function(err,projects){
       			if(err){
       				return res.json(err);
       			}
            console.log("Count projects>"+count);
            res.view('inicio/cat-asesor', {
              project: projects, page:1, letter: "", count: count
            });
     		  });
        });
      },


     searchAsesor: function(req, res){
       var page = req.param("p");
       var letter = req.param("q");
       console.log("Busanco projectos por catalogo autor>>>"+req.param("q"));
       //, skip: 10, limit: 5, sort: 'author DESC'
       if (letter){
         Project.count( {asesor: { 'like': letter.toUpperCase()+'%' }}).exec(function countCB(error, count) {
           Project.find({
             or : [
                     {asesor: { 'like': letter.toUpperCase()+'%' }}
             ], sort: 'asesor ASC'
           }).paginate({page: page, limit: 5}).exec(function (err,projects){ //.paginate({page: 1, limit: 2})
             if(err)
               return res.json(err);
             res.view('inicio/cat-asesor', {
               project: projects, page: page, letter: letter, count: count
             });
           });
         });
        }else{
          Project.count().exec(function countCB(error, count) {
            Project.find()
              .paginate({page: page, limit: 5})
              .exec(function(err,projects){
           			if(err){
           				return res.json(err);
           			}
                res.view('inicio/cat-asesor', {
                  project: projects, page:page, letter: "", count: count
                });
         		});
          });
        }
     },

     catTitle: function(req, res){
       Project.count().exec(function countCB(error, count) {
     	  	Project.find()
          .paginate({page: 1, limit: 5})
          .exec(function(err,projects){
       			if(err){
       				return res.json(err);
       			}
            console.log("Count projects>"+count);
            res.view('inicio/cat-title', {
              project: projects, page:1, letter: "", count: count
            });
     		  });
        });
      },


     searchTitle: function(req, res){
       var page = req.param("p");
       var letter = req.param("q");
       console.log("Busanco projectos por catalogo autor>>>"+req.param("q"));
       //, skip: 10, limit: 5, sort: 'author DESC'
       if (letter){
         Project.count({title: { 'like': letter.toUpperCase()+'%' }}).exec(function countCB(error, count) {
           Project.find({
             or : [
                     {title: { 'like': letter.toUpperCase()+'%' }}
             ], sort: 'title ASC'
           }).paginate({page: page, limit:5}).exec(function (err,projects){ //.paginate({page: 1, limit: 2})
             if(err)
               return res.json(err);
             res.view('inicio/cat-title', {
               project: projects, page: page, letter: letter, count: count
             });
           });
         });
        }else{
          Project.count().exec(function countCB(error, count) {
            Project.find()
              .paginate({page: page, limit: 5})
              .exec(function(err,projects){
           			if(err){
           				return res.json(err);
           			}
                res.view('inicio/cat-title', {
                  project: projects, page:page, letter: "", count: count
                });
         		});
          });
        }
  },

  catProgram: function(req, res){
    Program.find().exec(function (err,programs){
      Project.count().exec(function countCB(error, count) {
         Project.find()
         .paginate({page: 1, limit: 8})
         .exec(function(err,projects){
           if(err){
             return res.json(err);
           }
           console.log("Count projects>"+count);
           res.view('inicio/cat-prog', {
             project: projects, page: 1, programs: programs, count: count, pr: ""
             //project: projects, page:1, letter: "", count: count
           });
         });
       });
     });
   },

  searchProgram: function(req, res){
    var page = req.param("p");
    var program = req.param("q");
    console.log("-->"+program);
    if (!program){
        console.log("-->IF");
        Program.find().exec(function (err,programs){
          Project.count().exec(function countCB(error, count) {
            Project.find({sort: 'title ASC' }).paginate({page: page, limit:8}).exec(function (err,projects){ //.paginate({page: 1, limit: 2})
              if(err) return res.json(err);
              res.view('inicio/cat-prog', {
                project: projects, page: page, programs: programs, count: count, pr: ""
              });
            });
          });
        });
    }else{
      console.log("-->ELSE");
      Program.find().exec(function (err,programs){
        Project.count({program: program}).exec(function countCB(error, count) {
          console.log("Count:"+count);
          Project.find({program: parseInt(program), sort: 'title ASC' }).paginate({page: page, limit:8}).exec(function (err,projects){ //.paginate({page: 1, limit: 2})
            if(err) return res.json(err);
            res.view('inicio/cat-prog', {
              project: projects, page: page, programs: programs, count: count, pr: program
            });
          });
        });
      });
    }
  },
  searchStatus: function(req, res){
    var page = req.param("p");
    var status = req.param("q");
    console.log("-->"+status);
    if (!status){
        console.log("-->IF");
          Project.count().exec(function countCB(error, count) {
            Project.find({sort: 'title ASC' }).paginate({page: page, limit:8}).exec(function (err,projects){ //.paginate({page: 1, limit: 2})
              if(err) return res.json(err);
              res.view('inicio/cat-status', {
                project: projects, page: page, count: count, pr: ""
              });
            });
          });
    }else{
      console.log("-->ELSE");
        Project.count({status: status}).exec(function countCB(error, count) {
          console.log("Count:"+count);
          Project.find({status: parseInt(status), sort: 'title ASC' }).paginate({page: page, limit:8}).exec(function (err,projects){ //.paginate({page: 1, limit: 2})
            if(err) return res.json(err);
            res.view('inicio/cat-status', {
              project: projects, page: page, count: count, pr: status
            });
          });
        });
    }
  },
  catSearch: function(req, res){
     console.log("Vista de busqeudas-->");
      Project.count().exec(function countCB(error, count) {
         Project.find()
         .paginate({page: 1, limit: 5})
         .exec(function(err,projects){
           if(err){
             return res.json(err);
           }
           console.log("Count projects>"+count);
           res.view('inicio/search', {
             project: projects, page: 1, key: "", count: count, type:''
             //project: projects, page:1, letter: "", count: count
           });
         });
       });
   },

  search: function(req, res){
    var page = req.param("p");
    var key = req.param("key");
    var type = req.param("type");
    console.log("Busanco projectos por >>>"+key);
    //, skip: 10, limit: 5, sort: 'author DESC'
    if (key){

      switch (type) {
        case '3':
        Project.count({asesor: { 'like': '%'+key.toUpperCase()+'%' }}).exec(function countCB(error, count) {
          Project.find({
            or : [
                    {asesor: { 'like': '%'+key.toUpperCase()+'%' }}
            ], sort: 'asesor ASC'
          }).paginate({page: page, limit:5}).exec(function (err,projects){ //.paginate({page: 1, limit: 2})
            if(err)
              return res.json(err);
            res.view('inicio/search', {
              project: projects, page: page, key: key, count: count, type: type
            });
          });
        });
          break;
        case '1':
            Project.count({or : [
                    {author1: { 'like': key.toUpperCase()+'%' }},
                    {author2: { 'like': key.toUpperCase()+'%' }},
                    {author3: { 'like': key.toUpperCase()+'%' }}
                  ]
              }).exec(function countCB(error, count) {
              Project.find({
                    or : [
                            {author1: { 'like': key.toUpperCase()+'%' }},
                            {author2: { 'like': key.toUpperCase()+'%' }},
                            {author3: { 'like': key.toUpperCase()+'%' }}
                    ], sort: 'author1 ASC'
                  }).paginate({page: page, limit:5}).exec(function (err,projects){ //.paginate({page: 1, limit: 2})
                    if(err)
                      return res.json(err);
                    res.view('inicio/search', {
                      project: projects, page: page, key: key, count: count, type: type
                    });
                  });
                });
            break;
            default:
            Project.count({title: { 'like': '%'+key.toUpperCase()+'%' }}).exec(function countCB(error, count) {
              Project.find({
                or : [
                        {title: { 'like': '%'+key.toUpperCase()+'%' }}
                ], sort: 'title ASC'
              }).paginate({page: page, limit:5}).exec(function (err,projects){ //.paginate({page: 1, limit: 2})
                if(err)
                  return res.json(err);
                res.view('inicio/search', {
                  project: projects, page: page, key: key, count: count, type: type
                });
              });
            });
      }
     }else{
       Project.count().exec(function countCB(error, count) {
         Project.find()
           .paginate({page: page, limit: 5})
           .exec(function(err,projects){
             if(err){
               return res.json(err);
             }
             res.view('inicio/search', {
               project: projects, page:page, key: "", count: count, type: ""
             });
         });
       });
     }
}


};
