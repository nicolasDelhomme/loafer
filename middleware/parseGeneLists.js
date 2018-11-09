function parseGeneLists(req, res, next) {

    if (! req.body.regex) {
        req.body.testSet = req.body.testSet.replace(',', ' ').split(/\s+/g);
        if (req.body.customBackground) {
            req.body.customBackground = req.body.customBackground.replace(',', ' ').split(/\s+/g);
        }
        return next();
    } else {
        let regex = new RegExp(req.body.regex, 'g');
        req.body.testSet = req.body.testSet.match(regex);
        if (req.body.customBackground) {
            req.body.customBackground = req.body.customBackground.match(regex);
        }
        return next();
    }
}

module.exports = parseGeneLists;