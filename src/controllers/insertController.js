const insert_bd = require('../model/insertInTableIfNotExists');

exports.insert = async (req, res) => {
    const { first_name, username, password } = req.body;

    const arrayNameAttributes = [
        'first_name',
        'username',
        'password'
    ]

    const arrayValueAttributes = [
        first_name,
        username,
        password
    ]

    const result = await insert_bd('users', 'username', username, arrayNameAttributes, arrayValueAttributes);

    if (!result) {
        return res.json({
            status: false,
            messageSucess: 'Já existe um usuário com esse username'
        });
    }
    return res.json({
        status: true,
        messageSucess: 'Usuário inserido no banco de dados'
    });
}