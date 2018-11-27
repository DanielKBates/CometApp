const mongoose = require("mongoose");
const db = require("../models");

var Schema = mongoose.Schema;


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb");

const userSeed = [
  {
    firstName: "John",
    lastName: "Robertson",
    userName: "Jrob65",
    password: "iCheatOnMyWife",
    email: "Jrob65@gmail.com"
  },
  {
    firstName: "Johnsaucerton",
    lastName: "Robertsonville",
    userName: "Jrob65000",
    password: "iCheatOnMyWifeForReal",
    email: "Jrob65000@gmail.com"
  },
  {
    firstName: "Wassy",
    lastName: "McGhee",
    userName: "wg22",
    password: "iCheatOnMyWifeSometimes",
    email: "wg22@gmail.com"
  },
  {
    firstName: "Pee",
    lastName: "Dingle",
    userName: "pDing",
    password: "iCheatOnMyWife",
    email: "pDing881@gmail.com"
  },
  {
    firstName: "Quincy",
    lastName: "Baker",
    userName: "qBake7",
    password: "iCheatOnMyWife",
    email: "qBake7@gmail.com"
  },
  {
    firstName: "Johnson",
    lastName: "Roberts",
    userName: "jRob01",
    password: "iCheatOnMyWifeInHotels",
    email: "jRob01@gmail.com"
  },
  {
    firstName: "Gertrude",
    lastName: "Wilson",
    userName: "GWill09",
    password: "iCheatOnMyDiet",
    email: "GWill09@gmail.com"
  },
  {
    firstName: "Rob",
    lastName: "Larsen",
    userName: "LRob21",
    password: "iCheatOnMyWifeAlot",
    email: "LRob21@gmail.com"
  },
  {
    firstName: "Sally",
    lastName: "Struthers",
    userName: "sloppy90",
    password: "iCheatOnMyMan",
    email: "sloppy90@gmail.com"
  },
  {
    firstName: "Patrick",
    lastName: "Beef",
    userName: "Pbeef61",
    password: "iCheatedOnMyWifeToday",
    email: "Pbeef61@gmail.com"
  }
  
];

// db.User
// .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

var User = mongoose.model("User", userSeed)
module.exports = User;