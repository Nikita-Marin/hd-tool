const express = require('express');

const router = express.Router();

const hdController = require('../../controllers/hd-wallet');

exports.default = app => {
    app.use('/hd-wallet', router);

    router.post('/getWallet', hdController.getWallet);
    router.get('/getCurrencies', hdController.getCurrencies);
};
