var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  author_id: {type: Schema.Types.ObjectId, ref: 'user'},
  product_id: {type: Schema.Types.ObjectId, ref: 'product'},
  date: Date,
  content: String
},
{collection: 'comment'}
);

module.exports = mongoose.model('comment', CommentSchema);
