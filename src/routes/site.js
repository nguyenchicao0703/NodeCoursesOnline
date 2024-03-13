const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.searchGET);
router.post('/search', siteController.searchPOST);
router.get('/', siteController.index);

module.exports = router;
