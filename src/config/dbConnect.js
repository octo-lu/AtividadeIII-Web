import mongoose, {mongo} from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

async function databaseConnect(){
    console.log(process.env.DB_CONNECTION_STRING)
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
}

export default databaseConnect