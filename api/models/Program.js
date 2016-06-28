// server/api/models/Post.js

module.exports = {
  schema: true,
  autoCreatedAt: true,
  autoUpdatedAt: false,
  tableName: 'Program',

  attributes: {
    /*id: {
        type: 'integer',
        required: true,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },*/
    name : { type: 'string' },
    date:  { type: 'date' }
  }
};
