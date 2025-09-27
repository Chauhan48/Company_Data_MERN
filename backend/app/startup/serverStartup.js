const cors = require('cors');
const companyRoutes = require('../routes/companyRoutes');

const serverStartup = async (app) => {
    app.use(require('express').json());

    app.use(cors({
        origin: [
            'http://localhost:5173'
        ],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }));
    app.use(require('express').urlencoded({ extended: true }));
    app.use('/api', companyRoutes);


}

module.exports = serverStartup;