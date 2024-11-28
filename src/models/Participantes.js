import mongoose from 'mongoose'

const participanteSchema = new mongoose.Schema({

    id: {type:mongoose.Schema.Types.ObjectId},
    nome: {type:String, require: true},
    curso: {type:String}

},{versionKey: false})

const participante = mongoose.model('participante', participanteSchema)

export { participante, participanteSchema };
