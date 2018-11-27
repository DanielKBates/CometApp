module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    
  });
  
  return User;
};
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   userName: { type: String, required: true },
//   password:  { type: String, required: true },
//   email:  { type: String, required: true }
// });
