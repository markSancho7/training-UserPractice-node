const { mongoose } = require('mongoose');
const UserScheme = mongoose.Schema(
  {
    name: String,
    email: String,
    userName: String,
    active: Boolean,
  },
  {
    colection: 'users',
  }
);

module.exports = UserScheme;
