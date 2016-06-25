/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'USER',

  attributes: {
    /*id: {
        type: 'integer',
        required: true,
        autoIncrement: true,
        primaryKey: true
    },*/
    name : {
      type: 'string',
      required: true
    },
    email : {
      type: 'string',
      required: true
    },
    password : {
      type: 'string',
      required: true
    },
    typeuser : {
      type: 'integer',
      required: true
     },
     date:  {
       type: 'date',
       required: true
    }
  }
};
