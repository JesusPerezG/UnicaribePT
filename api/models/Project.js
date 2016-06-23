/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title : { type: 'string' },
    asesor : { type: 'string' },
    program : { type: 'string' },
    period : { type: 'string' },
    autores : { type: 'string' },
    date:  { type: 'date' }
  }
};
