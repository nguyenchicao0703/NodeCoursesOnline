class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
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
