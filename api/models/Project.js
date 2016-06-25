/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  //connection: 'unicaribedb',
  tableName: 'project',

  attributes: {
    /*id: {
        type: 'integer',
        required: true,
        autoIncrement: true,
        primaryKey: true
    },*/
    title : { type: 'string' },
    asesor : { type: 'string' },
    program : { type: 'integer' },
    period : { type: 'integer' },
    author1 : { type: 'string' },
    author2 : { type: 'string' },
    author3 : { type: 'string' },
    description: { type: 'string' },
    descriptionall: { type: 'string' },
    date:  { type: 'date' }
  }
};
