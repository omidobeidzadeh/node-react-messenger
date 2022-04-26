const authRouter = require('./components/auth/authRouter');
const initRouter = require('./components/init/initRouter');

module.exports = (app) => {
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/init', initRouter);
} 