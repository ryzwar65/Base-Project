import "reflect-metadata";
import {createConnection} from "typeorm";
import express, {Application} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
import routes from "routes/route";
dotenv.config();

const app : Application = express();
createConnection().then(async (connection)=>{
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));  
  app.listen(process.env.PORT,()=>{
    console.log(`Server Running at Port : ${process.env.PORT}`)
  })
}).catch((error)=>{
  console.log(error);
})