const express = require('express');
const router = express.Router();
const serveIndex = require('serve-index');
const isAdmin = require ('../middlewares/is-admin');

router.use('/api/download-forms',express.static('src/submitted-form'),isAdmin,
    serveIndex('src/submitted-form',{icons: true})
    );


module.exports = router;