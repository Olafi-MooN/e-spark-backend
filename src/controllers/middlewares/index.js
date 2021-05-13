import { verifyToken } from '../../token/index.js';
import { config } from 'dotenv';

config();

function middlewareJWT(req, res, next) {
    const token = req.headers['x-access-token'];

    if (!token) return res.status(401)
        .json({ auth: false, message: 'Não foi passado nenhu token' });

    const verify = verifyToken(token);

    if (verify?.auth === false) {
        return res.status(500).json({ auth: false, message: 'Failed to authenticate token.', token });
    }   

    next();
}

export { middlewareJWT }