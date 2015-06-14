var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  login: String,
  password: {type: String, required: true},
  role: String,
  tel: String,
  email: {type: String, required: true, unique: true},
  name : {type: String, required: true},
  firstname: {type: String, required: true},
  address: {type: String, required: true},
  zipcode: {type: String, required: true},
  city: {type: String, required: true},
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
