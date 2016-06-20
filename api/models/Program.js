// server/api/models/Post.js

module.exports = {
  attributes: {
    //reltionship
      /*comments: {
          collection: 'comment',
          via: 'poster'
      },*/
    name : { type: 'string' }

  }
};
