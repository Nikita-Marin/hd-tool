const hdService = require('../services/hd-wallet');
const wallet = new hdService.Wallet();

async function getWallet(req, res) {
    try {
        return res.send(await wallet.getWallet(req.body));
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

async function getCurrencies(req, res) {
    try {
        return res.send(await hdService.getCurrencies());
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

module.exports = {
    getWallet,
    getCurrencies
};
