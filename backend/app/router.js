const authRouter = require('./components/auth/authRouter')

module.exports = (app) => {
    app.use('/api/v1/auth', authRouter)
} 