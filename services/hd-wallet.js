const bipConstants = require('bip44-constants');
const hdkey = require('hdkey');
const bip39 = require('bip39');

class Wallet {
    constructor() {
        const seed = bip39.mnemonicToSeedSync(process.env.MNEMONIC).toString("hex");
        this.root = hdkey.fromMasterSeed(seed);
    }

    getWallet({ currency, derivation }) {
        const bipCurrency = bipConstants.findIndex(val => val.find(data => data === currency));
        if(bipCurrency === -1) return false;
        const location = this.root.derive(applyParams(bipCurrency, derivation));
        return {
            public: location.publicKey.toString('hex'),
            private: location.privateKey.toString('hex')
        };
    }
}

function applyParams(currency, derivation) {
    return `m/44'/${currency}'/0'/${derivation}'/0`;
}

/*
* Get available currencies
* */
function getCurrencies() {
    return bipConstants;
}

module.exports = {
    Wallet,
    getCurrencies
}
