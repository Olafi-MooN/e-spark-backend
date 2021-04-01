const login_bd = require('../model/selectTableLogin');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {

    const { username, password } = req.body;

    const result = await login_bd.authenticate('users', username, password);

    if (!result) 
        return res.status(301).json({
            status: false,
            messageSucess: 'O usuário ou a senha esta incorreta'
        })

    return res.status(200).json({
        status: true,
        token: jwt.sign({result}, process.env.SECRET, { expiresIn: 300 }),
        messageSucess: 'Usuário e senha corretos'
    });
    
}

exports.logout = async (req, res) => {
    res.json({ auth: false, token: null });
}