const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let User = new Schema({
  name: String,
  dob: String,
  email: String,
  phone: {unique : true,type:String},
  gender: String,
  nationality: String,
  address1: String,
  address2: {
    type: String,
    default: ""
  },
  city: String,
  state: String,
  code: String
});

let UserModel = mongoose.model("User", User);

module.exports = UserModel;
