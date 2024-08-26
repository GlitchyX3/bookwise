// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const bypassToken = process.env.BYPASS_TOKEN;
  const token = req.headers['authorization']?.split(' ')[1];

  if (token === bypassToken) {
    // Bypass authentication
    req.user = { id: 'bypass_user_id', name: 'Bypass User' };
    return next();
  }

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
