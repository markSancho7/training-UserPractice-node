const { mongoose } = require('mongoose');
const UserScheme = mongoose.Schema(
  {
    name: String,
    email: String,
    userName: String,
    password: String,
    active: Boolean,
    sex: String,
    routeImg: String,
  },
  {
    colection: 'users',
  }
);

module.exports = UserScheme;
