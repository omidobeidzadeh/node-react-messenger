const crypto = require("crypto");
const bcrypt = require('bcrypt')

exports.randomHash = (len = 10) => {
  return crypto.randomBytes(len).toString("hex");
};

exports.hashPassword = (password) => {
  return bcrypt.hashSync(password, 8)
}

exports.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}
