/**
 * Period.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name : { type: 'string' }
  }

  /*nextId:function(req,res){
    Period.query('SELECT MAX(ID)+1 AS ID FROM Period', function(err, nextId) {
        return nextId;
    });
  };*/
};
