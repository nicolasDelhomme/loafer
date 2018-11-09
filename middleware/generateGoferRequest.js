let conf = require('../conf.json');
let urljoin = require('url-join');

function generateGoferRequest(req, res, next) {

    console.log(req.body);

    var suffix;
    for (var i = 0; i < conf.org.length; i++) {
        if (conf.org[i].name === req.body.org) {
            suffix = conf.org[i].uri;
        }
    }

    let body = {
        'genes': req.body.testSet,
        'target': Array.isArray(req.body.target) ? req.body.target : [req.body.target],
        'include_defs': false,
        'include_names': true
    };

    if (req.body.premadeBackground) {
        body.background = req.body.premadeBackground;
    } else if (req.body.customBackground) {
        body.background = req.body.customBackground;
    }

    if (req.body.alpha) {
        body.alpha = parseFloat(req.body.alpha);
    }


    if (conf.cert && conf.key && conf.chain) {
        let url = urljoin("https://", conf.ip + ":" + conf.port, suffix, 'enrichment');
        req.goferReq = {
            body: body,
            url: url
        };
        return next();
    } else {
        let url = urljoin("http://", conf.ip + ":" + conf.port, suffix, 'enrichment');
        req.goferReq = {
            body: body,
            url: url
        };
        return next();
    }

}

module.exports = generateGoferRequest;