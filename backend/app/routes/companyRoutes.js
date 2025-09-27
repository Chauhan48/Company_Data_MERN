const companyRoutes = require('express').Router();

companyRoutes.get('/hi', (req, res) => {
    return res.send('hello');
})

module.exports = companyRoutes;