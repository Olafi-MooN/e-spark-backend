function home (req, res) {
    return res.json({
        server: true,
        documentação: "Para acessar a documentação acesse: http://" + req.rawHeaders[1] + "/doc",
        status: 'Ainda em desenvolvimento'
    })
}

export { home }