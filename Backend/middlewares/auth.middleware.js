const jwt = require('jsonwebtoken')

const API_Key = process.env.API_Key;

const authenticate = (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header missing or invalid' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.API_Key);
        console.log(decoded,"decoded");
        
        req.user = decoded; // e.g., userId, role, etc.
        next(); // Allow access
    }
   catch (err) {
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Token expired' });
  } else if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Invalid token' });
  } else {
    return res.status(401).json({ message: 'Authentication failed' });
  }
}
}

module.exports = {authenticate}