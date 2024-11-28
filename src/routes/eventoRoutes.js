import express from "express"
import eventoController from "../controllers/eventoController.js";

const routes = express.Router();

routes.get("/evento", eventoController.listarEventos)
routes.get("/evento/:id", eventoController.listarEventoById)
routes.post("/evento", eventoController.cadastrarEvento)
routes.put("/evento/:id", eventoController.patchEvento)
routes.put("/evento/adicionarParticipante/:id", eventoController.adicionarParticipante)
routes.delete("/evento/:id", eventoController.deleteEvento)

export default routes




