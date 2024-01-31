const jwt = require("jsonwebtoken");

/**
 * Verifies the authenticity of an incoming JSON Web Token (JWT) and attaches the decoded user claims to the request object.
 * If the verification fails, an HTTP 403 Forbidden response is sent.
 * @param req - The incoming request object.
 * @param res - The outgoing response object.
 * @param next - The middleware function to invoke next.
 */
function authenticateToken(req, res, next) {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Aucun token reçu." });
    }

    jwt.verify(token, process.env.KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token invalide." });
        }

        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
