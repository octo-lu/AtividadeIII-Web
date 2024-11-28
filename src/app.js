import express from 'express'
import databaseConnect from './config/dbConnect.js'
import routes from './routes/index.js'

const app = express()

routes(app)

const connection = await databaseConnect()

connection.on("erro", (erro) => {
    console.log(erro)
})

connection.once("open", () =>{
    console.log("conexao com o banco de dados feita com sucesso")
})


export default app