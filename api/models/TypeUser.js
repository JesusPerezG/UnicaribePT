/**
 * TypeUser.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'TypeUser',

  attributes: {
    id: {
        type: 'integer',
        required: true,
        autoIncrement: true,
        primaryKey: true
    },
    type : { type: 'string' },
    date: { type: 'date' },
    note : { type: 'string' }
  }
};
