
module.exports = function(req, res, next) {
  res.setLocale(req.param('lang'));
  /*console.log(req.session.lang);
  if(req.session.lang != "undefined")
    res.setLocale(''+req.session.lang+'');
  else
    res.setLocale('es');
  //locale=req.param('lang');*/
   next();
};
