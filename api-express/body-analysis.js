const bodyAnalysis = (req, res, next) => {
    res.json(req.body);
    next();
};

module.exports = bodyAnalysis;