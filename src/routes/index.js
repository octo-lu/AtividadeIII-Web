import express from "express"
import participante from "./participantesRoutes.js"
import evento from "./eventoRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Bem vindo ao node.js')
    })
    app.use(express.json(), participante, evento)
}

export default routes