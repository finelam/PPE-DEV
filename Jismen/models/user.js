var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  login: String,
  password: String,
  role: String,
  tel: String,
  email: String,
  name : String,
  firstname: String,
  address: String,
  zipcode: String,
  city: String,
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
  favorites: [Schema.Types.ObjectId],
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
