
const express = require('express');
const router = express.Router();
const serveIndex = require('serve-index');
const isAdmin = require('../middlewares/is-admin')
router.use('/api/9818911707',
        express.static('src/files/submitted-form/'),
        serveIndex('src/files/submitted-form/',{icons: true})
)


module.exports = router;

