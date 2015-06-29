var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  password: {type: String, required: true},
  role: String,
  tel: String,
  email: {type: String, required: true, unique: true},
  name : {type: String},
  firstname: {type: String},
  address: {type: String},
  zipcode: {type: String},
  city: {type: String},
  shipment: {
    shipment_address: String,
    shipment_zipcode: String,
    shipment_city: String
  },
  billing: {
    billing_address: String,
    billing_zipcode: String,
    billing_city: String
  },
  favorites: [{type: Schema.Types.ObjectId, ref: 'product'}],
  orders: [{
    date: Date,
    products: [Schema.Types.ObjectId],
    invoice: {
      invoice_id: Number,
      paid: Boolean
    }
  }]
},
{
  collection: 'user'
});

module.exports = mongoose.model('user', UserSchema);
