const logger = (req, res, next) => {
    console.log(`Method: ${req.method}\n URL: ${req.url}`);
    next();
};

module.exports = logger;
