var jwt = require('jsonwebtoken')
function createToken(data) {
  return jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: data
  }, 'xx');
}
// 验证token
function verifyToken(token) {
  return new Promise(function(resolve, reject) {
    try {
      var decoded = jwt.verify(token, 'xx');
      console.log('token', decoded)
      resolve(decoded.data)
    } catch(err) {
      reject(err)
    }
  })
}

module.exports = {
  createToken,
  verifyToken
}
