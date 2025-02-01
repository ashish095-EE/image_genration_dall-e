import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDb from "./mongodb/connect.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({limit:'50mb'}));

app.get('/', async(req, res) =>{
    res.send('Hello from the the server!');
})

const startserver = async()=>{

    try {
        connectDb(process.env.MONGODB_URL);
        app.listen(5000,()=> console.log('server live on port at http://localhost:5000'))
    } catch (error) {
        console.error(error);
        
    }

    

}

startserver();