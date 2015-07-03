var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  subcat: String,
  tag: String,
  price: Number,
  description: String,
  picture: String,
  color: String,
  size: [
    {
      size_name: String,
      quantity: Number
    }
  ]
},
{
  collection: 'product'
});

module.exports = mongoose.model('product', ProductSchema);
