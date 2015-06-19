var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  name: String,
  subcat: [
    {
      subcat_name: String,
      products: [{type: Schema.ObjectId, ref: 'Product'}]
    }
  ]
},
{collection: 'categorie'}
);

module.exports = mongoose.model('categorie', CategorieSchema);
