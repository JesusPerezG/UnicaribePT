/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  autoCreatedAt: true,
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
    title : { type: 'string', required: true },
    asesor : { type: 'string', required: true },
    program : { type: 'integer', required: true },
    period : { type: 'integer', required: true },
    author1 : { type: 'string', required: true },
    author2 : { type: 'string' },
    author3 : { type: 'string' },
    description: { type: 'string' },
    descriptionall: { type: 'string' },
    date:  { type: 'date', required: true },
    status: { type: 'integer', required: true }
  }
};
