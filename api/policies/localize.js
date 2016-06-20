
module.exports = function(req, res, next) {
   console.log("localize");
   res.setLocale('en');
   next();

};
