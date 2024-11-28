import {participante} from "../models/Participantes.js";

class participanteController{

    static async listarParticipantes(req,res){
        try{
            const listaParticipantes = await participante.find({});
            res.status(200).json(listaParticipantes)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro interno no servidor`})
        }
    }

    static async listarParticipanteById(req,res){
        try{
            const id = req.params.id
            const participanteEncontrado = await participante.findById(id);
            res.status(200).json(participanteEncontrado)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro na busca por id`})
        }
    }
    
    static async cadastrarParticipante(req,res){
        try{
            const participanteCadastro = await participante.create(req.body);
            res.status(200).json({message: "Participante cadastrado com sucesso", participante: participanteCadastro})
        } catch(error){
            res.status(500).json({message:`${error.message} Erro no cadastro`})
        }
    }

    static async patchParticipante(req,res){
        try{
            const id = req.params.id
            const participantePatch = await participante.findByIdAndUpdate(id, req.body);
            res.status(200).json(participantePatch)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro na atualização por id`})
        }
    }

    static async deleteParticipante(req,res){
        try{
            const id = req.params.id
            await participante.findByIdAndDelete(id);
            res.status(200).json({message: "Participante apagado com sucesso"})      
         } catch(error){
            res.status(500).json({message:`${error.message} Erro na exclusão por id`})
        }
    }


}
export default participanteController