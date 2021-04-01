const insert_bd = require('../model/insertTable');

exports.insert = async (req, res) => {

    const { first_name, username, password } = req.body;

    const result = await insert_bd.insert('users', first_name, username, password);

    if(!result) {
        return res.json({
            status: false,
            messageSucess: 'Usuário NÃO disponível'
        });
    }
    return res.json({
        status:  true,
        messageSucess: 'Usuário inserido no banco de dados'
    });
}