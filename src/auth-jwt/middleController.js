/* 
    Importação do modulo jsonwebtoken

        Essa é uma funcionalidade do tipo middle que pode ser colocada no express,
        Os middles tem a funcão de verificar o dado que é recebid,o antes de executar 
    uma rota.
        Nesse caso, se não for passado um cabeçalho (req.headers) correto ele não 
    deixa continuar para a proxima rota, parando o fluxo de execução.
 */
const jwt = require('jsonwebtoken');

exports.middle = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) return res.status(401).json({ 
        auth: false, message: 'Nenhum token foi encontrado.' 
    });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ 
            auth: false, 
            message: 'Failed to authenticate token.' 
        });
    
      req.userId = decoded.id;
      next();
    });
}
