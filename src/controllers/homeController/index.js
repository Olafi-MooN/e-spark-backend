function home(req, res) {
    // #swagger.tags = ['/']
    // #swagger.description = 'Rota inicial da aplicação, apenas mostra o caminho para a documentação e indica se o servidor esta ligado. '

    /* 
        #swagger.responses[200] = {
            description: 'O servidor esta iniciado',
        } 
    */
    return res.status(200).json({
        server: true,
        documentação: "Para acessar a documentação acesse: http://" + req.rawHeaders[1] + "/doc",
        status: 'Ainda em desenvolvimento'
    })
}

export { home }