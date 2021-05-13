import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

function createToken(object) {
    var token = jwt.sign(object, process.env.JWT);
    return token;
}

function verifyToken(token) {
    var verify = jwt.verify(token, process.env.JWT, (err, decoded) => {
        if (err) {
            return {
                auth: false,
                message: 'Ocorreu um erro ao verificar o token',
                error: err,
            }
        }

        return {
            auth: true,
            message: 'Token verficado com sucesso',
            decoded
        }
    })
    return verify;
        
}

export { createToken, verifyToken }