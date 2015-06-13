var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  author_id: String,
  product_id: String,
  date: Date,
  content: String
},
{collection: 'comment'}
);

module.exports = mongoose.model('comment', CommentSchema);
