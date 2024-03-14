const Course = require('../models/Course');

class SiteController {
    // [GET] /
    async index(req, res) {
        try {
            const result = await Course.find({});
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: 'ERROR' });
        }
    }

    // [GET] /search
    searchGET(req, res) {
        res.render('search');
    }

    // [POST] /search
    searchPOST(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
