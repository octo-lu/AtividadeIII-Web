import express from "express"
import participanteController from "../controllers/participanteController.js";

const routes = express.Router();

routes.get("/participante", participanteController.listarParticipantes)
routes.get("/participante/:id", participanteController.listarParticipanteById)
routes.post("/participante", participanteController.cadastrarParticipante)
routes.put("/participante/:id", participanteController.patchParticipante)
routes.delete("/participante/:id", participanteController.deleteParticipante)

export default routes




