const express = require('express');

const { Router } = express;

const counterRouter = require('./routes/hd-key').default;

exports.default = () => {
    const app = Router();

    /* Register new routers here */
    counterRouter(app);

    return app;
};
