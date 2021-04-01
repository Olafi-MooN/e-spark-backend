const select_bd = require('../model/selectTable');

exports.viewUser = async (req, res) => {
    const result = await select_bd.select('users', '*');

    return res.json({
        status: false,
        data: result,
        messageSucess: 'Busca concluída'
    });
}