function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); 
}
function authenticate(req, res, next) {
    const token = req.headers['authorization'];
    if (token && token === 'Bearer token123') {
        next(); 
    } else {
        res.status(401).json({ message: 'No autorizado' }); 
    }
}
function validateUser(req, res, next) {
    const { username, password } = req.body;
    if (username && password) {
        next(); 
    } else {
        res.status(400).json({ message: 'Faltan datos de usuario' });
    }
}

module.exports = { logger, authenticate, validateUser };