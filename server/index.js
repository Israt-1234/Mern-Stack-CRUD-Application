
import express from "express"
import mongoose  from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"
import cors from "cors"

const app = express();
app.use(bodyParser.json());   //json passing middle-ware
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 7000;
const MONGO_URL = process.env.MONGO_URL;
//connecting mongodb
mongoose
       .connect(MONGO_URL)
       .then(()=>{
        console.log("DB connected successfully.")
        app.listen(PORT, ()=>{
            console.log(`Server is runnig on port : ${PORT}`);
        });
       })
       .catch((error) => console.log(error));

       

app.use("/api", route);



//npm init 
//npm i dotenv
//npm i body-parser
//npm i express
//npm i mongoose
//npm install --save-dev nodemon