const  { 
    ReasonPhrases, 
    StatusCodes, 
    getReasonPhrase, 
    getStatusCode, 
} =  require('http-status-codes');

const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(StatusCodes.FORBIDDEN).send("A token is required for authentication");
    }
    
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(StatusCodes.UNAUTHORIZED).send("Invalid Token");
    }
    
    return next();
};

module.exports = verifyToken;