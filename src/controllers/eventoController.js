import evento from "../models/Evento.js";
import { participante } from "../models/Participantes.js"


class eventoController{

    static async listarEventos(req,res){
        try{
            const listaEvento = await evento.find({});
            res.status(200).json(listaEvento)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro interno no servidor`})
        }
    }

    static async listarEventoById(req,res){
        try{
            const id = req.params.id
            const eventoEncontrado = await evento.findById(id);
            res.status(200).json(eventoEncontrado)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro na busca por id`})
        }
    }
    
    static async cadastrarEvento(req,res){
        const novoEvento = req.body
        const { titulo, descricao, data, local, participantes } = req.body
        const participanteList = []
        let participanteEncontrado
        let eventoCompleto 
        let eventoCadastro
        var size = Object.keys(req.body.participantes)
        console.log(size.length)
        try{
            
            console.log("aqui")
            const event = await evento.create({ titulo, descricao, data:new Date(data), local})
            console.log(event)
            res.status(201).json({message: "Success", event})
            

            //res.status(200).json({message: "Evento cadastrado com sucesso", evento: eventoCompleto})
        } catch(error){
            res.status(500).json({message:`${error.message} Erro no cadastro`})
        }
    }

    static async adicionarParticipante(req,res){

        var size = Object.keys(req.body.participantes)
        const eventoId = req.body.id

        console.log(size.length)

            const participanteList = []
            for(let i = 0; i < size.length; i++){

                console.log(req.body.participantes[i])

                const participanteEncontrado = await participante.findById(req.body.participantes[i])

                console.log(participanteEncontrado)
                
                participanteList.push(participanteEncontrado)
                
            }
            console.log(participanteList)
        const event = await evento.findByIdAndUpdate(req.body.id, {participantes: participanteList})
       res.status(201).json({message: "Successo adicionando um participante", event})
    }

    static async patchEvento(req,res){
        try{
            const id = req.params.id
            const eventoPatch = await evento.findByIdAndUpdate(id, req.body);
            res.status(200).json(eventoPatch)
        } catch(error){
            res.status(500).json({message:`${error.message} Erro na atualização por id`})
        }
    }

    static async deleteEvento(req,res){
        try{
            const id = req.params.id
            await evento.findByIdAndDelete(id);
            res.status(200).json({message: "Evento apagado com sucesso"})      
         } catch(error){
            res.status(500).json({message:`${error.message} Erro na exclusão por id`})
        }
    }


}
export default eventoController