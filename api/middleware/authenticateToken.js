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

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Aucun token reçu." });
    }

    const split = token.split(" ")[1];

    jwt.verify(split, process.env.KEY, { algorithm: "HS256" }, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: "Token invalide.", token: token });
        }
        req.userId = decoded.userId;
        next();
    });
}

module.exports = authenticateToken;
