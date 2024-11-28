import mongoose from 'mongoose'
import { participanteSchema } from './Participantes.js'

const eventoSchema = new mongoose.Schema({

    id:{type:mongoose.Schema.Types.ObjectId},
    titulo: {type:String, require:true},
    descricao: {type:String},
    data: {type:Date},
    local: {type:String},
    participantes: [ participanteSchema ]
})


const evento = mongoose.model('evento', eventoSchema)

export default evento