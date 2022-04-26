const {randomHash} = require('../../services/hash')
const tokenService = require('../../services/token')

exports.init = async (req, res) => {
    const token = tokenService.findToken(req);
    if(!token) {
      return res.json({
        success: false,
        message: 'token is absent!'
      })
    }
    try {
      const payload = tokenService.verify(token);
    } catch (error) {
      return res.json({
        success: false,
        message: 'token is invalid!'
      })
    }

    return res.json({
      success: true,
      message: 'user logged in safely:)'
    })
}