const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authentication Failed' })
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.userID = decodedToken.userID;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication Failed' })
    }
}

module.exports = authMiddleware;