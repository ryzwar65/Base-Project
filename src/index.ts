import "reflect-metadata";
import {createConnection} from "typeorm";
import express, {Application} from "express";
import bodyParser from "body-parser";
import {Server} from "typescript-rest";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";
dotenv.config();

const app : Application = express();
createConnection().then(async (connection)=>{
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  Server.buildServices(app);
  app.listen(process.env.PORT,()=>{
    console.log(`Server Running at Port : ${process.env.PORT}`)
  })
}).catch((error)=>{
  console.log(error);
})