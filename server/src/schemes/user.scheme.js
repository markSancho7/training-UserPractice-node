const { mongoose } = require('mongoose');
const UserScheme = mongoose.Schema(
  {
    _id: String,
    name: String,
    email: String,
    active: Boolean,
  },
  {
    colection: 'users',
  }
);

module.exports = UserScheme;
