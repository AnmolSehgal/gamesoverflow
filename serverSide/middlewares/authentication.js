const jwt = require('jsonwebtoken');

module.exports.auth = function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log(req.headers);
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err,user) => {

    if (err) return res.sendStatus(403)
    req.user = user.username;
    next();
    })
}