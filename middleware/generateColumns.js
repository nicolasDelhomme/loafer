let conf = require('../conf.json');

function getEnrichmentTestType(enr, name) {
    for (var i = 0; i < enr.length; i++) {
        if (enr[i].name === name) {
            return(enr[i].test);
        }
    }
    return('generic');
}

function generateColumns(req, res, next) {
    var org;
    for (var i = 0; i < conf.org.length; i++) {
        if (conf.org[i].name === req.body.org) {
            org = conf.org[i];
        }
    }
    req.goferReq.cols = {};
    for (var i = 0; i < req.goferReq.body.target.length; i++) {
        let target = req.goferReq.body.target[i];
        let type = getEnrichmentTestType(org.enrichment, target);
        req.goferReq.cols[target] = type;
    }
    next();
}

module.exports = generateColumns;